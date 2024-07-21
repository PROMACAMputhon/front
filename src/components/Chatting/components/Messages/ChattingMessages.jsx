import React, { useEffect, useRef } from "react";
import {
  messageState,
  isLoadingState,
  chooseCharacterState,
} from "../../../../recoil/chatting/chattingRecoilState";
import { useRecoilValue } from "recoil";

import SkeletonMessage from "./SkeletonMessage";
import MarkdownRenderer from "./MarkdownRenderer";
import styles from "./ChattingMessages.module.css";

function ChattingMessages() {
  const messages = useRecoilValue(messageState);
  const isLoading = useRecoilValue(isLoadingState);
  const chooseCharacter = useRecoilValue(chooseCharacterState);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={styles.messagesContainer}>
      {messages.map((message, index) => (
        <div key={message.chat_id || index} className="b5">
          {message.question && (
            <div className={styles.sendMessage}>
              <div className={styles.message}>{message.question}</div>
            </div>
          )}
          {message.answer && (
            <div className={styles.receiveMessage}>
              <div className={styles.promaChattingProfile}>
                <img src={chooseCharacter.icon} alt="Proma Chatting Profile" />
              </div>
              <div className={styles.receiveMessageText}>
                <MarkdownRenderer text={message.answer} />
              </div>
            </div>
          )}
        </div>
      ))}
      {isLoading && (
        <div className={styles.receiveMessage}>
          <div className={styles.promaChattingProfile}>
            <img src={chooseCharacter.icon} alt="Proma Chatting Profile" />
          </div>
          <SkeletonMessage />
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChattingMessages;
