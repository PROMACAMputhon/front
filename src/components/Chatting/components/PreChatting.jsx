import React from "react";
import styles from "./PreChatting.module.css";
import PromptCreateButton from "./Prompt/PromptCreateButton";
import { characters } from "../../../assets/const/defaultCharacter";

function PreChatting() {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>아코 캐릭터를 선택하세요!</div>
        <p>캐릭터 선택 후, 캐릭터와의 대화가 시작됩니다!</p>
      </div>
      <div className={styles.typeContainer}>
        {characters.map((character, index) => (
          <PromptCreateButton
            key={index}
            name={character.name}
            ageNGender={character.ageNGender}
            icon={character.icon}
            content={character.content}
            onSelect={index}
          />
        ))}
      </div>
    </div>
  );
}

export default PreChatting;
