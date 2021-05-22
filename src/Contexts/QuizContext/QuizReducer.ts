import { QuizQuestions } from "../../Data/Data.type";

import { ActionType, InitialState } from "./QuizContext.type";

export const quizReducer = (
  state: InitialState,
  action: ActionType
): InitialState => {
  console.log(action.type);
  switch (action.type) {
    case "INITIALIZE_QUIZ":
      return {
        ...state,
        userName: action.payload.userName,
        userAvatar: `https://avatars.dicebear.com/api/${action.payload.userAvatar}/:seed.svg`,
      };
    case "INITIALIZE_CATEGORY":
      return {
        ...state,
        categorySelected: action.payload.categorySelected,
        quiz: action.payload.quiz,
      };
    case "INCREMENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case "CLEAR_QUIZ":
      return {
        ...state,
        userName: "",
        userAvatar: "",
        categorySelected: "",
        currentScore: 0,
        currentQuestion: 1,
        scoreData: [],
      };
    case "CLEAR_QUIZ_CATEGORY":
      return {
        ...state,
        categorySelected: "",
        currentScore: 0,
        currentQuestion: 1,
        scoreData: [],
      };

    case "UPDATE_ANSWER":
      return {
        ...state,
        currentScore: state.currentScore + action.payload.currentScore,
        scoreData: [...state.scoreData, action.payload.scoreData],
        quiz: {
          ...state.quiz,
          questions: state.quiz.questions.map((ele: QuizQuestions) =>
            ele.id == state.currentQuestion
              ? {
                  ...ele,
                  isAnswered: action.payload.isAnswered,
                  timerDuration: action.payload.time,
                }
              : ele
          ),
        },
      };

    default:
      return state;
  }
};
