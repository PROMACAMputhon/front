import React from "react";
import styles from "./PromptCreateButton.module.css";
import { useSetRecoilState } from "recoil";
import { isFirstState } from "../../../../recoil/chatting/chattingRecoilState";

function PromptCreateButton({ icon, ageNGender, name, content }) {
  const setIsFirst = useSetRecoilState(isFirstState);

  function clickPromptButton() {
    setIsFirst(false);
  }
  return (
    <div className={styles.container} onClick={clickPromptButton}>
      <div className={styles.promptCreateButton}>
        <img alt="아이콘" src={icon} className={styles.iconContainer} />
      </div>
      <p className={styles.typeText}>{name}</p>
      <p className={styles.promaText}>{ageNGender}</p>
      <p className={styles.contentText}>{content}</p>
    </div>
  );
}

export default PromptCreateButton;
