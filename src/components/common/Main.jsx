import React from "react";
import styles from "./Main.module.css";
import LeftSidebar from "./Sidebar/LeftSidebar";
import RightSidebar from "./Sidebar/RightSidebar";
import mainImage from "../../assets/images/mainImage.jpeg";
function Main() {
  return (
    <main className={styles.main}>
      <LeftSidebar />
      <section className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={mainImage} alt="University campus" />
        </div>
      </section>
      <RightSidebar />
    </main>
  );
}

export default Main;
