export type leaderBoardDesc = {
    rank: number;
    name: string;
    score: number;
    category: number;
    avatar: string;
};
  
export type InitialState = {
    isLeaderBoardLoded: boolean,
    result: string;
    message: string;
    data: leaderBoardDesc[];
}

export type ActionType = | {
    type: "LOAD_LEADERBOARD";
    payload: {
      
        result: string;
        message: string;
        data: leaderBoardDesc[];
    }
}
    | {
        type: "CLEAR_LEADERBOARD";
       
    }


export type LeaderBoardCOntextType={
    leaderBoardState: InitialState,
    leaderboardDispatch: (action: ActionType) => void;
}
