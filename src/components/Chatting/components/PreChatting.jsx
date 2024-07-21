import React from "react";
import styles from "./PreChatting.module.css";
import PromptCreateButton from "./Prompt/PromptCreateButton";
import akoCharacter from "../../../assets/icons/akoCharacter.svg";

function PreChatting() {
  return (
    <div className={styles.container}>
      <div className={[styles.title, "h1"].join(" ")}>Pick Me, 아코즈</div>
      <div className={styles.typeContainer}>
        <PromptCreateButton
          name="유정"
          ageNGender="24살, 남자"
          icon={akoCharacter}
          content="친절한 선배, 매우 잘생겼으며, 처음 보는 사람에게 아주 친절한 사람이다."
        />
        <PromptCreateButton
          name="김하나"
          ageNGender="22살, 여자"
          icon={akoCharacter}
          content="당돌한 후배, 활발하고 당돌한 성격에 모두가 좋아한다. "
        />
        <PromptCreateButton
          name="이종석"
          ageNGender="30살, 남자"
          icon={akoCharacter}
          content="꼰대 선배, 보수적이고 권위적이며, 자신의 경험을 항상 자랑함"
        />
        <PromptCreateButton
          name="홍규진"
          ageNGender="24살 남자"
          icon={akoCharacter}
          content="해커톤에 참여하느라 항상 바쁨."
        />
      </div>
    </div>
  );
}
export default PreChatting;
