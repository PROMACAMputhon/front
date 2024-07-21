import React from "react";
import styles from "./PromptCreateButton.module.css";

function PromptCreateButton({ icon, ageNGender, name, content, onSelect }) {
  return (
    <div className={styles.container} onClick={onSelect}>
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
