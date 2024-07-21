import React from "react";
import styles from "./Header.module.css";
import { Bell, Globe, Search, User } from "lucide-react";
import {useLocation, useNavigate} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/icons/logo.svg";
import {Link} from "react-router-dom";
import {useRecoilState} from "recoil";
import {userState} from "../../recoil/user/userRecoilState";
import {logout} from "../../api/user/user";

function Header() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const navigate = useNavigate();

    const [user, setUser] = useRecoilState(userState);
    const handleLoginClick = async () => {
        if (user.isLoggedIn) {
            const data = await logout(user.userData);
            
            if (data) {
                setUser({isLoggedIn: false, userData: null});
                console.log('로그아웃 성공:', data);
            } else {
                console.error("로그아웃 실패333:", data);
            }
        }else {
            navigate("/login");
        }
    };

    return (
        <header className={styles.container}>
            {isHomePage ? (
                <div className={styles.header}>
                    <div className={styles.logoSection}>
                        <Logo width={150} height={50}/>
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
                        <Bell size={20}/>
                        <Globe size={20}/>
                        <User size={20}/>
                        {user.isLoggedIn ? (
                            <span className={styles.loginSection} onClick={handleLoginClick}>로그아웃</span>
                        ) : (
                            <span className={styles.loginSection} onClick={handleLoginClick}>로그인</span>
                        )}
                        <Search size={20}/>
                    </div>
                </div>
            ) : (
                <nav className={styles.chatHeader}>
                    <div className={styles.logoSection}>
                        <Link to={"/"}>
                            <Logo width={150} height={50}/>
                        </Link>
                    </div>
                    <div className={styles.chatTitle}>
                        동국동락 캐릭톡
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