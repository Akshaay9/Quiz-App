import React, { MouseEvent, useState } from "react";
import { useNavigate } from "react-router";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import { calorieQuiz } from "../../Data/CalorieData";
import { FitnessQuiz } from "../../Data/FitnessData";
import { MeditationQuiz } from "../../Data/MeditationData";
import { YOgaQUiz } from "../../Data/YogaData";

function ModalScreen() {
  const { quizState, quizDispatch } = useQuizContext();
  const navigate = useNavigate();

  const categoryHandler1 = () => {
    quizDispatch({
      type: "INITIALIZE_CATEGORY",
      payload: {
        categorySelected: "fitness",
        quiz: FitnessQuiz,
      },
    });
    navigate("/quiz");
  };

  const categoryHandler2 = () => {
    quizDispatch({
      type: "INITIALIZE_CATEGORY",
      payload: {
        categorySelected: "yoga",
        quiz: YOgaQUiz,
      },
    });
    navigate("/quiz");
  };
  const categoryHandler3 = () => {
    quizDispatch({
      type: "INITIALIZE_CATEGORY",
      payload: {
        categorySelected: "meditation",
        quiz: MeditationQuiz,
      },
    });
    navigate("/quiz");
  };
  const categoryHandler4 = () => {
    quizDispatch({
      type: "INITIALIZE_CATEGORY",
      payload: {
        categorySelected: "Calories",
        quiz: calorieQuiz,
      },
    });
    navigate("/quiz");
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
          <div className="modal-screen-img1" onClick={() => categoryHandler1()}>
            <h4>Fitness</h4>
          </div>
          <div className="modal-screen-img2" onClick={() => categoryHandler2()}>
            <h4>Yoga</h4>
          </div>
        </div>
        <div className="modal-screen-body-two">
          <div
            className="modal-screen-img1 img3"
            onClick={() => categoryHandler3()}
          >
            <h4>Meditation</h4>
          </div>
          <div
            className="modal-screen-img2 img4"
            onClick={() => categoryHandler4()}
          >
            <h4>Calorie</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalScreen;
