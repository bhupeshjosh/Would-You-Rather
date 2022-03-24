import { getQuestions, saveQuestionAnswer } from "../util/api";
import { saveUserAnswer, saveUserQuestion } from "./users";
import { saveQuestions } from "../util/api";

export const RECEIVE_Q = "receive_questions";
export const SAVE_ANSWER = "save_answer";
export const ADD_QUESTION = "save_question";

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

export function handlesaveQuestion(question) {
  console.log("New Question :::", question);
  return (dispatch) => {
    saveQuestions(question).then((q) => {
      dispatch(addQuestion(q));
      dispatch(saveUserQuestion(q));
    });
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
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
  debugger;
  return (dispatch) => {
    saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(saveAnswer({ authedUser, qid, answer }));
      dispatch(saveUserAnswer({ authedUser, qid, answer }));
    });
  };
}
