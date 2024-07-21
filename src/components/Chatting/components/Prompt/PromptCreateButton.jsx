import React from "react";
import styles from "./PromptCreateButton.module.css";
import { useChattingRoomHooks } from "../../../../api/chatting/chattingRoomAPI";
import { getUserIdInLocalStorage } from "../../../../util/localStorageUtil";

function PromptCreateButton({
  icon,
  ageNGender,
  name,
  content,
  onSelect,
  selected,
}) {
  const { createChattingRoom } = useChattingRoomHooks();
  const userId = getUserIdInLocalStorage();
  return (
    <div
      className={`${styles.container} ${selected ? styles.selected : ""}`}
      onClick={() => createChattingRoom(userId, onSelect)}
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
