package org.dblab.auction_backend.config;

import java.sql.Date;
import java.sql.SQLException;
import java.util.List;

import org.dblab.auction_backend.domain.BidClosingDTO;
import org.dblab.auction_backend.service.AuctionService;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class BidDeadlineTimer extends Thread {
    private static Logger log = LoggerFactory.getLogger(BidDeadlineTimer.class);
    private static List<BidClosingDTO> bidClosingDTOs = null;
    private static long DEADLINE_STANDARD_TIME = 1000 * 60 * 60 * 3;             // 현재시간으로부터 마감경매를 찾는 기준 시간, 3시간(=10800000ms, 1000 * 60 * 60 * 3)
    private static long sleepTime = DEADLINE_STANDARD_TIME;
    private static Date latestTime = null;
    private static Boolean mustSleep = false;
    private final AuctionService auctionService;

    @Override
    public void run() {
        log.info("BidDeadlineTimerThread 실행");     
        
        while(true){
            try {
                if (bidClosingDTOs == null || bidClosingDTOs.size() == 0) { //현재 bidClosingDTOs 배열에 아무것도없나 , 경매 처음이거나 경매가 다 끝낫다
                    log.info("mustSleep: " + mustSleep);
                    if(mustSleep){ //서비스에서 중복 db접근할때 충될되서 강제 슬립 설정
                        sleepTime = 30000;
                        mustSleep = false;
                    } else{
                        bidClosingDTOs = auctionService.getRecentlyBid(); //3시간 이내 경매 가져오기

                        // 3시간 이내 마감될 경매가 없는 경우, 3시간 sleep 
                        if (bidClosingDTOs.size() == 0){
                            sleepTime = DEADLINE_STANDARD_TIME; //3시간 이내에 마감될 경매가없으면 강제 3시간 슬립
                            latestTime = null; //가장늦게끝나는 경매의 시간변수
                            log.info("########## : " + sleepTime);
                        } else { // 만약 세시간 이전에 끝나는 경매가 있을경우 
                            latestTime = bidClosingDTOs.get(bidClosingDTOs.size()-1).getDeadline_date(); // 3시간 이내 경매중 가장 늦은 경매를 latestime에 담는다.
                            sleepTime = bidClosingDTOs.get(0).getDeadline_date().getTime() - System.currentTimeMillis(); //슬립하는 시간 마감시간에서 현재시간 빼면 공백기간 나오는데 그 시간동안 슬립
                            log.info(bidClosingDTOs.get(0).toString());
                        }
                        if (sleepTime < 0) sleepTime = 30000;

                        for(int i = 0; i < bidClosingDTOs.size(); i++) 
                            log.info(bidClosingDTOs.get(i).getAuction_Id() + "  " + bidClosingDTOs.get(i).getDeadline_date().getTime());
                        mustSleep = false;
                    }
                    log.info("-----------------------------------------" + System.currentTimeMillis() + "  sleepTime : "  + sleepTime);
                } else { //경매 마감시켜주는 부분
                    mustSleep = false;
                    // 현재 시간에서 가까운 값 빼기(초 단위)
                    sleepTime = bidClosingDTOs.get(0).getDeadline_date().getTime() - System.currentTimeMillis(); //가장일찍끝나는 경매시간을 가져와서 현재시간을 빼준다. 값이 -면 끝나야될 경매라서 슬립에 담믄ㄴ다
                    log.info("bidClosingDTOs.get(0).getDeadline_date().getTime(): " + bidClosingDTOs.get(0).getDeadline_date().getTime());
                    log.info("System.currentTimeMillis(): " + System.currentTimeMillis());
                    log.info("sleepTime : " + sleepTime);
                    
                    log.info("마감경매 검사");
                    log.info("sleepTime : " + sleepTime);
                    log.info("bidClosingDTOs.auction_Id()" + bidClosingDTOs.get(0).getAuction_Id());

                    // 0.01 초 미만 시
                    if (sleepTime < 10) {//가장 앞에있는 경매가 제한시간 이내이면
                        log.info("마감경매 추가!!");
                        auctionService.closeBidding(bidClosingDTOs.get(0).getAuction_Id()); //클로즈비딩 실행
                        bidClosingDTOs.remove(0); //경매 마감됬으니까 배열에서 삭제
                        if(bidClosingDTOs.size() > 0){ //만약 경매 마감하고 배열이 null일때 강제 슬립
                            sleepTime = bidClosingDTOs.get(0).getDeadline_date().getTime() - System.currentTimeMillis();
                        }
                    }
                }
                if(sleepTime < 0) sleepTime = 60000;
                log.info("sleep time : " + sleepTime);
                Thread.sleep(sleepTime);    // 헤당 시간 만큼 sleep
            } catch (InterruptedException interruptedException) {
                log.info(interruptedException.toString());
                log.info("마감경매 인터럽트!!");
            } catch (Exception e){
                log.info(e.toString());
                log.info("SQL 에러!! 30초 sleep");
                bidClosingDTOs = null;
                mustSleep = true; //무한루프됬을때 강제 슬립
            }
        }
    }

    // 마감 시간 확인 후 삽입 메소드
    public static int checkBidding(int auction_Id, Date deadline_date){
        log.info("auction_Id: " + auction_Id);
        log.info("deadline_date: " + deadline_date.getTime());
        log.info("latestTime: " + latestTime);
        if (latestTime == null ) { //3시간이내 마감될경매가없다
            long tmpSleepTime = deadline_date.getTime() - System.currentTimeMillis(); //새로들어온 경매에서 지금시간뻰다
            log.info("latestTime == null");
            log.info("tmpSleepTime: " + tmpSleepTime + " DEADLINE_STANDARD_TIME: " + DEADLINE_STANDARD_TIME);
            if ((tmpSleepTime < DEADLINE_STANDARD_TIME)){//3시간이내경매일경우
                bidClosingDTOs.add(new BidClosingDTO(auction_Id, deadline_date)); //3시간이내경매리스트에 추가
                latestTime = deadline_date; //기존 경매가없었기때문에 latesttime을 지금경매로 설정해준다.
                sleepTime = tmpSleepTime; //슬립시간 최근경매 뺀걸로 교체
                for(int i = 0; i < bidClosingDTOs.size(); i++) 
                    log.info(bidClosingDTOs.get(i).getAuction_Id() + "  " + bidClosingDTOs.get(i).getDeadline_date().getTime());
                return 1;
            }
        } else if (deadline_date.getTime() - latestTime.getTime() < 0) { //방금 들어온 경매랑 기존 제일 늦은 경매를 빼서 새로운 경매가 더 빨리끝나면
            log.info("bidClosingDTOs의 길이만큼 비교하면서 삽입");
            log.info("latestTime: " + latestTime);
            log.info("bidClosingDTOs.size(): " + bidClosingDTOs.size());
            // bidClosingDTOs의 길이만큼 비교하면서 삽입
            for(int i = 0; i < bidClosingDTOs.size(); i++) {  
                log.info("bidClosingDTOs.get(i).getDeadline_date().getTime()" + bidClosingDTOs.get(i).getDeadline_date().getTime() + " " + i);                                                  
                if (deadline_date.getTime() - bidClosingDTOs.get(i).getDeadline_date().getTime() < 0){
                    log.info("deadline_date.getTime() = " +  deadline_date.getTime());
                    log.info("bidClosingDTOs.get(i).getDeadline_date().getTime() = " +  bidClosingDTOs.get(i).getDeadline_date().getTime());
                    log.info("deadline_date.getTime() - bidClosingDTOs.get(i).getDeadline_date().getTime() = " +  (deadline_date.getTime() - bidClosingDTOs.get(i).getDeadline_date().getTime())); 
                    bidClosingDTOs.add(i, new BidClosingDTO(auction_Id, deadline_date));
                    break; //경매들 사이즈만큼 폴문 돌려서 0번째 경매부터 비교해서 더 먼저끝나면 순서를 그 순서로 정해서 넣는다
                } 
                    
            }
            for(int i = 0; i < bidClosingDTOs.size(); i++) 
                    log.info(bidClosingDTOs.get(i).getAuction_Id() + "  " + bidClosingDTOs.get(i).getDeadline_date().getTime());
            return 1;
        }
        return 0;
    }
}
