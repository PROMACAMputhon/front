import { atom } from "recoil";

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
  default: {
    name: "유정",
    ageNGender: "24살, 남자",
    icon: "akoCharacter",
    content:
      "친절한 선배, 매우 잘생겼으며, 처음 보는 사람에게 아주 친절한 사람이다.",
  },
});

export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});
