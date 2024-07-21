import React from "react";
import styles from "./Chatting.module.css";
import { messageState } from "../../recoil/chatting/chattingRecoilState";
import { useRecoilValue } from "recoil";
import ChattingInput from "./components/Input/ChattingInput";
import PreChatting from "./components/PreChatting";

function Chatting() {
  const messages = useRecoilValue(messageState);

  return (
    <div className={styles.container}>
      {messages.length === 0 ? (
        <PreChatting />
      ) : (
        // 여기에 향후 ChattingMessage가 들어갈 예정
        <h1>{messages.map((msg) => msg.text).join(", ")}</h1>
      )}
      <ChattingInput />
    </div>
  );
}

export default Chatting;
