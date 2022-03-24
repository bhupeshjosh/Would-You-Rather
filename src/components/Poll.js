import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";

function Poll(props) {
  const [check, setCheck] = useState(1);
  // fetch question id from url
  const { id } = useParams();
  const { questions, authedUser, users } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      handleSaveAnswer({
        authedUser: props.authedUser,
        qid: id,
        answer: check === 1 ? "optionOne" : "optionTwo",
      })
    );
  };

  // check if this question is allready answered by user
  // Based on that render diffrent UI
  let answered;
  if (users[authedUser].answers[id]) {
    answered = true;
  } else {
    answered = false;
  }

  if (!answered) {
    return (
      <div className="container">
        <div className="questionView">
          <div className="header">{`${questions[id].author} asks`}</div>
          <img
            className="avatar"
            src={users[authedUser].avatarURL}
            alt={authedUser}
          ></img>
          <form onSubmit={handleSubmit} className="questioninfo">
            <div>
              <b>Would you Rather...</b>
            </div>
            <label>
              <input
                onChange={(e) => {
                  setCheck(1);
                }}
                type="radio"
                name="ans"
                checked={check === 1}
              />{" "}
              {questions[id].optionOne.text}
            </label>
            <label>
              <input
                onChange={(e) => {
                  setCheck(2);
                }}
                type="radio"
                name="ans"
                checked={check === 2}
              />{" "}
              {questions[id].optionTwo.text}
            </label>
            <button type="Submit">Submit</button>
          </form>
        </div>
      </div>
    );
  } else {
    const op1Percent = (
      (100 * questions[id].optionOne.votes.length) /
      Object.keys(questions).length
    ).toFixed(2);
    const op2Percent = (
      (100 * questions[id].optionTwo.votes.length) /
      Object.keys(questions).length
    ).toFixed(2);

    const yourAnswer = questions[id].optionOne.votes.includes(authedUser)
      ? 1
      : 2;
    return (
      <div className="container">
        <div className="questionView">
          <div className="header">{`Asked By ${questions[id].author} `}</div>
          <img
            className="avatar"
            src={users[authedUser].avatarURL}
            alt={authedUser}
          ></img>
          <div className="questioninfo">
            <div> RESULTS: </div>
            <div
              className={`optiondetail ${yourAnswer === 1 ? "yourAnswer" : ""}`}
            >
              <h4>{questions[id].optionOne.text}</h4>
              <div className="resultbarContainer">
                <div className="resultbar" style={{ width: `${op1Percent}%` }}>
                  {op1Percent + "%"}
                </div>
              </div>
              <div>{`${questions[id].optionOne.votes.length} out of ${
                Object.keys(questions).length
              } votes`}</div>
              {yourAnswer === 1 && <div className="voteBadge"> Your Vote</div>}
            </div>
            <div
              className={`optiondetail ${yourAnswer === 2 ? "yourAnswer" : ""}`}
            >
              <h4>{questions[id].optionTwo.text}</h4>
              <div className="resultbarContainer">
                <div className="resultbar" style={{ width: `${op2Percent}%` }}>
                  {op2Percent + "%"}
                </div>
              </div>
              <div>{`${questions[id].optionTwo.votes.length} out of ${
                Object.keys(questions).length
              } votes`}</div>
              {yourAnswer === 2 && <div className="voteBadge"> Your Vote</div>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  return {
    questions,
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(Poll);
