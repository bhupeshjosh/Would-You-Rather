import Nav from "./Nav";
import { connect } from "react-redux";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginComponent, xyz } from "./Login";
import Home from "./Home";
import Poll from "./Poll";
import New from "./New";
import Leaderboard from "./Leaderboard";

console.log(xyz);
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
            <LoginComponent user1="Bhupesh" />
          ) : (
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="add" element={<New />} />
              <Route path="questions/:id" element={<Poll />} />
              <Route path="Leaderboard" element={<Leaderboard />} />
            </Routes>
          )}
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
