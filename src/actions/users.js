import { getuser } from "../util/api";
export const RECIEVE_USERS = "receive_users";
export const SAVE_USER_ANSWER = "save_user_answer";
export const SAVE_USER_QUESTION = "save_user_question";

export function receiveUsers(users) {
  return {
    type: RECIEVE_USERS,
    users,
  };
}
export function saveUserAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function saveUserQuestion(question) {
  return {
    type: SAVE_USER_QUESTION,
    question,
  };
}
export function handleReceiveUsers() {
  return (dispatch) => {
    getuser().then((u) => {
      dispatch(receiveUsers(u));
    });
  };
}
