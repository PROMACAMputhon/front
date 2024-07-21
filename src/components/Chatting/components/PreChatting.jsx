import React from "react";
import styles from "./PreChatting.module.css";
import PromptCreateButton from "./Prompt/PromptCreateButton";
import { characters } from "../../../assets/const/defaultCharacter";

function PreChatting() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Pick Me, 아코즈</div>
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
