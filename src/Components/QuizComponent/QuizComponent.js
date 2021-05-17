import ProgressBar from "@ramonak/react-progress-bar";
import "./App.css";
import UrgeWithPleasureComponent from "./CountdownTimer";
function QuizComponent() {
  let test = ["", "", "", "", "", ""];
  return (
    <div className="quiz-body">
      <div className="quiz-main">
        <div className="quiz-left"></div>
        <div className="quiz-right">
          <div className="quiz-right-top">
            <h3>Fitness Quiz</h3>
            <h2>
              <span>Question</span>
              <span>01</span>
              <span>/</span>
              <span>05</span>
            </h2>
          </div>
          <div className="quiz-right-progress">
            <ProgressBar
              completed={60}
              bgColor="#212949"
              height="1.5rem"
              labelColor="white"
            />
          </div>
          <div className="quiz-right-question">
            <p>
              <span>01)</span>Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Provident nisi eligendi ad doloremque praesentium, iure
              dolor beatae reiciendis quidem, architecto earum, ullam vitae vel
              nihil. Quidem voluptatibus id ad dolore?
            </p>
          </div>
          <div className="quiz-right-countdown">
            <UrgeWithPleasureComponent />
          </div>
          <div className="quiz-right-options">
            <div className="option-top">
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i class="far fa-circle"></i>
              </div>
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i class="far fa-circle"></i>
              </div>
            </div>
            <div className="option-bottom">
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i class="far fa-circle"></i>
              </div>
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i class="far fa-circle"></i>
              </div>
            </div>
          </div>
          <div className="quiz-right-cta">
            <button className="quit-quiz-cta">
              <i class="fas fa-power-off"></i>Quit Quiz
            </button>
            <button className="skip-quiz-btn">Skip Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
