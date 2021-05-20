import { NumberLiteralType } from "typescript";
import { Quiz } from "../../Data/Data.type";

export type InitialState = {
  userName: string;
  userAvatar: string;
  categorySelected: string;
  currentScore: number;
  scoreData: number[];
  currentQuestion: number;
  timer: number;
  quiz: Quiz;
};

export type ActionType =
  | {
      type: "INITIALIZE_QUIZ";
      payload: {
        userName: string;
        userAvatar: string;
        categorySelected: string;
        quiz: Quiz;
      };
    }
  | {
      type: "INCREMENT_QUESTION";
    }
  | {
      type: "UPDATE_ANSWER";
      payload: {
        currentScore: number;
        isAnswered: string;
        time: number | string;
        scoreData: number ;
      };
    };

export type ContextType = {
  quizState: InitialState;
  quizDispatch: (action: ActionType) => void;
};
