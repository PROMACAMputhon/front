import axios from "axios";

// env로 숨긴 url 주소 (AI 주소 <-> front 주소)
const BASE_AI_URL = process.env.REACT_APP_AI_SERVER_URL;

// 우리 서버의 기본 주소
const defaultAIInstance = axios.create({
  baseURL: BASE_AI_URL,
});

// 규진, 정선 <-> 태우 채팅 봇간 연결
const chatBotInstance = axios.create({
  baseURL: `${BASE_AI_URL}/llm/chatbot`,
});

export { defaultAIInstance, chatBotInstance };
