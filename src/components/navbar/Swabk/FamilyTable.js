import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import family from "../../../Json/Family.json";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 800,
  },
});

function FamilyTable() {
  const classes = useStyles();

  return (
    <TableContainer
      component={Paper}
      style={{
        width: "97.5%",
        marginLeft: 22,
        marginTop: 5,
        backgroundColor: "#FDF7F1",
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
          {family.map((row, index) => (
            <TableRow key={index} style={{ backgroundColor: "#fff" }}>
              <TableCell component="th" scope="row" style={{ marginLeft: 22 }}>
                <Typography variant="subtitle1">{row.family_type}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{row.relation}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{row.name}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{row.cancer_type}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle1">{row.age}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FamilyTable;
