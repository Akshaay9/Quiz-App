import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { QuizQuestions } from "../../Data/Data.type";
import "./App.css";
import DenseTable from "./LeaderBoarStats";
import ScoreStatsandgraph from "./ScoreStatsandgraph";

function ResultStats() {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuizContext();

  const getANswerStats = (answer: string): number => {
    const answerNumber = quizState.quiz.questions.filter(
      (ele: QuizQuestions) => {
        return ele.isAnswered == answer;
      }
    );

    return answerNumber.length;
  };


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
              Final Score :{" "}
              <span style={{ color: "#06d3f6" }}>{quizState.currentScore}</span>
            </h3>
          </div>

          <div className="quiz-left-navs">
            <h4>Leader Board</h4>
            <h4>Score Stats and graphs</h4>
            <h4>Score Graph</h4>
          </div>
        </div>
        <div className="quiz-right">
          {/* quiz right top */}

          {/* <div className="quiz-right-top-stats">
            <div className="number-stats" style={{ color: "#253577" }}>
              <p>{quizState.quiz.questions.length}</p>
              <span>Total Questions</span>
            </div>
            <div className="number-stats" style={{ color: "green" }}>
              <p>{getANswerStats("true")}</p>
              <span>True</span>
            </div>
            <div className="number-stats" style={{ color: "rgb(175 53 53)" }}>
              <p>{getANswerStats("false")}</p>
              <span>False</span>
            </div>
            <div className="number-stats" style={{ color: "#253577" }}>
              <p>{getANswerStats("skip")}</p>
              <span>Skip</span>
            </div>
            <div className="number-stats" style={{ color: "#253577" }}>
              <p>{getANswerStats("timeUP")}</p>
              <span>Time Up</span>
            </div>
          </div> */}
{/* 
          <div className="quiz-right-leaderboard">
            <h3>Leader Board</h3>
            <DenseTable />
          </div> */}
          <ScoreStatsandgraph />
        </div>
      </div>
    </div>
  );
}

export default ResultStats;
