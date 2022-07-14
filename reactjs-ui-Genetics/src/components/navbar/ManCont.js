import React, { useState } from "react";
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
  Typography,
} from "@material-ui/core";
import { useQuery, useMutation } from "@apollo/client";
import "../navbarCSS/manCont.css";
import forms from "../../ManCont.json";
import GA from "../img&Logos/GroupArrow.png";
import view from "../../view.png";
import pencil from "../../pencil.png";
import del from "../../deleteB.png";
import ReactPaginate from "react-paginate";
import right from "../img&Logos/rightArrow.png";
import AddContractor from "../Add/AddContractor";
import RoleModal from "../Modals/RoleModal";
import { GET_CONTRACTOR, DELETE_CONTRACTOR } from "../../graphql/Queries";

function ManCont() {
  const { data } = useQuery(GET_CONTRACTOR);
  console.log(data);

  const [deleteContractor, { loading, data: deletid, error }] = useMutation(
    DELETE_CONTRACTOR,
    { refetchQueries: [{ query: GET_CONTRACTOR }] }
  );
  const [add, setAdd] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const addClick = () => {
    setAdd(true);
  };

  const [search, setsearch] = useState("");
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage);
  };

  const offset1 = offset * perPage;
  console.log(offset1);

  const pageCount = Math.ceil(data?.contractors.length / perPage);

  const displayData = data?.contractors
    .slice(offset1, offset1 + perPage)
    .filter((value) => {
      if (search === !null) {
        return value;
      } else if (
        value.email_address.toLowerCase().includes(search.toLowerCase())
      ) {
        return value;
      } else if (value.fullName.toLowerCase().includes(search.toLowerCase())) {
        return value;
      }
    })
    .map((data, index) => {
      return (
        <TableRow key={index}>
          <TableCell>
            <Typography variant="subtitle1">{index + 1}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data?.fullName}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data?.contractor_id}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data?.phone}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data?.email_address}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data?.street_address}</Typography>
          </TableCell>
          <TableCell>
            <img src={view} alt="" />
            <img
              src={pencil}
              alt=""
              style={{ marginLeft: "10px" }}
              className="view_icon"
            />
            <img
              onClick={async () => {
                await deleteContractor({
                  variables: { contractorDelete: { id: data?.id } },
                });
              }}
              src={del}
              alt=""
              style={{ marginLeft: "10px" }}
              className="view_icon"
            />
          </TableCell>
        </TableRow>
      );
    });

  // const pageCount = Math.ceil(users.length / usersPerPage);

  // const pageChange = ({ selected }) => {
  //   setPageNumber(selected);
  // };

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
              {/* <div
                style={{
                  marginLeft: "25px",
                  position: "relative",
                  top: "-7px",
                }}
              >
                List of Contractors
              </div> */}
              <Typography
                variant="h5"
                style={{
                  marginTop: "20px",
                  marginLeft: "25px",
                  position: "relative",
                  top: "-7px",
                }}
              >
                List of Contractors
              </Typography>
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
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setsearch(e.target.value);
                  }}
                />
              </Grid>

              <Grid className="button01" style={{ marginLeft: "90px" }}>
                <Button
                  className="button01_field"
                  style={{ color: "white" }}
                  onClick={() => setOpen(true)}
                >
                  filter
                </Button>
              </Grid>
              <RoleModal open={open} setOpen={setOpen} />
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
                  <TableCell style={{ width: "2px" }}>
                    <Typography variant="body2">S.No</Typography>
                  </TableCell>
                  <TableCell className="thead">
                    <Typography variant="body2">Full Name</Typography>
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
                    <Typography variant="body2">CONT ID</Typography>
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
                    <Typography variant="body2">Phone Number</Typography>
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
                    <Typography variant="body2">Email Address</Typography>
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
                    <Typography variant="body2">Address</Typography>
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
                    <Typography variant="body2">Actions</Typography>
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
            onPageChange={handlePageClick}
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
