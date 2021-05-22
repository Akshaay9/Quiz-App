import React, { MouseEvent, useState } from "react";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";

function ModalScreen() {
  const { quizState, quizDispatch } = useQuizContext();
  const [category, setCategory] = useState("");

  const categoryHandler1 = (e: any) => {
    console.log("fitness");

  };
  const categoryHandler2 = (e: any) => {
    console.log("yoga");

  };
  const categoryHandler3 = (e: any) => {
    console.log("meditation");

  };
  const categoryHandler4 = (e: any) => {
    console.log("calories");

  };

  return (
    <div className="modal-screen">
      <div className="modal-screen-top">
        <img src={quizState.userAvatar} alt="" />
        <h3>{quizState.userName}</h3>
      </div>
      <div className="modal-screen-heading">
        <h2>Lets Play</h2>
        <p>Choose a category to play</p>
      </div>
      <div className="modal-screen-body">
        <div className="modal-screen-body-one">
          <div
            className="modal-screen-img1"
            onClick={(e) => categoryHandler1(e)}
          >
            <h4>Fitness</h4>
          </div>
          <div
            className="modal-screen-img2"
            onClick={(e) => categoryHandler2(e)}
          >
            <h4>Yoga</h4>
          </div>
        </div>
        <div className="modal-screen-body-two">
          <div className="modal-screen-img1 img3"
            onClick={(e) => categoryHandler3(e)}
          >
            <h4>Meditation</h4>
          </div>
          <div className="modal-screen-img2 img4"
            onClick={(e) => categoryHandler4(e)}
          >
            <h4>Calorie</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalScreen;
