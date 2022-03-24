import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Home(props) {
  const [ans, setFilter] = useState(false);
  //const { users, questions, authedUser } = props;
  const handleAns = (e) => {
    setFilter(true);
  };
  const handleNotAns = (e) => {
    setFilter(false);
  };
  let questions = [];
  // list of questions answered by logged in user
  const qans = Object.keys(props.users[props.authedUser].answers);

  // filter answered/ unanswered questions ans sort based on timestamp. Newest poll displayed first.
  if (ans) {
    questions = Object.values(props.questions)
      .filter((q) => qans.includes(q.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  } else {
    questions = Object.values(props.questions)
      .filter((q) => !qans.includes(q.id))
      .sort((a, b) => b.timestamp - a.timestamp);
  }

  return (
    <div className="container">
      <h1>HOME PAGE </h1>
      <div>
        <button onClick={handleAns} className="qnToggleButton">
          Ansewered
        </button>
        <button onClick={handleNotAns} className="qnToggleButton">
          UnAnsewered
        </button>
      </div>
      {questions.map((q) => (
        <Link to={`question/${q.id}`} className="questionView" key={q.id}>
          <div className="header">{`  ${q.author} asks`}</div>
          <img
            className="avatar"
            src={props.users[q.author].avatarURL}
            alt={q.author}
          ></img>
          <div className="questioninfo">
            <div>
              <b>Would you Rather...</b>
            </div>
            <div>{`...${q.optionOne.text}...`}</div>
            <button>View Poll</button>
          </div>
        </Link>
      ))}
    </div>
  );
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}
export default connect(mapStateToProps)(Home);
