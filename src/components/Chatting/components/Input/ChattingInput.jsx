import React, { useRef, useEffect } from "react";
import styles from "./ChattingInput.module.css";
import {
  chooseCharacterState,
  isLoadingState,
  isFirstState,
  messageState,
} from "../../../../recoil/chatting/chattingRecoilState";
import useInput from "../../../../hooks/useInput";
import { useRecoilState, useSetRecoilState } from "recoil";
import submitButtonIcon from "../../../../assets/icons/submitButtonIcon.svg";
import PromptPreview from "../Prompt/PromptPreview";

function ChattingInput() {
  const [isFirst, setIsFirst] = useRecoilState(isFirstState);
  const setMessages = useSetRecoilState(messageState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const [chooseCharacter] = useRecoilState(chooseCharacterState);
  const input = useInput("");
  const textareaRef = useRef(null);

  const simulateApiCall = async (question) => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = {
        responseDto: {
          answer:
            '*김민재는 무심한 표정으로 당신을 바라보며 살짝 미소를 지었다.*\n\n"점심? 뭐, 상록원에서 먹는 게 어때? 거기 학식 괜찮아. *그는 주머니에서 휴대폰을 꺼내 시간을 확인했다.* 그리고 원흥관에 있는 카페에서 커피 한 잔 하는 것도 나쁘지 않을 거야. *그는 잠시 생각에 잠겼다가 덧붙였다.* 그냥 지나가다가 생각난 건데, 너도 고양이 좋아하잖아? 상록원 근처에 고양이 자주 보이더라. 같이 가서 볼래?"\n\n*그는 무심한 듯한 표정을 유지하면서도, 당신이 좋아할 만한 것을 신경 쓰는 모습이 엿보였다.*',
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
      {isFirst ? (
        <PromptPreview />
      ) : (
        <h3>{chooseCharacter.name} 프롬프트 적용중!</h3>
      )}
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
