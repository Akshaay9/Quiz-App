import {
  InitialState,
  LeaderBoardCOntextType,
} from "./LeaderBoardContext.type";
import { createContext, useContext, useReducer } from "react";
import {leaderBoardContextReducer} from "./LeaderBoardContextReducer"

export const initialState: InitialState = {
  isLeaderBoardLoded: false,
  result: "",
  message: "",
  data: [],
};

const leaderBoardContext = createContext<LeaderBoardCOntextType>(
  {} as LeaderBoardCOntextType
);

export const LeaderBoardCOntextFun: React.FC = ({ children }) => {
  const[leaderBoardState,leaderboardDispatch]=useReducer(leaderBoardContextReducer,initialState)
  return (
    <leaderBoardContext.Provider value={{leaderBoardState,leaderboardDispatch}}>
      {children}
    </leaderBoardContext.Provider>  
  )
}

export const useLeaderBoardContext=()=>useContext(leaderBoardContext)