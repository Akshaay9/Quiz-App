import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { QuizQuestions } from "../../Data/Data.type";
import "./App.css";
import DenseTable from "./LeaderBoarStats";
import ScoreStatsandgraph from "./ScoreStatsandgraph";
import AnswerStatsAndGraph from "./AnswerStatsAndGraph";
import Timinggraph from "./Timinggraph";
import { Squash as Hamburger } from "hamburger-react";
import { useLeaderBoardContext } from "../../Contexts/LeaderBoardContext/LeaderBoard";

function ResultStats() {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuizContext();
  const [showModal, setShowModal] = useState(false);
  const [navForResult, setSHowNav] = useState("leaderboard");
  const {  leaderboardDispatch } = useLeaderBoardContext();

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

        <div className={`quiz-left ${!showModal ? `show-quizzes` : ``}`}>
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
            <h4
              style={
                navForResult == "leaderboard"
                  ? {
                      backgroundColor: "#141d42",
                      borderLeft: "1px solid #8d909c",
                      borderRight: "1px solid #8d909c",
                    }
                  : {}
              }
              onClick={() => {
                setSHowNav("leaderboard");
                setShowModal(!showModal);
              }}
            >
              Leader Board
            </h4>
            <h4
              style={
                navForResult == "scorestats"
                  ? {
                      backgroundColor: "#141d42",
                      borderLeft: "1px solid #8d909c",
                      borderRight: "1px solid #8d909c",
                    }
                  : {}
              }
              onClick={() => {
                setSHowNav("scorestats");
                setShowModal(!showModal);
              }}
            >
              Score Stats and graphs
            </h4>
            <h4
              style={
                navForResult == "answestats"
                  ? {
                      backgroundColor: "#141d42",
                      borderLeft: "1px solid #8d909c",
                      borderRight: "1px solid #8d909c",
                    }
                  : {}
              }
              onClick={() => {
                setSHowNav("answestats");
                setShowModal(!showModal);
              }}
            >
              Answer stats and Graph
            </h4>
            <h4
              style={
                navForResult == "timingstats"
                  ? {
                      backgroundColor: "#141d42",
                      borderLeft: "1px solid #8d909c",
                      borderRight: "1px solid #8d909c",
                    }
                  : {}
              }
              onClick={() => {
                setSHowNav("timingstats");
                setShowModal(!showModal);
              }}
            >
              Timing stats and Graph
            </h4>
          </div>
          <div className="btn-result">
            <button
              className="btn-result-1"
              onClick={() => {
                quizDispatch({ type: "CLEAR_QUIZ_CATEGORY" });
                leaderboardDispatch({
                  type:"CLEAR_LEADERBOARD"
                })
                navigate("/", { state: { from: "result" } });
                
              }}
            >
              Change Category
            </button>
            <button
              className="btn-result-1 btn-result-2"
              onClick={() => {
                quizDispatch({ type: "CLEAR_QUIZ" });
                leaderboardDispatch({
                  type:"CLEAR_LEADERBOARD"
                })
                navigate("/");
              }}

            >
              <i className="fas fa-power-off"></i>Quit Quiz
            </button>
          </div>
        </div>
        <div className="quiz-right">
          <div className="desktopHide">
            <Hamburger toggle={setShowModal} toggled={showModal} />
          </div>
          {navForResult == "leaderboard" && (
            <>
              <div className="quiz-right-top-stats">
                <div className="number-stats" style={{ color: "#253577" }}>
                  <p>{quizState.quiz.questions.length}</p>
                  <span>Total Questions</span>
                </div>
                <div className="number-stats" style={{ color: "green" }}>
                  <p>{getANswerStats("true")}</p>
                  <span>True</span>
                </div>
                <div
                  className="number-stats"
                  style={{ color: "rgb(175 53 53)" }}
                >
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
              </div>

              <div className="quiz-right-leaderboard">
                <h3>Leader Board</h3>
                <DenseTable />
              </div>

              <button
                className={`btn-stats ${showModal ? `hamHide` : ``}`}
                onClick={() => setSHowNav("scorestats")}
              >
                Check Score Stats
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          {navForResult == "scorestats" && (
            <>
              <ScoreStatsandgraph />
              <button
                className={`btn-stats ${showModal ? `hamHide` : ``}`}
                onClick={() => setSHowNav("answestats")}
              >
                Check Answer Stats
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          {navForResult == "answestats" && (
            <>
              <AnswerStatsAndGraph />
              <button
                className={`btn-stats answer-stats ${
                  showModal ? `hamHide` : ``
                }`}
                onClick={() => setSHowNav("timingstats")}
              >
                Check Timing Stats
                <i className="fas fa-chevron-right"></i>
              </button>
            </>
          )}
          {navForResult == "timingstats" && <Timinggraph />}
        </div>
      </div>
    </div>
  );
}

export default ResultStats;
