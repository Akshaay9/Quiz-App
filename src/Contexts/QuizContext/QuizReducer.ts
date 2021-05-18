import { FitnessQuiz } from "../../Data/FitnessData";
import { ActionType, InitialState } from "./QuizContext.type";

export const quizReducer = (state: InitialState, action: ActionType):InitialState => {
  switch (action.type) {
    case "INITIALIZE_QUIZ":
      return {
        ...state,
        userName: action.payload.userName,
        userAvatar: action.payload.userAvatar,
        categorySelected: action.payload.categorySelected,
        quiz: FitnessQuiz,
      };

    default:
      return state;
  }
};
