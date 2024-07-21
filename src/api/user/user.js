import {authInstance} from '../instance';
import {sendRequest} from "../request";

export const login = async (memberLoginId, memberPassword) => {
    try {
        const response = await sendRequest(authInstance, "post", "/signin", {
            memberLoginId,
            memberPassword,
        })

        if (response.data.success) {
            const userData = response.data.responseDto;
            console.log("success");
            return userData;
        }
    } catch (error) {
        if (error.code === '4002') {
            console.log('존재하지 않는 아이디입니다.');
        } else if (error.code === '4003') {
            console.log('비밀번호가 일치하지 않습니다.');
        } else {
            console.log(error.message || '로그인 실패');
        }
    }
};

export const logout = async (memberId) => {
    try{
        const response = await sendRequest(authInstance, "post", "/signout", {
            "memberId" : 6,
        });

        if (response.data.success) {
            const Data = response.data.responseDto;
            console.log("success", Data);
            return Data;
        }
    } catch (error) {
        if (error.code === '4002') {
            console.log('존재하지 않는 아이디입니다.');
        } else {
            console.log(error.message || '로그아웃 실패');
        }
    }
}