import React from "react";
import "../../App.css";
import {
  Button,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@material-ui/core";
import "../navbarCSS/manCont.css";
import Paper from "@mui/material/Paper";
import forms from "../../ManCont.json";
import GA from "../img&Logos/GroupArrow.png";
import view from "../../view.png";
import pencil from "../../pencil.png";
import del from "../../deleteB.png";
import ReactPaginate from "react-paginate";
import right from "../img&Logos/rightArrow.png";
import AddContractor from "../Add/AddContractor";
import RoleModal from "../Modals/RoleModal";

function ManCont() {
  const [add, setAdd] = React.useState(false);

  const [open, setOpen] = React.useState(false);



  const addClick = () => {
    setAdd(true);
  };

  const [users, setUsers] = React.useState(forms.slice(0, 20));
  const [pageNumber, setPageNumber] = React.useState(0);

  const usersPerPage = 10;
  const pageVisited = pageNumber * usersPerPage;

  const displayData = users
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((data) => {
      return (
        <TableRow>
          <TableCell>{data.id}</TableCell>
          <TableCell>{data.name}</TableCell>
          <TableCell>{data.CONT}</TableCell>
          <TableCell> {data.Phone}</TableCell>
          <TableCell>{data.email}</TableCell>
          <TableCell>{data.address}</TableCell>
          <TableCell>
            <img src={view} alt="" />
            <img
              src={pencil}
              alt=""
              style={{ marginLeft: "10px" }}
              className="view_icon"
            />
            <img
              src={del}
              alt=""
              style={{ marginLeft: "10px" }}
              className="view_icon"
            />
          </TableCell>
        </TableRow>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      {add ? (
        <AddContractor />
      ) : (
        <div className="content" style={{ overflow: "hidden" }}>
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
              <div
                style={{
                  marginLeft: "25px",
                  position: "relative",
                  top: "-7px",
                }}
              >
                List of Contractors
              </div>
            </h2>
          </div>
          <Grid container spacing={5}>
            <div className="fields">
              <Grid className="select" style={{ marginLeft: "10px" }}>
                <select className="select_ins" style={{ border: "disabled" }}>
                  <option placeholder="Select Role">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Developers">Developers</option>
                  <option value="Testers">Testers</option>
                </select>
              </Grid>
              <Grid className="namee" style={{ marginLeft: "30px" }}>
                <InputBase
                  placeholder="Name"
                  style={{ left: "30px" }}
                  className="namefield"
                />
              </Grid>
              <Grid className="id" style={{ marginLeft: "50px" }}>
                <select
                  placeholder="ID"
                  style={{ left: "30px" }}
                  className="id_field"
                >
                  <option placeholder="ID">ID</option>
                  <option value="001">001</option>
                  <option value="002">002</option>
                  <option value="003">003</option>
                </select>
              </Grid>
              <Grid className="email" style={{ marginLeft: "70px" }}>
                <InputBase
                  type="email"
                  placeholder="Email Address"
                  style={{ left: "30px" }}
                  className="email_field"
                />
              </Grid>

              <Grid className="button01" style={{ marginLeft: "90px" }}>
                <Button className="button01_field" style={{ color: "white" }} onClick={()=> setOpen(true)}>
                  filter
                </Button>
              </Grid>
              <RoleModal open={open} setOpen={setOpen}/>
              <Grid className="button02" style={{ marginLeft: "110px" }}>
                <Button className="button02_field" style={{ color: "white" }}>
                  Reset
                </Button>
              </Grid>

              <Grid className="button03" style={{ marginLeft: "150px" }}>
                <Button
                  className="button03_field"
                  style={{ color: "white" }}
                  onClick={addClick}
                >
                  Add Now
                </Button>
              </Grid>
            </div>
          </Grid>

          <div className="form">
            <Table stickyHeader>
              <TableHead style={{ background: "transparent" }}>
                <TableRow>
                  <TableCell style={{ width: "2px" }}>S.No</TableCell>
                  <TableCell className="thead">
                    Full Name
                    <img
                      src={GA}
                      alt=""
                      style={{
                        position: "absolute",
                        left: "150px",
                        top: "20px",
                      }}
                      className="groupArrow"
                    />
                  </TableCell>
                  <TableCell className="thead">
                    CONT ID
                    <img
                      src={GA}
                      alt=""
                      style={{
                        position: "absolute",
                        left: "120px",
                        top: "20px",
                      }}
                      className="groupArrow"
                    />
                  </TableCell>
                  <TableCell className="thead">
                    Phone Number
                    <img
                      src={GA}
                      alt=""
                      style={{
                        position: "absolute",
                        left: "140px",
                        top: "20px",
                      }}
                      className="groupArrow"
                    />
                  </TableCell>
                  <TableCell className="thead">
                    Email Address
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
                  <TableCell className="thead">
                    Address
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
                  <TableCell style={{ marginRight: "180px" }} className="thead">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ background: "white" }}>
                {displayData}
              </TableBody>
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
      )}
    </div>
  );
}

export default ManCont;
