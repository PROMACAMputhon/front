import React, { useRef, useEffect } from "react";
import styles from "./ChattingInput.module.css";
import {
  isLoadingState,
  messageState,
} from "../../../../recoil/chatting/chattingRecoilState";
import useInput from "../../../../hooks/useInput";
import { useRecoilState, useSetRecoilState } from "recoil";
import submitButtonIcon from "../../../../assets/icons/submitButtonIcon.svg";
import PromptPreview from "../Prompt/PromptPreview";
import { isFirstState } from "../../../../recoil/chatting/chattingRecoilState";

function ChattingInput() {
  const [isFirst, setIsFirst] = useRecoilState(isFirstState);
  const setMessages = useSetRecoilState(messageState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const input = useInput("");
  const textareaRef = useRef(null);

  const simulateApiCall = async (question) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = {
        responseDto: {
          answer:
            '**프롬프트 엔지니어링: 이해하기 쉬운 설명**\n\n프롬프트 엔지니어링은 컴퓨터에게 올바르고 명확한 지침을 제공하여 최상의 결과를 얻는 기술입니다. 마치 요리사에게 맛있는 요리를 만들기 위한 자세한 레시피를 제공하는 것과 같습니다.\n\n**예시:**\n\n* **나쁜 프롬프트:** "맛있는 피자를 만들어줘."\n* **좋은 프롬프트:** "크러스트가 바삭하고 치즈가 많고 올리브, 페퍼로니, 버섯이 얹힌 12인치 피자를 만들어줘."\n\n프롬프트 엔지니어링을 통해 컴퓨터는 무엇을 해야 하는지 정확히 이해할 수 있습니다. 이를 통해 더 정확하고 관련성 있는 결과를 생성할 수 있습니다.\n\n**장점:**\n\n* **향상된 결과:** 명확한 지침을 제공하여 더 나은 출력을 얻을 수 있습니다.\n* **시간 절약:** 컴퓨터가 명확한 프롬프트를 이해하면 반복적인 작업을 줄일 수 있습니다.\n* **크리에이티비티 향상:** 프롬프트 엔지니어링을 통해 새로운 아이디어를 탐구하고 혁신적인 솔루션을 생성할 수 있습니다.\n\n**단점:**\n\n* **시간 소요:** 좋은 프롬프트를 만드는 데는 시간이 걸릴 수 있습니다.\n* **전문 지식 필요:** 프롬프트 엔지니어링에 대한 특정 분야의 지식이 필요할 수 있습니다.\n* **제한된 범위:** 프롬프트는 컴퓨터가 이해할 수 있는 범위 내에서 작성되어야 합니다.\n\n전반적으로 프롬프트 엔지니어링은 컴퓨터와 효과적으로 소통하고 최상의 결과를 얻기 위한 강력한 도구입니다. 명확하고 구체적인 지침을 제공하여 작업을 간소화하고 창의성을 향상시킬 수 있습니다.',
        },
        error: null,
        success: true,
      };
      return response;
    } finally {
      setIsLoading(false);
      setIsFirst(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }

    const newMessage = {
      text: input.value,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    const response = await simulateApiCall(input.value);
    if (response.success) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.responseDto.answer, isBot: true },
      ]);
    }

    input.reset();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        // Shift+Enter: 줄바꿈
        return;
      } else {
        // Enter: 메시지 전송
        e.preventDefault();
        handleSubmit(e);
      }
    }
  };

  const handleInputChange = (e) => {
    input.onChange(e);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, []);

  return (
    <div className={styles.container}>
      {isFirst ? <PromptPreview /> : <h3>프롬프트 적용중!</h3>}
      <form onSubmit={handleSubmit} className={styles.inputContainer}>
        <div className={styles.input}>
          <textarea
            value={input.value}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="질문을 입력하세요."
            className={[styles.textInput, "b5"].join(" ")}
            ref={textareaRef}
            rows={1}
            disabled={isLoading}
          />
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            <img src={submitButtonIcon} alt="Submit" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChattingInput;
