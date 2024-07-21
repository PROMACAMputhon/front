import axios from "axios";

//env로 숨긴 url 주소 (backend 주소 <-> front 주소)
const BASE_BACKEND_URL = process.env.REACT_APP_BACKEND_SERVER_URL;

// 우리 서버의 기본 주소
const defaultBackEndInstance = axios.create({
  baseURL: BASE_BACKEND_URL,
});

// 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행 상황 봐서 쓸 수도 있고 안 쓸 수도 있음
//applyInterceptors(defaultInstance);

//규진, 정선 - 채팅 및
const chattingInstance = axios.create(defaultBackEndInstance.defaults);
chattingInstance.defaults.baseURL += "/chatting";

//동현 - 회원가입 및 로그인
const memberInstance = axios.create(defaultBackEndInstance.defaults);
memberInstance.defaults.baseURL += "/member";

// // 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행
// applyInterceptors(authInstance);

export { defaultBackEndInstance, chattingInstance, memberInstance };
