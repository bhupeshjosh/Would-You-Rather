import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getuser() {
  return _getUsers().then((users) => ({ ...users }));
}

export function getQuestions() {
  return _getQuestions().then((q) => ({ ...q }));
}

export function saveQuestions(rawQ) {
  return _saveQuestion(rawQ).then((q) => ({ ...q }));
}

export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return _saveQuestionAnswer({ authedUser, qid, answer });
}

export function getInitialdata() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}
