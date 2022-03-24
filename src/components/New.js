import React, { useState } from "react";
import { connect } from "react-redux";
import { handlesaveQuestion } from "../actions/questions";

function New(props) {
  const [q1, setq1] = useState("");
  const [q2, setq2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch(
      handlesaveQuestion({
        optionOneText: q1,
        optionTwoText: q2,
        author: props.authedUser,
      })
    );
  };
  return (
    <div className="container">
      <div className="newqwestionheader">
        <h2>Create a new question</h2>
      </div>

      <div>
        <h4>Complete the question</h4>
      </div>
      <div>
        <h3>Would you rather...</h3>
      </div>
      <form className="submitQuestion" onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setq1(e.target.value);
          }}
          className="options"
          type="text"
          placeholder="Enter Option one text here"
          value={q1}
        />

        <input
          onChange={(e) => {
            setq2(e.target.value);
          }}
          className="options"
          type="text"
          placeholder="Enter Option Two text here"
          value={q2}
        />
        <button disabled={q1 === "" || q2 === ""}>SUBMIT</button>
      </form>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(New);
