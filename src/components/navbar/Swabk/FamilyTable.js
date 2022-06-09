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
    minWidth: 650,
  },
});

function createData(Ftype, relation, Name, Cancer, age) {
  return { Ftype, relation, Name, Cancer, age };
}

const rows = [
  createData("Personal History", "Self", "Johnny Depp", "Lung", 25),
  createData("Mother's Side", "Grandfather", "Steve Smith", "Colon", 30),
  createData("Father's Side", "Mother", "Emma Watson", "Prostate", 14),
];

function FamilyTable() {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{
        width: "97%",
        marginLeft: 22,
        marginTop: 10,
        backgroundColor: "#f8ebb8",
        marginBottom: 30,
      }}
    >
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Family Type</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Relation</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Cancer Type</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.Ftype} style={{ backgroundColor: "#fff" }}>
              <TableCell component="th" scope="row" style={{ marginLeft: 22 }}>
                {row.Ftype}
              </TableCell>
              <TableCell>{row.relation}</TableCell>
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Cancer}</TableCell>
              <TableCell>{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FamilyTable;
