import { Quiz } from "./Data.type";

export const FitnessQuiz: Quiz = {
  category: "fitness",
  questions: [
    {
      id: 1,
      questionDesc:
        "Which exercise boosts metabolism 24 hours a day, seven days a week?",
      isAnswered: "no",
      timerDuration: 0,

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
    {
      id: 2,
      questionDesc: "What does HIIT stand for",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 21,
          optionDesc: "Heat",
          answer: false,
        },
        {
          id: 22,
          optionDesc: "High-interval intensity training",
          answer: false,
        },
        {
          id: 23,
          optionDesc: "High-interval intensity therapy",
          answer: false,
        },
        {
          id: 24,
          optionDesc: "High-intensity interval training",
          answer: true,
        },
      ],
    },
    {
      id: 3,
      questionDesc:
        "What is the amount of calories one has to burn in ordered to reduce 1kg of fat from his body",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 31,
          optionDesc: "7700 Kcal",
          answer: true,
        },
        {
          id: 32,
          optionDesc: "3500 Kcal",
          answer: false,
        },
        {
          id: 33,
          optionDesc: "5490 Kcal",
          answer: false,
        },
        {
          id: 34,
          optionDesc: "6700 Kcal",
          answer: false,
        },
      ],
    },
    {
      id: 4,
      questionDesc: "What does BMR stands for?",
      isAnswered: "no",
      timerDuration: 0,
      option: [
        {
          id: 41,
          optionDesc: "Bascal metabolic rate",
          answer: false,
        },
        {
          id: 42,
          optionDesc: "bio metabolic rate ",
          answer: false,
        },
        {
          id: 43,
          optionDesc: "Body metabolic rate (BMR)",
          answer: false,
        },
        {
          id: 44,
          optionDesc: "Basal molecular rate (BMR)",
          answer: true,
        },
      ],
    },
    {
      id: 5,
      questionDesc: "Which of these nutrients helps to build lean muscle",
      isAnswered: "no",
      timerDuration: 0,
      option: [
        {
          id: 41,
          optionDesc: "fat",
          answer: false,
        },
        {
          id: 42,
          optionDesc: "proteins",
          answer: true,
        },
        {
          id: 43,
          optionDesc: "carbohydrate",
          answer: false,
        },
        {
          id: 44,
          optionDesc: "vitamins",
          answer: false,
        },
      ],
    },
  ],
};
