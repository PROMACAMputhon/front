import { atom } from "recoil";
import { characters } from "../../assets/const/defaultCharacter";
export const chattingRoomListState = atom({
  key: "chattingRoomListState",
  default: [],
});

export const currentRoomIdState = atom({
  key: "currentRoomIdState",
  default: null,
});
export const messageState = atom({
  key: "messageState",
  default: [],
});

export const isFirstState = atom({
  key: "isFirstState",
  default: true,
});

export const chooseCharacterState = atom({
  key: "chooseCharacterState",
  default: characters[0],
});

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});
