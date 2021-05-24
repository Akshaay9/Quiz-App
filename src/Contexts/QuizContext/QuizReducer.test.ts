import { quizReducer } from "./QuizReducer";
import { intitalState } from "./QuizContext";
import { ActionType } from "./QuizContext.type";
import { FitnessQuiz } from "../../Data/FitnessData";

describe("testing quiz reducer", () => {
  // test1
  test("should initialize quiz for a user with his name and category selected", () => {
    let action1: ActionType = {
      type: "INITIALIZE_QUIZ",
      payload: {
        userName: "akshay",
        userAvatar: "male",
      },
    };
    let reducedState = quizReducer(intitalState, action1);

    let action2: ActionType = {
      type: "INITIALIZE_CATEGORY",
      payload: {
        categorySelected: "fitness",
        quiz: FitnessQuiz,
      },
    };
    let reducedState2 = quizReducer(reducedState, action2);

    const FinalState = {
      userName: "akshay",
      userAvatar: `https://avatars.dicebear.com/api/male/:seed.svg`,
      categorySelected: "fitness",
      currentScore: 0,
      currentQuestion: 1,
      scoreData: [],
      quiz: FitnessQuiz,
    };

    expect(reducedState2).toEqual(FinalState);
  });

  // test 2
  test("should increment question number of a users quiz", () => {
    const action: ActionType = {
      type: "INCREMENT_QUESTION",
    };
    const reducedState = quizReducer(intitalState, action);
    expect(reducedState.currentQuestion).toEqual(2);
  });
    // test 3
  test("should update answer,currentScore,scoreData,isAnswered and time duration of a particular quiz", () => {
    const action: ActionType = {
      type: "UPDATE_ANSWER",
      payload: {
        currentScore: 10,
        isAnswered: "true",
        time: 5,
        scoreData: 10,
      },
    };

    const requiredState = {
      currentScore: 10,
      scoreData: [10],
      quiz: 
      {
        id: 1,
        questionDesc:
          "Which exercise boosts metabolism 24 hours a day, seven days a week?",
        isAnswered: "true",
        timerDuration: 5,
  
        option: [
          {
            id: 11,
            optionDesc: "strength training",
            answer: true,
          },
          {
            id: 12,
            optionDesc: "Pilates",
            answer: false,
          },
          {
            id: 13,
            optionDesc: "yoga",
            answer: false,
          },
          {
            id: 14,
            optionDesc: "kickboxing",
            answer: false,
          },
        ],
      },
    };
    const reducedState = quizReducer(intitalState, action);

    const finalState = {
      currentScore: reducedState.currentScore,
      scoreData: reducedState.scoreData,
      quiz: reducedState.quiz.questions[0],
    };
    expect(finalState).toEqual(requiredState);
  });
});
