import React, { Fragment } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

//import { handleReceiveData } from "../actions/users";
//import { setAuthedUser } from "../actions/authedUser";

function Nav(props) {
  // on logout Navigate to login page
  const handleLogOut = (e) => {
    props.dispatch(setAuthedUser(null));
  };
  return (
    <div className="navContainer">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeclassname="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeclassname="active">
            LeaderBoard
          </NavLink>
        </li>
        {props.authedUser !== null && (
          <Fragment>
            <li>
              <NavLink to="/new" activeclassname="active">
                {`Welcome ${props.authedUser}`}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={handleLogOut} to="/" activeclassname="active">
                LogOut
              </NavLink>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(Nav);
