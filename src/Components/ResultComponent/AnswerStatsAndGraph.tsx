import DoughnutChart from "../Charts/DonughtChart";
import "./App.css"
function AnswerStatsAndGraph() {
  return (
    <>
      <div className="quiz-right-leaderboard">
        <div className="quiz-right-leaderboard">
          <h3>Answer Stats</h3>
        </div>

        <div className="leaderBoad-line-chart bar-chart">
          <DoughnutChart />
        </div>
      </div>
    </>
  );
}
export default AnswerStatsAndGraph;
