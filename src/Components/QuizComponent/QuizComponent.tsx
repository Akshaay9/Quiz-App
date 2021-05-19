import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router";
import { setTimeout } from "timers";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { QuizQuestions } from "../../Data/Data.type";
import "./App.css";
import QuizOptions from "./QuizOptions";
import QuizTree from "./QuizTree";

function QuizComponent() {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuizContext();
  const [key, setKey] = useState<number>(0);
  const [playling, isPlayling] = useState<boolean>(true);

  const getCurrentQuestion = (id: number): QuizQuestions | undefined => {
    const currQuestion = quizState.quiz.questions.find((ele) => ele.id == id);
    return currQuestion;
  };

  // skip
  const skipClickHandler = () => {
    quizDispatch({
      type: "UPDATE_ANSWER",
      payload: {
        currentScore: -10,
        isAnswered: `skip`,
      },
    });
    isPlayling(false);
    if (quizState.currentQuestion == 5) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
      return;
    }
    setTimeout(() => {
      quizDispatch({
        type: "INCREMENT_QUESTION",
      });
      setKey((prevKey) => prevKey + 1);
      isPlayling(true);
    }, 1000);
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
              Current Score : <span>{quizState.currentScore}</span>
            </h3>
          </div>
          <div className="quiz-left-tree">
            <h3>Quiz Track</h3>
            <div className="tree-container">
              {quizState.quiz.questions.map((ele, index) => (
                <QuizTree index={index} isAnswered={ele.isAnswered} />
              ))}
            </div>
            <h4>Finish</h4>
          </div>
        </div>
        <div className="quiz-right">
          <div className="quiz-right-top">
            <h3>{quizState.categorySelected} Quiz</h3>
            <h2>
              <span>Question</span>
              <span>{quizState.currentQuestion}</span>
              <span>/</span>
              <span>{quizState.quiz.questions.length}</span>
            </h2>
          </div>
          <div className="quiz-right-progress">
            <ProgressBar
              completed={
                ((quizState.currentQuestion - 1) /
                  quizState.quiz.questions.length) *
                100
              }
              bgColor="#212949"
              height="1.5rem"
              labelColor="white"
            />
          </div>
          <div className="quiz-right-question">
            <p>
              <span>0{quizState.currentQuestion})</span>
              {getCurrentQuestion(quizState.currentQuestion)?.questionDesc}
            </p>
          </div>
          <div className="quiz-right-countdown">
            <CountdownCircleTimer
              onComplete={() => {
                quizDispatch({
                  type: "UPDATE_ANSWER",
                  payload: {
                    currentScore: -10,
                    isAnswered: `skip`,
                  },
                });
                if (quizState.currentQuestion == 5) {
                  setTimeout(() => {
                    navigate("/");
                  }, 1000);
                  return;
                }
                setTimeout(() => {
                  quizDispatch({
                    type: "INCREMENT_QUESTION",
                  });
                }, 1000);
                return [true, 1000];
              }}
              key={key}
              isPlaying={playling}
              duration={5}
              colors={[
                ["#004777", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
            >
              {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
          </div>
          <div className="quiz-right-options">
            {getCurrentQuestion(quizState.currentQuestion)?.option?.map(
              (ele) => (
                <QuizOptions
                  optionDesc={ele.optionDesc}
                  answer={ele.answer}
                  isAnswered={
                    getCurrentQuestion(quizState.currentQuestion)?.isAnswered
                  }
                  setKey={setKey}
                  isPlayling={isPlayling}
                />
              )
            )}
          </div>
          <div className="quiz-right-cta">
            <button className="quit-quiz-cta" onClick={() => navigate("/")}>
              <i className="fas fa-power-off"></i>Quit Quiz
            </button>
            <button
              className="skip-quiz-btn"
              onClick={() => skipClickHandler()}
            >
              Skip Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
