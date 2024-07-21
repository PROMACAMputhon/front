import React from "react";
import styles from "./PromptPreview.module.css";


function PromptPreview() {


  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}></div>
      <p className={styles.text}>
        질문하기 전, 사용하실 프롬프트를 클릭하세요!
      </p>
      {/* 프롬프트 추가시 표시하는 조건문 추가 */}
    </div>
  );
}

export default PromptPreview;
