import { NumberLiteralType } from "typescript";
import { Quiz } from "../../Data/Data.type";

export type InitialState = {
  userName: string;
  userAvatar: string;
  categorySelected: string;
  currentScore: number;
  currentQuestion: number;
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
      payload: {
        currentQuestion: number;
      };
    }
  | {
      type: "UPDATE_ANSWER";
      payload: {
        currentScore: number;
        questionID: number;
        isAnswered: string;
      };
    };
