const QuizTree = ({
  isAnswered,
  index,
}: {
  isAnswered: string;
  index: number;
}) => {
  const getStyleBasedOnAnswer = (isAnswered: string) => {
    if (isAnswered == "true") return { border: `1px solid #316d31` };
    if (isAnswered == "false") return { border: `1px solid #8a1717` };
    if (isAnswered == "no") return { border: `1px solid rgb(110 112 121)` };
    if (isAnswered == "skip") return { border: `1px solid #0d1121` };
    if (isAnswered == "timeUP") return { border: `1px solid #0d1121` };
  };
  const getQuestionStyleBasedOnAnswer = (isAnswered: string) => {
    if (isAnswered == "true") return { color: `#316d31` };
    if (isAnswered == "false") return { color: `#8a1717` };
    if (isAnswered == "no") return { color: `rgb(110 112 121)` };
    if (isAnswered == "skip") return { color: `#0d1121` };
    if (isAnswered == "timeUP") return { color: `#0d1121` };
  };

  if (isAnswered == "true" || isAnswered == "false") {
    return (
      <div className="tree">
        <p style={getQuestionStyleBasedOnAnswer(isAnswered)}>
          Question {index + 1}{" "}
          {isAnswered == "true" && (
            <i
              style={getQuestionStyleBasedOnAnswer(isAnswered)}
              className="fas fa-check-circle"
            ></i>
          )}
          {isAnswered == "false" && (
            <i
              style={getQuestionStyleBasedOnAnswer(isAnswered)}
              className="fas fa-times-circle"
            ></i>
          )}
        </p>
        <span style={getStyleBasedOnAnswer(isAnswered)}></span>
      </div>
    );
  }
  if (isAnswered == "skip" || isAnswered == "no" || isAnswered == "timeUP") {
    return (
      <div className="tree">
        <p style={getQuestionStyleBasedOnAnswer(isAnswered)}>
          Question {index + 1}
          {isAnswered == "skip" && (
            <i
              style={getQuestionStyleBasedOnAnswer(isAnswered)}
              className="fas fa-chevron-circle-right"
            ></i>
          )}
          {isAnswered == "timeUP" && (
            <i
              style={getQuestionStyleBasedOnAnswer(isAnswered)}
              className="fas fa-chevron-circle-right"
            ></i>
          )}
          {isAnswered == "no" && (
            <i
              style={getQuestionStyleBasedOnAnswer(isAnswered)}
              className="far fa-circle"
            ></i>
          )}
        </p>
        <span style={getStyleBasedOnAnswer(isAnswered)}></span>
      </div>
    );
  }
  return <div></div>;
};

export default QuizTree;
