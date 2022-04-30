import React, { useState } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";

const xyz = 5;
function Login({ users = {}, dispatch = () => {} }) {
  const [user, setUser] = useState("");
  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAuthedUser(user));
  };

  const usersArr = Object.values(users);
  console.log(usersArr);
  return (
    <div className="container">
      <div className="logininfo">Welcome to would you rather App!</div>
      <div className="logininfo">Please sign in to continue</div>
      <form className="selectUser" onSubmit={handleSubmit}>
        <select value={user} onChange={handleChange}>
          <option key={"none"} value="none"></option>
          {usersArr.map((x) => (
            <option key={x.name} value={x.id}>
              {x.name}
            </option>
          ))}
        </select>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}
function mapStateToProps({ users, questions }) {
  return {
    users,
  };
}
const LoginComponent = connect(mapStateToProps)(Login);

export { LoginComponent, xyz };
