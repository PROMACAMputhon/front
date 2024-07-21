import { memberInstance } from "../backEndInstance";
import { sendRequest } from "../request";

export const signIn = (memberLoginId, memberPassword) =>
  sendRequest(memberInstance, "post", "/signin", {
    memberLoginId: memberLoginId,
    memberPassword: memberPassword,
  });

export const signOut = (memberId) =>
  sendRequest(memberInstance, "post", "/signout", {
    memberId: memberId,
  });
