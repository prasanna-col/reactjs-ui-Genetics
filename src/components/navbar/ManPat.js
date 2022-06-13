import React from "react";
import {
  Grid,
  InputBase,
  Button,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
} from "@material-ui/core";
import "../../App.css";
import GA from "../img&Logos/GroupArrow.png";
import calendar from "../img&Logos/calendar.png";
import Rforms from "../../ManPat.json";
import ReactPaginate from "react-paginate";

function ManPat() {
  const [datas, setdatas] = React.useState(Rforms.slice(0, 20));
  const [pageNumber, setPageNumber] = React.useState(0);

  const datasPerPage = 10;
  const pageVisited = pageNumber * datasPerPage;

  const dispData = datas
    .slice(pageVisited, pageVisited + datasPerPage)
    .map((data) => {
      return (
        <TableRow>
          <TableCell>
            <Typography variant="subtitle1">{data.id}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.date}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.patId}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.patName}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.gender}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.phNUm}</Typography>
          </TableCell>
          <TableCell className="statuss">
            <div
              className="status"
              style={{ background: data.background, width: "180px" }}
            >
              <div
                style={{
                  left: "3px",
                  position: "relative",
                  top: "-1px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1">{data.status}</Typography>
              </div>
            </div>
          </TableCell>
        </TableRow>
      );
    });

  const pageCount = Math.ceil(datas.length / datasPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="content">
      <div className="C_heading">
        <h2
          style={{
            marginTop: "10px",
            width: "1880px",
            border: "0px solid grey",
            boxShadow: " 0px 1px 0px rgb(206, 206, 206)",
            borderRadius: "10px",
          }}
        >
             <Typography
                variant="h5"
                style={{
                  marginTop: "20px",
                  marginLeft: "25px",
                  position: "relative",
                  top: "-7px",
                }}
              >
              List of Patients
              </Typography>
          
        </h2>
      </div>
      <Grid container spacing={5}>
        <div className="fields">
          <Grid className="select" style={{ marginLeft: "1px" }}>
            <select
              placeholder="Select Role"
              style={{ left: "30px" }}
              className="id_field"
            >
              <option placeholder="Constractor">Select Role</option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
            </select>
          </Grid>
          <Grid className="namee" style={{ marginLeft: "1px" }}>
            <InputBase
              placeholder="Patient Name"
              style={{ left: "30px" }}
              className="namefield"
            />
          </Grid>

          <Grid className="id" style={{ marginLeft: "1px" }}>
            <select
              placeholder="Constractor"
              style={{ left: "30px" }}
              className="id_field"
            >
              <option placeholder="Constractor">Constractor Name</option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
            </select>
          </Grid>

          <Grid className="namee" style={{ marginLeft: "625px" }}>
            <InputBase
              placeholder="Submission Date"
              style={{ left: "30px", top: "10px" }}
              className="name_field"
            />
            <img
              src={calendar}
              alt=""
              style={{ position: "absolute", left: "250px", top: "13px" }}
            />
          </Grid>

          <Grid className="id" style={{ marginLeft: "630px" }}>
            <select
              placeholder="Status"
              style={{ left: "30px" }}
              className="id_field"
            >
              <option placeholder="Status">Status</option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
            </select>
          </Grid>

          <Grid className="button01" style={{ marginLeft: "320px" }}>
            <Button className="button01_field" style={{ color: "white" }}>
              filter
            </Button>
          </Grid>

          <Grid className="button02" style={{ marginLeft: "320px" }}>
            <Button className="button02_field" style={{ color: "white" }}>
              Reset
            </Button>
          </Grid>
        </div>
      </Grid>

      <div className="form">
        <Table stickyHeader>
          <TableHead style={{ background: "transparent" }}>
            <TableRow>
              <TableCell style={{ width: "2px" }}>
                <Typography variant="body2">S.No</Typography>
              </TableCell>
              <TableCell className="thead">
                <Typography variant="body2">Date</Typography>
                <img
                  src={GA}
                  alt=""
                  style={{ position: "absolute", left: "140px", top: "20px" }}
                  className="groupArrow"
                />
              </TableCell>
              <TableCell className="thead">
                <Typography variant="body2">Patient ID</Typography>
                <img
                  src={GA}
                  alt=""
                  style={{ position: "absolute", left: "120px", top: "20px" }}
                  className="groupArrow"
                />
              </TableCell>
              <TableCell className="thead">
                <Typography variant="body2">Patient Name</Typography>
                <img
                  src={GA}
                  alt=""
                  style={{ position: "absolute", left: "140px", top: "20px" }}
                  className="groupArrow"
                />
              </TableCell>
              <TableCell className="thead">
                <Typography variant="body2">Gender</Typography>
                <img
                  src={GA}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "135px",
                    top: "20px",
                  }}
                  className="groupArrow"
                />
              </TableCell>
              <TableCell className="thead">
                <Typography variant="body2">Phone Number</Typography>
                <img
                  src={GA}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "200px",
                    top: "20px",
                  }}
                  className="groupArrow"
                />
              </TableCell>

              <TableCell
                style={{ width: "160px", textAlign: "center" }}
                className="thead"
              >
                <Typography variant="body2">Status</Typography>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>{dispData}</TableBody>
        </Table>
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={pageChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default ManPat;
