import { RECIEVE_USERS } from "../actions/users";
import { SAVE_USER_ANSWER, SAVE_USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECIEVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case SAVE_USER_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer,
          },
        },
      };

    case SAVE_USER_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          question: state[action.question.author].questions.concat(
            action.question.id
          ),
        },
      };

    default:
      return {
        ...state,
      };
  }
}
