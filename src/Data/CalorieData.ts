import { Quiz } from "./Data.type";

export const calorieQuiz: Quiz = {
  category: "Calories",
  questions: [
    {
      id: 1,
      questionDesc:
        "How many grapes can you eat for the same number of calories as a single doughnut hole",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 11,
          optionDesc: "27 grapes",
          answer: true,
        },
        {
          id: 12,
          optionDesc: "11 grapes",
          answer: false,
        },
        {
          id: 13,
          optionDesc: "22 grapes",
          answer: false,
        },
        {
          id: 14,
          optionDesc: "15 grapes",
          answer: false,
        },
      ],
    },
    {
      id: 2,
      questionDesc: "How many apples can you eat for the same amount of calories as one cup of chocolate ice cream?",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 21,
          optionDesc: " 1 amd 1/2 apple",
          answer: false,
        },
        {
          id: 22,
          optionDesc: "3 apple",
          answer: false,
        },
        {
          id: 23,
          optionDesc: " 3 and 3/4 apple",
          answer: true,
        },
        {
          id: 24,
          optionDesc: "1/2 apple",
          answer: false,
        },
      ],
    },
    {
      id: 3,
      questionDesc: "How many cups of carrots can you eat for the same number of calories as one Snickers™ bar?",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 31,
          optionDesc: "26oz of carrots",
          answer: true,
        },
        {
          id: 32,
          optionDesc: "16oz of carrots",
          answer: false,
        },
        {
          id: 33,
          optionDesc: "22oz of carrots",
          answer: false,
        },
        {
          id: 34,
          optionDesc: "6oz of carrots",
          answer: false,
        },
      ],
    },
    {
      id: 4,
      questionDesc: "How many peanuts can you eat for the same amount of calories as 2 tbsp of creamy peanut butter?",
      isAnswered: "no",
      timerDuration: 0,
      option: [
        {
          id: 41,
          optionDesc: "18 peanuts",
          answer: false,
        },
        {
          id: 42,
          optionDesc: "31 peanuts",
          answer: false,
        },
        {
          id: 43,
          optionDesc: "38 peanuts",
          answer: true,
        },
        {
          id: 44,
          optionDesc: "18 peanuts",
          answer: false,
        },
      ],
    },
    {
      id: 5,
      questionDesc:
        "How many kiwis can you eat for the same number of calories as two Double Stuf Oreos™?",
      isAnswered: "no",
      timerDuration: 0,
      option: [
        {
          id: 41,
          optionDesc: "5 kiwis,",
          answer: false,
        },
        {
          id: 42,
          optionDesc: "2 kiwis,",
          answer: false,
        },
        {
          id: 43,
          optionDesc: "13 kiwis,",
          answer: false,
        },
        {
          id: 44,
          optionDesc: "2 kiwis,",
          answer: true,
        },
      ],
    },
  ],
};
