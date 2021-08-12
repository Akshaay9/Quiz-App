
import { Bar } from "react-chartjs-2";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { QuizQuestions } from "../../Data/Data.type";

function BarChart() {
    const { quizState } = useQuizContext();

const newData=quizState.quiz.questions.map((ele:QuizQuestions) =>20-Number(ele?.timerDuration))

  const data = {
    labels: [
      "question 1",
      "question 2",
      "question 3",
      "question 4",
      "question 5",
    ],
    datasets: [
      {
        label: "# of Seconds",
        data:newData,
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
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div className="barchart">
      <Bar type="bar" data={data} options={options} />
    </div>
  );
}

export default BarChart;
