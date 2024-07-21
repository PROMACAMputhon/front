import React from "react";
import styles from "./Main.module.css";
import LeftSidebar from "./Sidebar/LeftSidebar";
import RightSidebar from "./Sidebar/RightSidebar";

function Main() {
  return (
    <main className={styles.main}>
      <LeftSidebar/>
      <section className={styles.content}>
        <img
          src="/api/placeholder/800/400"
          alt="University campus"
          className={styles.mainImage}
        />
        <h1>동국 108캠퍼스</h1>
        <p>대학생활을 즐겁게 시작하세요</p>
      </section>
      <RightSidebar/>
    </main>
  );
}

export default Main;
