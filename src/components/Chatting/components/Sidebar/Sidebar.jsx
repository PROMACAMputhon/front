import React, { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  chattingRoomListState,
  currentRoomIdState,
} from "../../../../recoil/chatting/chattingRecoilState";
import styles from "./Sidebar.module.css";
import { useChattingRoomHooks } from "../../../../api/chatting/chattingRoomAPI";

function Sidebar() {
  const [roomList] = useRecoilState(chattingRoomListState);
  const setCurrentRoomId = useSetRecoilState(currentRoomIdState);
  const { getChattingRoomList, getChattingList } = useChattingRoomHooks();

  const fetchChattingRoomList = useCallback(() => {
    //TODO getChattingRoomList에서 사용자 ID로 대체해야함
    getChattingRoomList(1);
  }, [getChattingRoomList]);

  useEffect(() => {
    fetchChattingRoomList();
  }, [fetchChattingRoomList]);

  const handleRoomClick = async (roomId) => {
    setCurrentRoomId(roomId);
    //TODO getChattingList에서 사용자 ID로 대체해야함
    await getChattingList(roomId, 1); // 여기서 'sungwoo'는 실제 로그인한 사용자 ID로 대체해야 합니다.
  };

  return (
    <div className={styles.sidebar}>
      <h2>채팅 목록</h2>
      <ul>
        {roomList.map((room) => (
          <li key={room.roomId} onClick={() => handleRoomClick(room.roomId)}>
            {room.roomTitle}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
