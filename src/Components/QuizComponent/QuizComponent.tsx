import ProgressBar from "@ramonak/react-progress-bar";
import "./App.css";
import UrgeWithPleasureComponent from "./CountdownTimer";
function QuizComponent() {
  return (
    <div className="quiz-body">
      <div className="quiz-main">
        {/* quiz left */}

        <div className="quiz-left">
          <div className="quiz-left-avatar">
            <img src="https://avatars.dicebear.com/api/male/:seed.svg" alt="" />
          </div>
          <div className="quiz-left-intro">
            <h2>
              Welcome <span>Akshay</span>{" "}
            </h2>
          </div>
          <div className="quiz-left-score">
            <h3>
              Current Score : <span>10</span>
            </h3>
          </div>
          <div className="quiz-left-tree">
            <h3>Quiz Track</h3>
            <div className="tree-container">
              <div className="tree">
                <p>
                  Question 1 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 2 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 3 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 4 <i className="far fa-circle"></i>
                </p>
                <span></span>
              </div>
              <div className="tree">
                <p>
                  Question 5 <i className="far fa-circle"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
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
                <i className="far fa-circle"></i>
              </div>
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
            </div>
            <div className="option-bottom">
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
              <div className="option">
                <p>Lorem ipsum dolor sit amet.</p>
                <i className="far fa-circle"></i>
              </div>
            </div>
          </div>
          <div className="quiz-right-cta">
            <button className="quit-quiz-cta">
              <i className="fas fa-power-off"></i>Quit Quiz
            </button>
            <button className="skip-quiz-btn">Skip Quiz</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizComponent;
