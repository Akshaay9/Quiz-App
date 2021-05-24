import { createContext, useContext, useReducer } from "react";
import { FitnessQuiz } from "../../Data/FitnessData";
import { InitialState, ContextType } from "./QuizContext.type";
import { quizReducer } from "./QuizReducer";

export const intitalState: InitialState = {
  userName: "",
  userAvatar: "",
  categorySelected: "",
  currentScore: 0,
  currentQuestion: 1,
  scoreData: [],
  quiz: FitnessQuiz,
};

const QuizContext = createContext<ContextType>({} as ContextType);

export const QuizContextFun: React.FC = ({ children }) => {
  const [quizState, quizDispatch] = useReducer(quizReducer, intitalState);
  return (
    <QuizContext.Provider value={{ quizState, quizDispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => useContext(QuizContext);
