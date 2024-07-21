import React from "react";
import styles from "./PreChatting.module.css";
import PromptCreateButton from "./Prompt/PromptCreateButton";
import { useChattingRoomHooks } from "../../../api/chatting/chattingRoomAPI";
import { characters } from "../../../assets/const/defaultCharacter";

function PreChatting() {
  const { createChattingRoom } = useChattingRoomHooks();

  const handleCharacterSelect = (character) => {
    createChattingRoom(1, character.type, 1);
  };

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
            onSelect={() => handleCharacterSelect(character)}
          />
        ))}
      </div>
    </div>
  );
}

export default PreChatting;
