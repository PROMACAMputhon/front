import React, {useState} from 'react';
import styles from './LoginPage.module.css';
import {login} from "../../api/user/user";
import {userState} from "../../recoil/user/userRecoilState";
import {useSetRecoilState} from "recoil";
import {useNavigate} from "react-router-dom";
import {ReactComponent as TalkImage} from "../../assets/images/talkImage.svg";

function LoginPage() {
    const [memberLoginId, setMemberLoginId] = useState('');
    const [memberPassword, setMemberPassword] = useState('');

    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    const handleLogin = async () => {
        const userData = await login(memberLoginId, memberPassword);
        if (userData) {
            setUser({
                isLoggedIn: true,
                userData: userData.id,
            });
            navigate('/');
            console.log('로그인 성공:', userData);
        } else {
            console.log('로그인 실패');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.loginSection}>
                <div className={styles.imageSection}>
                    <TalkImage width={150}/>
                </div>
                <div className={styles.titleSection}>
                    동국동락 캐릭톡
                </div>
                <div className={styles.textSection}>
                    학번
                </div>
                <input
                    className={styles.inputSection}
                    type="text"
                    value={memberLoginId}
                    placeholder={"학번을 입력하세요"}
                    onChange={(e) => setMemberLoginId(e.target.value)}
                />
                <div className={styles.textSection}>
                    비밀번호
                </div>
                <input
                    className={styles.inputSection}
                    type="password"
                    value={memberPassword}
                    placeholder={"비밀번호를 입력하세요"}
                    onChange={(e) => setMemberPassword(e.target.value)}
                />
                <div className={styles.buttonSection}>
                    <button className={styles.loginButton} onClick={handleLogin}>로그인</button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;