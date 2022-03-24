import { combineReducers } from "redux";
import users from "./users";
import authedUser from "./autheduser";
import questions from "./questions";

export default combineReducers({ users, authedUser, questions });
