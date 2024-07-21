import React from 'react';
import styles from "./LeftSidebar.module.css";

function LeftSidebar() {
    return (
        <div>
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
                        <li>동국소식</li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

export default LeftSidebar;