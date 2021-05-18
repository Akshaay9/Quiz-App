import { Quiz, QuizQuestions } from "../../Data/Data.type";
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
        userAvatar: action.payload.userAvatar,
        categorySelected: action.payload.categorySelected,
        quiz: FitnessQuiz,
      };
    case "INCREMENT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        timer: 10,
      };
    case "UPDATE_ANSWER":
      return {
        ...state,
        currentScore: state.currentScore + action.payload.currentScore,
        quiz: {
          ...state.quiz,
          questions: state.quiz.questions.map((ele: QuizQuestions) =>
            ele.id == state.currentQuestion
              ? {
                  ...ele,
                  isAnswered: action.payload.isAnswered,
                }
              : ele
          ),
        },
      };

    default:
      return state;
  }
};
