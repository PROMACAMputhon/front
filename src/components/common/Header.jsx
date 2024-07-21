import React from "react";
import styles from "./Header.module.css";
import { Bell, Globe, Search, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { useLoginHooks } from "../../api/user/user";
import { getUserIdInLocalStorage } from "../../util/localStorageUtil";
import headerLogo from "../../assets/icons/headerLogo.svg";
import colorLogo from "../../assets/images/colorLogo.jpg";

function Header() {
  const { logout } = useLoginHooks();

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navigate = useNavigate();
  const userId = getUserIdInLocalStorage();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoutClick = () => {
    logout(userId);
    navigate("/login");
  };

  const Refresh = () => {
    window.location.reload();
  };

  const containerClassName = isHomePage ? `${styles.container} ${styles.homePage}` : `${styles.container} ${styles.chatPage}`;

  return (
    <header className={containerClassName}>
      {isHomePage ? (
        <div className={styles.header}>
          <div className={styles.logoSection}>
            <Logo height={40} />
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
            {userId ? (
              <span className={styles.loginSection} onClick={handleLogoutClick}>
                로그아웃
              </span>
            ) : (
              <span className={styles.loginSection} onClick={handleLoginClick}>
                로그인
              </span>
            )}
            <Search size={20} />
          </div>
        </div>
      ) : (
        <nav className={styles.chatHeader}>
          <div className={styles.logoSection}>
            <Link to={"/"}>
              <img src={colorLogo} height={40}/>
            </Link>
          </div>
          <div className={styles.chatTitle} onClick={Refresh}>
            <img src={headerLogo} alt="logo" />
          </div>
          <div className={styles.chatExplain}>
            <Link to={"/ai/explain"}>소개</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
