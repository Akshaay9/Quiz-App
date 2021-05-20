import { Line } from "react-chartjs-2";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";

function LineChart() {
  const { quizState, quizDispatch } = useQuizContext();

  const data = {
    labels: ["question1", "question2", "question3", "question4", "question5"],
    datasets: [
      {
        label: "score during each quiz",
        data: quizState.scoreData,
        fill: false,
        backgroundColor: "#06d3f6",
        borderColor: "#253577",
        color: "red",
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
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;
