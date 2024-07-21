import React from "react";
import styles from "./mainPage.module.css";
import Main from "../components/common/Main";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();

  function onClickHandler() {
    navigate("/ai");
  }
  return (
    <div className={styles.container}>
      <Main />
      <div className={styles.chatButton} onClick={onClickHandler}>
        ?
      </div>
    </div>
  );
}

export default MainPage;
