import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
});

function createData(
  Rank: Number,
  Name: string,
  Score: number,
  Category: number,
  Avatar: string
) {
  return { Rank, Name, Score, Category, Avatar };
}

const rows = [
  createData(
    1,
    "Akshay",
    6.0,
    24,
    "https://avatars.dicebear.com/api/male/.svg"
  ),
  createData(
    2,
    "kal-el",
    9.0,
    37,
    "https://avatars.dicebear.com/api/female/.svg"
  ),
  createData(
    3,
    "steve",
    16.0,
    24,
    "https://avatars.dicebear.com/api/jdenticon/.svg"
  ),
  createData(4, "tony", 3.7, 67, "https://avatars.dicebear.com/api/initials/.svg"),
  createData(5, "thor", 16.0, 49, "https://avatars.dicebear.com/api/bottts/.svg"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
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
          {rows.map((row) => (
            <TableRow>
              <TableCell align="left">{row.Rank}</TableCell>
              <TableCell align="right">{row.Name}</TableCell>
              <TableCell align="right">{row.Score}</TableCell>
              <TableCell align="right">{row.Category}</TableCell>
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
  );
}
