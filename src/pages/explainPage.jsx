import React from 'react';
import styles from "./explainPage.module.css";
import StartChat from "../components/explain/StartChat";
import CharacterExplain from "../components/explain/CharacterExplain";

function ExplainPage() {
    return (
        <div className={styles.container}>
            <div className={styles.startChatSection}>
                <StartChat />
            </div>
            <div className={styles.characterSection}>
                <CharacterExplain/>
            </div>
        </div>
    );
}

export default ExplainPage;