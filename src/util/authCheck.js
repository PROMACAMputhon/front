import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { getUserIdInLocalStorage } from "./localStorageUtil";

function AuthCheck({ children }) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const userId = getUserIdInLocalStorage();
    if (!userId) {
      navigate("/login");
      enqueueSnackbar("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
    }
  }, [navigate, enqueueSnackbar]);

  return <>{children}</>;
}

export default AuthCheck;
