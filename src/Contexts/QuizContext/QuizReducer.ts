import { QuizQuestions } from "../../Data/Data.type";
import { FitnessQuiz } from "../../Data/FitnessData";
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
        quiz: FitnessQuiz,
      };
    case "INCREMENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
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
