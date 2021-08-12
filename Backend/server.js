import express from "express";
import dbConnection from "./DB.js";
import dotenv from "dotenv";
import cors from "cors";
import LeaderBoard from "./Model/LeaderBoardModel.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

dbConnection()

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

app.get("/", (req, res) => {
  res.send("API is running....");
});

// public
// post request
// add people to leader borad based on their score

app.post("/", async (req, res) => {
  const leaderboardList = await LeaderBoard.find({});
  const sortedLeaderboardList = leaderboardList.sort(
    (a, b) => b.score - a.score
  );
  const { name, score, avatar, category } = req.body;
  const lastLeaderBoardGuy =
    sortedLeaderboardList[sortedLeaderboardList.length - 1];

  // if no data is provided
  if (!name || !score || !avatar || !category) {
    return res.status(200).json({
      result: `negative`,
      data: sortedLeaderboardList,
    });
  }
  // if user alredy present
  const isUSerAlredyLeaderBoarded = sortedLeaderboardList.filter(
    (ele) => ele.name == name && ele.avatar == avatar
  );
  if (isUSerAlredyLeaderBoarded.length > 0) {
    if (isUSerAlredyLeaderBoarded[0].score == score) {
      return res.status(200).json({
        result: "negative",
        message: "your score is same as previous one",
        data: sortedLeaderboardList,
      });
    } else if (isUSerAlredyLeaderBoarded[0].score > score) {
      return res.status(200).json({
        result: "negative",
        message: "your score is less than previous one",
        data: sortedLeaderboardList,
      });
    } else if (isUSerAlredyLeaderBoarded[0].score < score) {
      await LeaderBoard.findByIdAndDelete(isUSerAlredyLeaderBoarded[0]._id);

      const newLeaderBoardGuy = new LeaderBoard({
        name,
        score,
        avatar,
        category,
      });
      await newLeaderBoardGuy.save();
      const NewleaderboardList = await LeaderBoard.find({});
      const NewSortedLeaderboardList = NewleaderboardList.sort(
        (a, b) => b.score - a.score
      );

      return res.status(200).json({
        result: "positive",
        message: "your have beaten your previous score",
        data: NewSortedLeaderboardList,
      });
    }
  }

  if (lastLeaderBoardGuy.score > score) {
    return res.status(200).json({
      result: "negative",
      message: `you missed leaderboard by ${
        lastLeaderBoardGuy.score - score
      } points`,
      data: sortedLeaderboardList,
    });
  } else if (lastLeaderBoardGuy.score <= score) {
    await LeaderBoard.findByIdAndDelete(lastLeaderBoardGuy._id);

    const newLeaderBoardGuy = new LeaderBoard({
      name,
      score,
      avatar,
      category,
    });
    await newLeaderBoardGuy.save();
    const NewleaderboardList = await LeaderBoard.find({});
    const NewSortedLeaderboardList = NewleaderboardList.sort(
      (a, b) => b.score - a.score
    );
    return res.status(200).json({
      result: "positive",
      message: "you enetered the  leaderboard",
      data: NewSortedLeaderboardList,
    });
  }
});

// custome err handeling
app.use((err, req, res, next) => {
  console.log(err);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

// 404 handling
app.use("*", function (req, res) {
  return res.status(400).json({ error: "Page Not Found" });
});
