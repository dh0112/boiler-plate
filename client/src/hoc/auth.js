import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute = null) {

    //null   =>  아무나 출입이 가능한 페이지
    //true   =>  로그인한 유저만 출입이 가능한 페이지 
    //false   =>  로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props) {
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //로그인 하지 않은 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        //로그인 하지 않은 유저가 로그인 했을때만 들어갈 수 있는 페이지에 접속 시도 -> 로그인페이지로 이동시킴
                        props.history.push('/login')
                    }
                } else {
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        //로그인한 어드민이 아닌 유저가 어드민만 들어알 수 있는 페이지에 접속 시도 -> 시작페이지로 이동시킴
                        props.history.push('/')
                    } else {
                        if(!option) 
                        //로그인한 유저가 로그인 안했을때만 들어갈 수 있는 페이지에 접속시도 -> 시작페이지로 이동시킴
                        props.history.push('/')
                    }
                }
                
            })
         
        }, [])

        return (
            <SpecificComponent />
        )
    } 




    return AuthenticationCheck
}