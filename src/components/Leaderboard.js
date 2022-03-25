import React from "react";
import { connect } from "react-redux";

function Leaderboard(props) {
  const { users } = props;
  let userArr = Object.values(users);
  userArr.sort((a, b) => {
    return (
      b.questions.length +
      Object.keys(b.answers).length -
      (a.questions.length + Object.keys(a.answers).length)
    );
  });
  return (
    <div className="container">
      {userArr.map((u) => (
        <div key={u.id} className="LeaderBoardView">
          <img className="avatar" src={u.avatarURL} alt={u.name}></img>
          <div className="leaderboardDetail">
            <div className="leaderboardhaeder">{u.name}</div>
            <div>Answered Question</div>
            <div>{`${Object.keys(u.answers).length}`}</div>
            <div>{`Created Question`}</div>
            <div>{`${u.questions.length}`}</div>
          </div>
          <div className="leaderboardScore">
            <div className="leaderboardhaeder">SCORE</div>
            <div className="finalScore">
              {u.questions.length + Object.keys(u.answers).length}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(Leaderboard);
