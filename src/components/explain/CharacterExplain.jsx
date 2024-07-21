import React, {useEffect, useRef} from 'react';
import styles from './CharacterExplain.module.css';
import {ReactComponent as Yujung} from "../../assets/images/yujung.svg";
import {ReactComponent as Jongsuck} from "../../assets/images/jongsuck.svg";
import {ReactComponent as Minjae} from "../../assets/images/minjae.svg";
import {ReactComponent as Hana} from "../../assets/images/hana.svg";

function CharacterExplain() {
    const characterSections = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                } else {
                    // 선택 사항: 다시 스크롤 올릴 때 숨김 효과
                    entry.target.classList.remove(styles.show);
                }
            });
        });

        characterSections.current.forEach((section) => {
            if (section) { // 유효한 요소인지 확인
                observer.observe(section);
            }
        });

        return () => {
            characterSections.current.forEach((section) => {
                if (section) { // 유효한 요소인지 확인
                    observer.unobserve(section);
                }
            });
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.commentSection}>
                <div className={styles.comment}>
                    아코 캐릭터를 소개합니다!
                </div>
            </div>
            <div ref={(el) => (characterSections.current[0] = el)} className={styles.characterSection}>
                <Yujung />
            </div>
            <div ref={(el) => (characterSections.current[1] = el)} className={styles.characterSection}>
                <Hana/>
            </div>
            <div ref={(el) => (characterSections.current[2] = el)} className={styles.characterSection}>
                <Jongsuck/>
            </div>
            <div ref={(el) => (characterSections.current[3] = el)} className={styles.characterSection}>
                <Minjae/>
            </div>
        </div>
    );
}

export default CharacterExplain;