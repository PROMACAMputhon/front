import React, { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  chattingRoomListState,
  currentRoomIdState,
} from "../../../../recoil/chatting/chattingRecoilState";
import styles from "./Sidebar.module.css";
import { useChattingRoomHooks } from "../../../../api/chatting/chattingRoomAPI";
import { getUserIdInLocalStorage } from "../../../../util/localStorageUtil";
import menu from "../../../../assets/icons/menu.svg";
import exit from "../../../../assets/icons/exit.svg";
import logout from "../../../../assets/icons/logout.svg";
import chattingRoom from "../../../../assets/icons/chattingRoom.svg";

function Sidebar() {
  const roomList = useRecoilValue(chattingRoomListState);
  const [openSidebar, setOpenSidebar] = useState(false);
  const setCurrentRoomId = useSetRecoilState(currentRoomIdState);
  const { getChattingRoomList, getChattingList } = useChattingRoomHooks();

  useEffect(() => {
    // TODO: getChattingRoomList에서 사용자 ID로 대체해야함
    getChattingRoomList();
  }, [getChattingRoomList]);

  const handleRoomClick = async (roomId) => {
    setCurrentRoomId(roomId);
    //TODO getChattingList에서 사용자 ID로 대체해야함
    await getChattingList(roomId, getUserIdInLocalStorage()); // 여기서 'sungwoo'는 실제 로그인한 사용자 ID로 대체해야 합니다.
  };

  return (
    <div className={`${styles.sidebar} ${openSidebar ? styles.open : ""}`}>
      <img
        src={openSidebar ? exit : menu}
        className={styles.menu}
        alt="menu"
        onClick={() => setOpenSidebar(!openSidebar)}
      />
      <div className={openSidebar ? styles.visibleContent : styles.hiddenContent}>
        <h2>채팅 목록</h2>
          {roomList.length > 0 ? (
            <div className={styles.scrollContainer}>
            <ul className={styles.listContainer}>
              {roomList.map((room) => (
                <div className={styles.listItemBlock}>
                <img src={chattingRoom} alt="chattingRoom" />
                <li
                  key={room.room_id}
                  onClick={() => handleRoomClick(room.room_id)}
                  className={styles.listItem}
                >
                  {room.room_title}
                </li>
                </div>
              ))}
            </ul>
            </div>
          ) : (
            <p>채팅방이 없습니다.</p>
          )}
      </div>
      <img src={logout} className={styles.logout} />
    </div>
  );
}

export default Sidebar;
