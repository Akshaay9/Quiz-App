export type QuizOption = {
    id: number,
    optionDesc:string,
    answer: boolean,
    isAnswered:string
};

export type QuizQuestions = {
  id: number;
  questionDesc: string;
  option: Array<QuizOption>;
};

export type Quiz = {
  category: string;
  questions: Array<QuizQuestions>;
};
