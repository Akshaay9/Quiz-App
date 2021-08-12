export type QuizOption = {
  id: number;
  optionDesc: string;
  answer: boolean;
};

export type QuizQuestions = {
  id: number;
  questionDesc: string;
  timerDuration?: number | string;
  isAnswered: string;
  option: Array<QuizOption>;
};

export type Quiz = {
  category: string;
  questions: Array<QuizQuestions>;
};
