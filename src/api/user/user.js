import { memberInstance } from "../backEndInstance";
import { sendRequest } from "../request";
import { useSetRecoilState } from "recoil";
import { userState } from "../../recoil/user/userRecoilState";
import { useNavigate } from "react-router-dom";
import {
  removeUserIdFromLocalStorage,
  setUserIdInLocalStorage,
} from "../../util/localStorageUtil";

export const useLoginHooks = () => {
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  const login = async (memberLoginId, memberPassword) => {
    try {
      const response = await sendRequest(memberInstance, "post", "/signin", {
        memberLoginId,
        memberPassword,
      });

      if (response.data.success) {
        const userData = response.data.responseDto;
        setUser({
          isLoggedIn: true,
          userData: userData.id,
        });

        // localStorage에 userId 저장
        setUserIdInLocalStorage(userData.id);

        console.log("로그인 성공");

        navigate("/");
      }
    } catch (error) {
      if (error.code === "4002") {
        console.log("존재하지 않는 아이디입니다.");
      } else if (error.code === "4003") {
        console.log("비밀번호가 일치하지 않습니다.");
      } else {
        console.log(error.message || "로그인 실패");
      }
    }
  };

  const logout = async (memberId) => {
    try {
      const response = await sendRequest(memberInstance, "post", "/signout", {
        memberId: memberId,
      });

      if (response.data.success) {
        const Data = response.data.responseDto;
        setUser({ isLoggedIn: false, userData: null });

        // localStorage에서 userId 제거
        removeUserIdFromLocalStorage();

        console.log("로그아웃 성공", Data);
      }
    } catch (error) {
      if (error.code === "4002") {
        console.log("존재하지 않는 아이디입니다.");
      } else {
        console.log(error.message || "로그아웃 실패");
      }
    }
  };

  return {
    login,
    logout,
  };
};
