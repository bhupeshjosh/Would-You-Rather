import Nav from "./Nav";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Poll from "./Poll";
import New from "./New";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <Router>
      <div>
        <Nav />
        <div className="AppContainer">
          <div></div>
          {!props.authedUser ? (
            <Login />
          ) : (
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="add" element={<New />} />
              <Route path="question/:id" element={<Poll />} />
            </Routes>
          )}

          {/*{props.authedUser ? <Home /> : <Login />}*/}
          {/*{props.authedUser ? <Poll id={"8xf0y6ziyjabvozdd253nd"} /> : <Login />}*/}
          {/*{props.authedUser ? <New /> : <Login />}*/}
          <div></div>
        </div>
      </div>
    </Router>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
