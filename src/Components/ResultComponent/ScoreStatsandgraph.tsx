import React from "react";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import LineChart from "../Charts/LineChart";
import "./App.css";

function ScoreStatsandgraph() {
 

  return (
    <div className="quiz-right-leaderboard">
      <div className="quiz-right-leaderboard">
        <h3>Score Stats</h3>
      </div>

      <div className="leaderBoad-line-chart">
        <LineChart />
      </div>
    </div>
  );
}

export default ScoreStatsandgraph;
