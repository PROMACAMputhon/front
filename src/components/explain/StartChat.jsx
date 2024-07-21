import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as TalkImage} from "../../assets/images/talkImage.svg";
import styles from "./StartChat.module.css";

function StartChat() {
    return (
        <div className={styles.container}>
            <TalkImage/>
            <Link to={"/ai"}>채팅 시작하기</Link>
        </div>
    );
}

export default StartChat;