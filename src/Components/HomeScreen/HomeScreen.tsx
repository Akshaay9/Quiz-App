import "./App.css";
import { useNavigate } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";
import React, { Dispatch, SetStateAction } from "react";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";

function HomeScreen({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const { quizState, quizDispatch } = useQuizContext();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    quizDispatch({
      type: "INITIALIZE_QUIZ",
      payload: {
        userName: name,
        userAvatar: currency,
      },
    });

    setOpen(true);
    // navigate("/quiz");
  };

  const currencies = [
    {
      value: "male",
      label: "male",
    },
    {
      value: "female",
      label: "female",
    },
    {
      value: "gridy",
      label: "gridy",
    },
    {
      value: "bottts",
      label: "bottts",
    },
    {
      value: "micah",
      label: "micah",
    },
    {
      value: "initials",
      label: "initials",
    },
  ];

  const quizzes = [
    {
      value: "Yes",
      label: "Yes",
    },
    {
      value: "No",
      label: "No",
    },
    {
      value: "on and off",
      label: "on and off",
    },
  ];
  const [name, setName] = useState("");
  const [currency, setCurrency] = useState("");
  const [currency1, setCurrency1] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency1(event.target.value);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch",
          color: "white",
        },
      },
    })
  );
  const classes = useStyles();

  return (
    <div className="login-screen">
      <div className="home-screen-left">
        <h2>One stop destination to test your fitness knowledge</h2>
        <ul>
          <li>4 different category of quiz to test your knowledge</li>
          <li>Leaderboard to showcase top performers</li>
          <li>Line graph to showcase your score progress</li>
          <li>Pie chart to showcase your answer statistics</li>
          <li>Bar chart to showcase your timing statistics</li>
        </ul>
      </div>
      <div className="home-screen-right">
        <h2>Lets Play</h2>

        <form
          className={classes.root}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => submitHandler(e)}
        >
          <div className="input-top">
            <TextField
              id="standard-basic"
              label="Name"
              value={name}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
              ) => setName(e.target.value)}
              required
            />
            <TextField
              id="standard-select-currency"
              select
              label="Avataar"
              value={currency}
              onChange={handleChange}
              required
              helperText="Please select your avataar"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="input-bottom">
            <TextField
              id="standard-select-currency"
              select
              required
              label="Fitness Freak ?"
              value={currency1}
              onChange={handleChange2}
              helperText="Are u a fitness freak?"
            >
              {quizzes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="login-cta">
            <button>Take me In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default HomeScreen;
