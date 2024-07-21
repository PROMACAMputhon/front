import React, { useRef, useEffect } from "react";
import styles from "./ChattingInput.module.css";
import {
  chooseCharacterState,
  isLoadingState,
  isFirstState,
  currentRoomIdState,
} from "../../../../recoil/chatting/chattingRecoilState";
import { useRecoilState, useRecoilValue } from "recoil";
import submitButtonIcon from "../../../../assets/icons/submitButtonIcon.svg";
import PromptPreview from "../Prompt/PromptPreview";
import { useChatBot } from "../../../../api/chatting/chattingAPI";

function ChattingInput() {
  const isFirst = useRecoilValue(isFirstState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
  const chooseCharacter = useRecoilValue(chooseCharacterState);
  const currentRoomId = useRecoilValue(currentRoomIdState);
  const [inputValue, setInputValue] = React.useState("");
  const textareaRef = useRef(null);
  const { postChatBot } = useChatBot();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setIsLoading(true);

    try {
      await postChatBot(currentRoomId, inputValue);
      setInputValue("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
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
  }, [inputValue]);

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
            value={inputValue}
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
