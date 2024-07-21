import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  chattingRoomListState,
  currentRoomIdState,
} from "../../../../recoil/chatting/chattingRecoilState";
import styles from "./Sidebar.module.css";
import { useChattingRoomHooks } from "../../../../api/chatting/chattingRoomAPI";

function Sidebar() {
  const roomList = useRecoilValue(chattingRoomListState);
  const setCurrentRoomId = useSetRecoilState(currentRoomIdState);
  const { getChattingRoomList, getChattingList } = useChattingRoomHooks();

  useEffect(() => {
    // TODO: getChattingRoomList에서 사용자 ID로 대체해야함
    getChattingRoomList(1);
  }, [getChattingRoomList]);

  const handleRoomClick = async (roomId) => {
    setCurrentRoomId(roomId);
    //TODO getChattingList에서 사용자 ID로 대체해야함
    await getChattingList(roomId, 1); // 여기서 'sungwoo'는 실제 로그인한 사용자 ID로 대체해야 합니다.
  };

  return (
    <div className={styles.sidebar}>
      <h2>채팅 목록</h2>
      <ul>
        {roomList.length > 0 ? (
          <ul>
            {roomList.map((room) => (
              <li
                key={room.room_id}
                onClick={() => handleRoomClick(room.room_id)}
              >
                {room.room_id}
              </li>
            ))}
          </ul>
        ) : (
          <p>채팅방이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
