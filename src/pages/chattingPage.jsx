import React, { useState } from "react";
import styles from "./chattingPage.module.css";
import { messageState } from "../recoil/chatting/chattingRecoilState";
import { useRecoilValue } from "recoil";
import ChattingInput from "../components/Chatting/components/Input/ChattingInput";
import PreChatting from "../components/Chatting/components/PreChatting";
import ChattingMessages from "../components/Chatting/components/Messages/ChattingMessages";

function ChattingPage() {
  const messages = useRecoilValue(messageState);
  const [loadingMessageIndex, setLoadingMessageIndex] = useState(null);

  return (
    <div className={styles.container}>
      {messages.length === 0 ? (
        <PreChatting />
      ) : (
        <ChattingMessages
          loadingMessageIndex={loadingMessageIndex}
          setLoadingMessageIndex={setLoadingMessageIndex}
        />
      )}
      <ChattingInput />
    </div>
  );
}

export default ChattingPage;
