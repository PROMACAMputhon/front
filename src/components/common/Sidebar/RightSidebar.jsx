import React from 'react';
import styles from "./RightSidebar.module.css";

function RightSidebar() {
    return (
        <div>
            <aside className={styles.rightSidebar}>
                <nav>
                    <ul>
                        <li>재학생</li>
                        <li>교직원</li>
                        <li>졸업생</li>
                        <li>학부모</li>
                        <li>온라인<br/>민원</li>
                        <li>인터넷<br/>증명발급</li>
                        <li>직원채용</li>
                        <li>교직원찾기</li>
                        <li>캠퍼스<br/>투어</li>
                        <li>찾아오시는길</li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

export default RightSidebar;