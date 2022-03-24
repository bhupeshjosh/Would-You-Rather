import { getInitialdata } from "../util/api";
import { receiveUsers } from "./users";
import { recieveQuestions } from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    getInitialdata().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(recieveQuestions(questions));
    });
  };
}
