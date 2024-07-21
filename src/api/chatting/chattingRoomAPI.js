import { useSetRecoilState } from "recoil";
import { chattingInstance } from "../backEndInstance";
import { sendRequest } from "../request";
import {
  chattingRoomListState,
  chooseCharacterState,
  currentRoomIdState,
  messageState,
} from "../../recoil/chatting/chattingRecoilState";
import { useCallback } from "react";
import { characters } from "../../assets/const/defaultCharacter";
import { getUserIdInLocalStorage } from "../../util/localStorageUtil";

export const useChattingRoomHooks = () => {
  const setChooseCharacter = useSetRecoilState(chooseCharacterState);
  const setChattingRoomList = useSetRecoilState(chattingRoomListState);
  const setMessages = useSetRecoilState(messageState);
  const setCurrentRoomId = useSetRecoilState(currentRoomIdState);

  const userId = getUserIdInLocalStorage();

  const getChattingRoomList = useCallback(
    async (memberId) => {
      try {
        const response = await sendRequest(
          chattingInstance,
          "post",
          "/room/list/",
          {
            memberId: userId,
          }
        );
        setChattingRoomList(response.data.responseDto.selectChatting);
      } catch (error) {
        console.error("Failed to fetch chatting room list:", error);
        setChattingRoomList([]);
      }
    },
    [setChattingRoomList, userId]
  );

  const getChattingList = async (roomId, userId) => {
    try {
      const response = await sendRequest(
        chattingInstance,
        "post",
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
  const createChattingRoom = async (memberId, characterType) => {
    try {
      setChooseCharacter(characters[characterType]);
      const response = await sendRequest(chattingInstance, "post", "/save", {
        memberId: userId,
        roomType: characterType,
        roomTitle: `${characters[characterType].name}(와)과의 채팅`, //이거는 새로운 방 만들때만 주면 돼
      });
      if (response.data.success) {
        setCurrentRoomId(response.data.responseDto.roomId);
        // getChattingRoomList(1); // 새로운 방 목록을 가져옵니다.
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
