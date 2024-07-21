import React, { useEffect, useRef } from "react";
import {
  messageState,
  isLoadingState,
  chooseCharacterState,
} from "../../../../recoil/chatting/chattingRecoilState";
import { useRecoilState } from "recoil";

import SkeletonMessage from "./SkeletonMessage";
import MarkdownRenderer from "./MarkdownRenderer";
import styles from "./ChattingMessages.module.css";

function ChattingMessages() {
  const [messages] = useRecoilState(messageState);
  const [isLoading] = useRecoilState(isLoadingState);
  const [chooseCharacter] = useRecoilState(chooseCharacterState);
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
        <div key={index} className="b5">
          {!message.isBot && (
            <div className={styles.sendMessage}>
              {message.text && (
                <div className={styles.message}>{message.text}</div>
              )}
            </div>
          )}
          {(message.isBot || index === messages.length - 1) && (
            <div className={styles.receiveMessage}>
              <div className={styles.promaChattingProfile}>
                <img src={chooseCharacter.icon} alt="Proma Chatting Profile" />
              </div>
              {isLoading && index === messages.length - 1 ? (
                <SkeletonMessage />
              ) : (
                <div className={styles.receiveMessageText}>
                  <MarkdownRenderer text={message.text} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChattingMessages;
