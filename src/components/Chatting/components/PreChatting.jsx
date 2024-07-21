import React from "react";
import styles from "./PreChatting.module.css";
import PromptCreateButton from "./Prompt/PromptCreateButton";
import { characters } from "../../../assets/const/defaultCharacter";
import {
  chooseCharacterState,
  isFirstState,
} from "../../../recoil/chatting/chattingRecoilState";
import { useSetRecoilState } from "recoil";

function PreChatting() {
  const setChooseCharacter = useSetRecoilState(chooseCharacterState);

  const setIsFirst = useSetRecoilState(isFirstState);

  const handleCharacterSelect = (character) => {
    setChooseCharacter(character);
    setIsFirst(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>아코 캐릭터를 선택하세요!</div>
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
