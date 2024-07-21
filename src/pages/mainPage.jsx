import React, { useState } from "react";
import styles from "./mainPage.module.css";
import Main from "../components/common/Main";

function MainPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.container}>
      <Main />
      <div className={styles.chatButton} onClick={() => setIsExpanded(true)}>
        ?
      </div>
      {isExpanded && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>채팅 상담</span>
            <button onClick={() => setIsExpanded(false)}>닫기</button>
          </div>
          <div className={styles.chatBody}>
            {/*여기에 이제 채팅 컴포넌트 들어갈 거임 */}
            {/* 링크로 이동시키는 방법으로 수정 */}
          </div>
          <button
            className={styles.expandButton}
            onClick={() => {
              /* 모달 열기 로직 */
            }}
          >
            확장
          </button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
