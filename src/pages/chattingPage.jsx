import React from "react";
import styles from "./chattingPage.module.css";
import { currentRoomIdState } from "../recoil/chatting/chattingRecoilState";
import { useRecoilValue } from "recoil";
import ChattingInput from "../components/Chatting/components/Input/ChattingInput";
import PreChatting from "../components/Chatting/components/PreChatting";
import ChattingMessages from "../components/Chatting/components/Messages/ChattingMessages";
import Sidebar from "../components/Chatting/components/Sidebar/Sidebar";

function ChattingPage() {
  const currentRoomId = useRecoilValue(currentRoomIdState);

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <div className={styles.chatContainer}>
        {currentRoomId ? (
          <>
            <div className={styles.messagesContainer}>
              <ChattingMessages />
            </div>
            <div className={styles.inputContainer}>
              <ChattingInput />
            </div>
          </>
        ) : (
          <div className={styles.preChatContainer}>
            <PreChatting />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChattingPage;
