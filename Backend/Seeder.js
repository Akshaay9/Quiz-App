import { leaderBoard } from "./Data/Data.js";
import dbConnection from "./DB.js"
import LeaderBoard from "./Model/LeaderBoardModel.js";


dbConnection()

const importData = async() => {
  try {
    await LeaderBoard.deleteMany()
        await LeaderBoard.insertMany(leaderBoard)
        console.log("videos and users has been successfully added");
        process.exit()
    } catch (error) {
        console.log(`${error}`);
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
  
      await LeaderBoard.deleteMany()
      console.log("products && user has been deleted");
      process.exit();
    } catch (error) {
      console.log(`{error}`);
      process.exit(1);
    }
};
  
if (process.argv[2] == "-d") {
    destroyData();
  } else {
    importData();
  }