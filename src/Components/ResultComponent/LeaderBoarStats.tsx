import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useQuizContext } from "../../Contexts/QuizContext/QuizContext";
import axios from "axios";
import CongratsModal from "./CongratsModal";
import Spinner from "../../Assets/Spinner";

export default function DenseTable() {
  type leaderBoardDesc = {
    rank: number;
    name: string;
    score: number;
    category: number;
    avatar: string;
  };

  type leaderBoardType = {
    result?: "string";
    message?: "string";
    data: leaderBoardDesc[];
  };

  const [leaderBoardData, setLeaderBoardData] = useState<leaderBoardType>();
  const [modal, setModal] = useState<boolean>(false);
  const[loading,setLoading]=useState<boolean>(true);
  const { quizState } = useQuizContext();

  useEffect(() => {
    (async () => {
      try {
        const urlData = {
          name: quizState.userName,
          category: quizState.categorySelected,
          score: quizState.currentScore,
          avatar: quizState.userAvatar,
        };
        const data = await axios.post(
          `https://lit-taiga-43779.herokuapp.com/`,
          urlData
        );
        if (data.data.message) {
          setModal(true);
        }
        setLoading(false)
        setLeaderBoardData(data.data);
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    })();
  }, []);

  console.log(leaderBoardData);

  const useStyles = makeStyles({
    table: {
      minWidth: 550,
    },
  });

  const classes = useStyles();

  function createData(
    Rank: Number,
    Name: string,
    Score: number,
    Category: number,
    Avatar: string
  ) {
    return { Rank, Name, Score, Category, Avatar };
  }

  const rows = leaderBoardData?.data?.map((ele, index) =>
    createData(index, ele.name, ele?.score, ele?.category, ele?.avatar)
  );

  return (
    <>
      {modal && (
        <CongratsModal
          setModal={setModal}
          message={leaderBoardData?.message}
          result={leaderBoardData?.result}
        />
      )}
     
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Score</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="center">Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows != undefined &&
              rows?.length > 0 &&
              rows?.map((row) => (
                <TableRow>
                  <TableCell align="left">{row?.Rank}</TableCell>
                  <TableCell align="right">{row?.Name}</TableCell>
                  <TableCell align="right">{row?.Score}</TableCell>
                  <TableCell align="right">{row?.Category}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <img
                      style={{ width: "15%", borderRadius: "50%" }}
                      src={row.Avatar}
                      alt=""
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
   { loading &&  <Spinner/>}
    </>
  );
}
