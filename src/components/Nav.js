import React, { Fragment } from "react";
import { connect } from "react-redux";

//import { handleReceiveData } from "../actions/users";
//import { setAuthedUser } from "../actions/authedUser";

function Nav(props) {
  // useEffect(() => {
  //    props.dispatch(handleReceiveUsers());
  //props.dispatch(setAuthedUser("Mukesh"));
  // }, [props]);

  return (
    <div className="navContainer">
      <ul>
        <li>Home</li>
        <li>New Question</li>
        <li>LeaderBoard</li>
        {props.authedUser !== null && (
          <Fragment>
            <li>{`Welcome User`}</li>
            <li>LogOut</li>
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
