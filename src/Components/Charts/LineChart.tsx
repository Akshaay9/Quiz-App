import { Line } from "react-chartjs-2";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";

function LineChart() {
  const { quizState } = useQuizContext();

  type datasets = {
    label: string;
    data: number[];
    fill: boolean;
    backgroundColor: string;
    borderColor: string;
  };
  type data = {
    labels: string[];
    datasets: datasets[];
  };

  const data: data = {
    labels: ["question1", "question2", "question3", "question4", "question5"],
    datasets: [
      {
        label: "score during each quiz",
        data: quizState.scoreData,
        fill: false,
        backgroundColor: "#06d3f6",
        borderColor: "#253577",
      },
    ],
  };

  type options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: boolean;
          };
        }
      ];
    };
  };

  const options: options = {
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
    
      <Line type="line"  data={data} options={options} />
    </div>
  );
}

export default LineChart;
