package org.dblab.auction_backend.config;

import java.sql.Date;

import org.springframework.stereotype.Component;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class ThreadControl { //스레드를 바로사용할수없어서 스레드컨트롤러라는 매개체를 만들어준다

    private final BidDeadlineTimer bidDeadlineTimer;
    private static Thread timerThread;

    public void start(){
        timerThread = new Thread(bidDeadlineTimer); //스레드 상속받은bidDeadlineTimer 객체 생성
        timerThread.start();
    }
    public static void checkBidding(int auction_Id, Date deadline_date) {
        if (BidDeadlineTimer.checkBidding(auction_Id, deadline_date) == 1) timerThread.interrupt();
        //체크비딩 먼저하고 추가되어야할경우 인터럽트 발생시킨다.
        //1일경우는 기존 3시간 이내의 경매가 담겨져있는 리스트에 변화가 생겼을경우
    }
    
}
