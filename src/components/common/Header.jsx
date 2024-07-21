import React from "react";
import styles from "./Header.module.css";
import { Bell, Globe, Search, User } from "lucide-react";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="api/placeholder/150/50" alt="Dongguk University Logo" />
      </div>
      <nav className={styles.mainNav}>
        <ul>
          <li>동국대학교</li>
          <li>WISE캠퍼스</li>
          <li>의료원</li>
          <li>발전기금</li>
        </ul>
      </nav>
      <div className={styles.rightNav}>
        <Bell size={20} />
        <Globe size={20} />
        <User size={20} />
        <span>로그인</span>
        <Search size={20} />
      </div>
    </header>
  );
}

export default Header;
