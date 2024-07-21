import React from "react";
import styles from "./Main.module.css";

function Main() {
  return (
    <main className={styles.main}>
      <aside className={styles.leftSidebar}>
        <nav>
          <ul>
            <li>대학안내</li>
            <li>입학안내</li>
            <li>대학/대학원</li>
            <li>취업/창업/역량/봉사</li>
            <li>학사/생활/장학</li>
            <li>연구/산학</li>
            <li>국제·교류</li>
            <li>CS광장/시설대관</li>
          </ul>
        </nav>
      </aside>
      <section className={styles.content}>
        <img
          src="/api/placeholder/800/400"
          alt="University campus"
          className={styles.mainImage}
        />
        <h1>동국 108캠퍼스</h1>
        <p>대학생활을 즐겁게 시작하세요</p>
      </section>
      <aside className={styles.rightSidebar}>
        <nav>
          <ul>
            <li>재학생</li>
            <li>교직원</li>
            <li>졸업생</li>
            <li>학부모</li>
            <li>온라인 민원</li>
            <li>인터넷 증명발급</li>
            <li>직원채용</li>
            <li>교직원찾기</li>
            <li>캠퍼스 투어</li>
            <li>찾아오시는길</li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}

export default Main;
