import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as TalkImage} from "../../assets/images/talkImage.svg";
import {ReactComponent as DownArrow} from "../../assets/icons/downArrow.svg";
import styles from "./StartChat.module.css";

function StartChat() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleChatStart = () => {
        navigate("/ai"); // "/ai" 경로로 이동
    };

    return (
        <div className={styles.container}>
            <div className={styles.imageSection}>
                <TalkImage/>
            </div>
            <div className={styles.firstComent}>
                다양한 아코 캐릭터와 대화해보아요
            </div>
            <div className={styles.secondComent}>
                다양한 성격의 아코봇과 함께하는 알찬 공간!
            </div>
            <div className={styles.buttonSection}>
                <button className={styles.startButton} onClick={handleChatStart}>
                    채팅 시작하기
                </button>
            </div>
            <div className={styles.arrowSection}>
                <DownArrow/>
            </div>
        </div>
    );
}

export default StartChat;