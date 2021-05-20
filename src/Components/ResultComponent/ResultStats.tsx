import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import "./App.css";

function ResultStats() {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuizContext();

  return (
    <div className="quiz-body">
      <div className="quiz-main">
        {/* quiz left */}

        <div className="quiz-left">
          <div className="quiz-left-avatar">
            <img src={quizState.userAvatar} alt="" />
          </div>
          <div className="quiz-left-intro">
            <h2>
              Welcome <span>{quizState.userName}</span>{" "}
            </h2>
          </div>
          <div className="quiz-left-score">
            <h3>
              Final Score : <span>{quizState.currentScore}</span>
            </h3>
          </div>
        </div>
        <div className="quiz-right"></div>
      </div>
    </div>
  );
}

export default ResultStats;
