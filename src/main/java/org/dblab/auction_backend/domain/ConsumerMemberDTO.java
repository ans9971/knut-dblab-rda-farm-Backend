package org.dblab.auction_backend.domain;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.util.Collection;
import java.util.Collections;

import lombok.Data;

@Data
public class ConsumerMemberDTO implements UserDetails{

    private Integer consumer_id;
    private String c_passwd;
    private String c_name;
    private String c_email;
    private String c_phonenum;
    private Integer c_zipcode;
    private String c_location;
    private String c_profile_img;
    private String authority;    // ROLE_USER
    private String token;
    private String c_detail_location;
    private Integer pachi_point;
    private Integer count_auction;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {       //여기서 인증정보 가져오기
        return Collections.singletonList(new SimpleGrantedAuthority(this.authority));// ROLE_USER 를 넣어준다. 기본적인 시큐리티 할때 허용해주는 그런것..
        //인증정보 반환한다.
    }
    @Override
    public String getPassword() {
        return this.c_passwd;
    }
    @Override
    public String getUsername() {
        return this.c_email;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
}
