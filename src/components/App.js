import Nav from "./Nav";
import { connect } from "react-redux";
import { useEffect } from "react";
//import { handleReceiveUsers } from "../actions/users";
//import { handleReceiveQuestions } from "../actions/questions";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Home from "./Home";
import Poll from "./Poll";
import New from "./New";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <div>
      <Nav />
      <div className="AppContainer">
        <div></div>
        {/*{props.authedUser ? <Home /> : <Login />}*/}
        {/*{props.authedUser ? <Poll id={"8xf0y6ziyjabvozdd253nd"} /> : <Login />}*/}
        {props.authedUser ? <New /> : <Login />}
        <div></div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
