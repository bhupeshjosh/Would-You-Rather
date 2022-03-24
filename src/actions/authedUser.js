export const SET_AUTHED_USER = "set_authed_user";

export function setAuthedUser(authedUser) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
  };
}
