import { Quiz } from "./Data.type";

export const MeditationQuiz: Quiz = {
  category: "meditation",
  questions: [
    {
      id: 1,
      questionDesc:
        "Meditation is focused on training which part of a human being?",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 11,
          optionDesc: "your mind",
          answer: true,
        },
        {
          id: 12,
          optionDesc: "your body",
          answer: false,
        },
        {
          id: 13,
          optionDesc: "your soul",
          answer: false,
        },
        {
          id: 14,
          optionDesc: "your environment",
          answer: false,
        },
      ],
    },
    {
      id: 2,
      questionDesc: "What is a defining trait of Focused Attention meditation?",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 21,
          optionDesc: "You give up on focusing your mind.",
          answer: false,
        },
        {
          id: 22,
          optionDesc: "you train to focus your mind",
          answer: false,
        },
        {
          id: 23,
          optionDesc: "You focus your mind on one thing.",
          answer: true,
        },
        {
          id: 24,
          optionDesc: "try to connect sould and mind",
          answer: false,
        },
      ],
    },
    {
      id: 3,
      questionDesc:
        "What is neuroplasticity?",
      isAnswered: "no",
      timerDuration: 0,

      option: [
        {
          id: 31,
          optionDesc: "The ability to change the brain's functionality",
          answer: true,
        },
        {
          id: 32,
          optionDesc: "Drug-assisted meditation",
          answer: false,
        },
        {
          id: 33,
          optionDesc: "The science of creating plastic brains",
          answer: false,
        },
        {
          id: 34,
          optionDesc: "Meditating multiple times a day",
          answer: false,
        },
      ],
    },
    {
      id: 4,
      questionDesc: "OMM stands for what kind of meditation?",
      isAnswered: "no",
      timerDuration: 0,
      option: [
        {
          id: 41,
          optionDesc: "Open Mind Meditation",
          answer: false,
        },
        {
          id: 42,
          optionDesc: "Open Mindfull Meditation",
          answer: false,
        },
        {
          id: 43,
          optionDesc: "Open Monitoring Meditation",
          answer: true,
        },
        {
          id: 44,
          optionDesc: "Oral Mentor Meditation",
          answer: false,
        },
      ],
    },
    {
      id: 5,
      questionDesc: "Some people say meditation can help you improve your `qi` which is what?",
      isAnswered: "no",
      timerDuration: 0,
      option: [
        {
          id: 41,
          optionDesc: "emotion",
          answer: false,
        },
        {
          id: 42,
          optionDesc: "concentration",
          answer: false,
        },
        {
          id: 43,
          optionDesc: "health",
          answer: false,
        },
        {
          id: 44,
          optionDesc: "life-force",
          answer: true,
        },
      ],
    },
  ],
};
