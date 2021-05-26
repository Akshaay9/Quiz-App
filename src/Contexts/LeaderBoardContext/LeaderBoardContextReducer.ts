import { InitialState, ActionType } from "./LeaderBoardContext.type";
export const leaderBoardContextReducer = (
  state: InitialState,
  action: ActionType
) => {
  switch (action.type) {
    case "LOAD_LEADERBOARD":
      return {
        ...state,
        isLeaderBoardLoded: true,
        result: action.payload.result,
        message: action.payload.message,
        data: action.payload.data,
      };

    case "CLEAR_LEADERBOARD":
      return {
          ...state,
          isLeaderBoardLoded: false,
          result: "",
          message: "",
          data:[]
      };
    default:
      return state;
  }
};
