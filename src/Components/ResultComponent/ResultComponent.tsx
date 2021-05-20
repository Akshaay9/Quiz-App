import React from "react";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { Bar, Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { QuizQuestions } from "../../Data/Data.type";

function ResultComponent() {
  const { quizState, quizDispatch } = useQuizContext();

  const Answers = quizState.quiz.questions.map((ele:QuizQuestions) => {
    if (ele.isAnswered == "true") {
      return 1;
    } else return 0;
  });

  const timerDuration = quizState.quiz.questions.map((ele:QuizQuestions) => {
    if (typeof ele.timerDuration == "number") {
    
      return ele.timerDuration;
    } else return `skipped`;
  });

  const chartData = {
    labels: ["question1", "question2", "question3", "question4", "question5"],
    datasets: [
      {
        label: " Seconds",
        data: timerDuration,
        fill: false,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };

  console.log(Answers);
  console.log(timerDuration);

  return (
    <div>
      <h1>Result page</h1>
      {/* <Bar data={chartData} options={options} /> */}
    </div>
  );
}

export default ResultComponent;
