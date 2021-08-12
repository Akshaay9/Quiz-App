
import { Doughnut } from "react-chartjs-2";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { QuizQuestions } from "../../Data/Data.type";
import "./App.css"
const DoughnutChart = () => {
  const { quizState, quizDispatch } = useQuizContext();

  console.log(quizState.quiz.questions);

  const newData = quizState.quiz.questions.map((ele:QuizQuestions) => {
    if (ele.isAnswered == "true") {
      console.log(ele.isAnswered);
      return "#abc5d1";
    } else if (ele.isAnswered == "false") {
      console.log(ele.isAnswered);
      return "#cfb3c5";
    } else if (ele.isAnswered == "skip") {
      console.log(ele.isAnswered);
      return "#cfc8bc";
    } else if (ele.isAnswered == "timeUP") {
      console.log(ele.isAnswered);
      return "#72A0C1";
    } else return ele;
  });
  const newDataForBorder = quizState.quiz.questions.map((ele:QuizQuestions) => {
    if (ele.isAnswered == "true") {
      return "#a1dfdf";
    } else if (ele.isAnswered == "false") {
      return "rgb(255,176,193)";
    } else if (ele.isAnswered == "skip") {
      return "rgb(255,176,98)";
    } else if (ele.isAnswered == "timeUP") {
      return "#007FFF";
    } else return ele;
  });

  const label = quizState.quiz.questions.map((ele:QuizQuestions) => ele.isAnswered);
 

  const data = {
    labels: label,
    datasets: [
      {
        label: "# of Votes",
        data: [1, 1, 1, 1, 1],
        backgroundColor: newData,
        borderColor: newDataForBorder,
        borderWidth: 0.5,
      },
    ],
  };
  return (
    <div className="doughnutChart" >
      <Doughnut type="Doughnut" data={data} />
    </div>
  );
};

export default DoughnutChart;

//  #abc5d1  #cfb3c5  #cfc8bc #c3c7d6
