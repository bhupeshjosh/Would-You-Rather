import { getQuestions, saveQuestionAnswer } from "../util/api";
import { saveUserAnswer } from "./users";

export const RECEIVE_Q = "receive_questions";
export const SAVE_ANSWER = "save_answer";

export function recieveQuestions(questions) {
  return {
    type: RECEIVE_Q,
    questions,
  };
}

export function handleReceiveQuestions() {
  return (dispatch) => {
    getQuestions().then((x) => {
      dispatch(recieveQuestions(x));
    });
  };
}

export function handlesaveQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {};
}

function saveAnswer({ authedUser, qid, answer }) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleSaveAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveAnswer({ authedUser, qid, answer }));
      dispatch(saveUserAnswer({ authedUser, qid, answer }));
    });
  };
}
