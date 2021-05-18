import { createContext, useContext, useReducer } from "react";
import { FitnessQuiz } from "../../Data/FitnessData";
import { InitialState } from "./QuizContext.type";
import { quizReducer } from "./QuizReducer";

const intitalState: InitialState = {
  userName: "akshay",
  userAvatar: "https://avatars.dicebear.com/api/male/:seed.svg",
  categorySelected: "fitness",
  currentScore: 0,
  currentQuestion: 1,
  quiz: FitnessQuiz,
};

const QuizContext = createContext<{
  quizState: InitialState;
  quizDispatch: React.Dispatch<any>;
}>({ quizState: intitalState, quizDispatch: () => null });

export const QuizContextFun: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, intitalState);
  return (
    <QuizContext.Provider
      value={{ quizState: intitalState, quizDispatch: () => null }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
