import { useSetRecoilState } from "recoil";
import { chattingInstance } from "../backEndInstance";
import { sendRequest } from "../request";
import {
  chattingRoomListState,
  currentRoomIdState,
  messageState,
} from "../../recoil/chatting/chattingRecoilState";

export const useChattingRoomHooks = () => {
  const setChattingRoomList = useSetRecoilState(chattingRoomListState);
  const setMessages = useSetRecoilState(messageState);
  const setCurrentRoomId = useSetRecoilState(currentRoomIdState);
  const getChattingRoomList = async (memberId) => {
    try {
      const response = await sendRequest(
        chattingInstance,
        "get",
        "/room/list",
        {
          memberId: 1,
        }
      );
      setChattingRoomList(response.data.responseDto.selectChatting);
    } catch (error) {
      console.error("Failed to fetch chatting room list:", error);
    }
  };

  const getChattingList = async (roomId, userId) => {
    try {
      const response = await sendRequest(
        chattingInstance,
        "get",
        `/list/${roomId}`,
        {
          memberId: userId,
        }
      );
      if (response.data.success) {
        setMessages(response.data.responseDto.selectChat);
      }
    } catch (error) {
      console.error("Failed to fetch chatting list:", error);
    }
  };

  // TODO - 향후에 MemberId 랑 roomTitle 수정해야함.
  const createChattingRoom = async (memberId, characterType, roomTitle) => {
    try {
      const response = await sendRequest(chattingInstance, "post", "/save", {
        memberId: 1,
        roomType: characterType,
        roomTitle: "반가워", //이거는 새로운 방 만들때만 주면 돼
      });
      if (response.data.success) {
        setCurrentRoomId(response.data.responseDto.roomId);
        getChattingRoomList(1); // 새로운 방 목록을 가져옵니다.
      }
    } catch (error) {
      console.error("Failed to create chatting room:", error);
    }
  };

  return {
    getChattingRoomList,
    getChattingList,
    createChattingRoom,
  };
};
