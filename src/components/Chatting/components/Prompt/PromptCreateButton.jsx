import React from "react";
import styles from "./PromptCreateButton.module.css";

function PromptCreateButton({ icon, ageNGender, name, content, onSelect, selected }) {
  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ""}`}
      onClick={onSelect}
    >
      <div className={styles.promptCreateButton}>
        <img alt="아이콘" src={icon} className={styles.iconContainer} />
      </div>
      <div className={styles.contentContainer}>
        <p className={styles.typeText}>{name}</p>
        <p className={styles.age}>{ageNGender}</p>
        <p className={styles.contentText}>{content}</p>
      </div>
    </div>
  );
}

export default PromptCreateButton;
