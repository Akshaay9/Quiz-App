import React, { Dispatch, SetStateAction } from "react";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { useNavigate } from "react-router-dom";

type iQuizOptionsProps = {
  optionDesc: string;
  isAnswered: string | undefined;
  answer: boolean;
  timer: number;
  setTimer: Dispatch<SetStateAction<number>>;
};

const QuizOptions: React.FC<iQuizOptionsProps> = ({
  optionDesc,
  isAnswered,
  answer,
  timer,
  setTimer,
}) => {
  const { quizState, quizDispatch } = useQuizContext();
  const navigate = useNavigate();

  const optionClickHandler = (answer: boolean) => {
    quizDispatch({
      type: "UPDATE_ANSWER",
      payload: {
        currentScore: answer ? 10 : -10,
        isAnswered: `${answer}`,
      },
    });

    setTimeout(() => {
      quizDispatch({
        type: "INCREMENT_QUESTION",
      });
    }, 1000);
  };

  if (isAnswered == "no") {
    return (
      <>
        <div className="option" onClick={() => optionClickHandler(answer)}>
          <p>{optionDesc}</p>
          <i className="far fa-circle"></i>
        </div>
      </>
    );
  }
  if (isAnswered == "true" || isAnswered == "skip" || isAnswered == "false") {
    return (
      <>
        <div
          className="option"
          style={
            answer
              ? { border: "2px solid #48d048" }
              : { border: "1px solid #e26060" }
          }
        >
          <p style={answer ? { color: "#48d048" } : { color: "#e26060" }}>
            {optionDesc}
          </p>
          {answer ? (
            <i style={{ color: "#48d048" }} className="fas fa-check-circle"></i>
          ) : (
            <i style={{ color: "#e26060" }} className="fas fa-times-circle"></i>
          )}
        </div>
      </>
    );
  }
  return <div></div>;
};

export default QuizOptions;
