import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  score: {
    type: Number,

  },
  category: {
    type: String,
  },
  avatar: {
    type: String,
  },

})


const LeaderBoard = mongoose.model("LeaderBoard", userSchema)
export default LeaderBoard