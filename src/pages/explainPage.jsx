import React from 'react';
import styles from "./explainPage.module.css";
import StartChat from "../components/explain/StartChat";


function ExplainPage() {
    return (
        <div className={styles.container}>
            <StartChat />

            <>
                아코캐릭터 소개
            </>
        </div>
    );
}

export default ExplainPage;