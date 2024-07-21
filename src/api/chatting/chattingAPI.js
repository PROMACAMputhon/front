import {
  isLoadingState,
  messageState,
} from "../../recoil/chatting/chattingRecoilState";
import { chatBotInstance } from "../aiInstance";
import { sendRequest } from "../request";
import { useSetRecoilState } from "recoil";
import { useChattingRoomHooks } from "./chattingRoomAPI";
import { getUserIdInLocalStorage } from "../../util/localStorageUtil";

// const generateMockResponse = (question, characterType) => {
//   const responses = [
//     `## 답변\n\n당신의 질문 "${question}"에 대한 답변입니다:\n\n- 첫 번째 포인트\n- 두 번째 포인트\n- 세 번째 포인트\n\n자세한 내용은 다음과 같습니다:\n\n1. 상세 설명 1\n2. 상세 설명 2\n3. 상세 설명 3\n\n\`\`\`\n코드 예시가 필요한 경우 여기에 작성합니다.\n\`\`\``,
//     `### ${characterType.name}의 의견\n\n${question}에 대해 다음과 같이 생각합니다:\n\n1. 주요 관점\n2. 부가 설명\n3. 결론\n\n> 중요한 인용구나 강조하고 싶은 내용을 여기에 작성합니다.`,
//     `# ${characterType.name}의 분석\n\n## 1. 개요\n${question}에 대한 간단한 개요입니다.\n\n## 2. 주요 논점\n- 논점 1\n- 논점 2\n- 논점 3\n\n## 3. 결론\n최종적인 의견을 여기에 작성합니다.\n\n---\n\n추가 참고 사항이 있다면 여기에 작성합니다.`,
//   ];

//   return responses[Math.floor(Math.random() * responses.length)];
// };

export const useChatBot = () => {
  const setMessages = useSetRecoilState(messageState);
  const setIsLoading = useSetRecoilState(isLoadingState);
  const { getChattingRoomList } = useChattingRoomHooks();
  const postChatBot = async (roomId, question) => {
    setIsLoading(true);
    try {
      // //mockData로 테스트
      // const mockResponse = generateMockResponse(question, characterType);

      // // 사용자 질문 추가
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   {
      //     chat_id: Date.now(),
      //     question: question,
      //     createAt: new Date().toISOString(),
      //   },
      // ]);

      // // 지연 효과 추가 (1~3초)
      // await new Promise((resolve) =>
      //   setTimeout(resolve, Math.random() * 2000 + 1000)
      // );

      // // 봇 답변 추가
      // setMessages((prevMessages) => [
      //   ...prevMessages,
      //   {
      //     chat_id: Date.now() + 1,
      //     answer: mockResponse,
      //     createAt: new Date().toISOString(),
      //   },
      // ]);

      setMessages((prevMessages) => [
        ...prevMessages,
        {
          chat_id: Date.now(),
          question: question,
          createAt: new Date().toISOString(),
        },
      ]);

      getChattingRoomList(getUserIdInLocalStorage());

      const response = await sendRequest(chatBotInstance, "post", "/", {
        roomId: roomId,
        question: question,
      });

      if (response.data.success) {
        const newChat = response.data.responseDto.answer;

        setMessages((prevMessages) => [
          ...prevMessages,
          {
            chat_id: Date.now() + 1,
            answer: newChat,
            createAt: new Date().toISOString(),
          },
        ]);
      } else {
        console.error("AI - API 요청 실패:", response.data.error);
      }
    } catch (error) {
      console.error("AI - API 요청 중 오류 발생:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { postChatBot };
};
