import React from "react";
import {
  Grid,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  InputBase,
  Button,
} from "@material-ui/core";
import forms from "../../ManPhy.json";
import GA from "../img&Logos/GroupArrow.png";
import view from "../../view.png";
import pencil from "../../pencil.png";
import del from "../../deleteB.png";
import ReactPaginate from "react-paginate";
import AddContractor from "../Add/AddContractor";
import PhyDetails from "../Details/PhyDetails";

function ManPhy() {
  const [addPhy, setAddPhy] = React.useState(false);

  const [detail, setDetail] = React.useState(false);

  const addPhyClick = () => {
    setAddPhy(true);
  };

  const detailClick = () => {
    setDetail(true);
    setAddPhy(false);
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
          <TableCell>{data.group}</TableCell>
          <TableCell> {data.npi}</TableCell>
          <TableCell>{data.License}</TableCell>
          <TableCell>{data.phone}</TableCell>
          <TableCell>
            <img src={view} alt="" onClick={detailClick} />
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
      {addPhy ? (
        <AddContractor addPhy={addPhy} setAddPhy={setAddPhy} />
      ) : detail ? (
        <PhyDetails />
      ) : (
        <div className="content">
          <div className="E_heading">
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
                List of Physicians
              </div>
            </h2>
          </div>

          <Grid container spacing={5}>
            <div className="fields">
              <Grid className="namee" style={{ marginLeft: "-300px" }}>
                <InputBase
                  placeholder="Physician Name"
                  style={{ left: "30px" }}
                  className="namefield"
                />
              </Grid>
              <Grid className="namee" style={{ marginLeft: "30px" }}>
                <InputBase
                  placeholder="Group Practice Name"
                  style={{ left: "30px" }}
                  className="namefield"
                />
              </Grid>
              <Grid className="id" style={{ marginLeft: "50px" }}>
                <InputBase
                  placeholder="Contractor Name"
                  style={{ left: "30px" }}
                  className="namefield"
                />
              </Grid>
              <Grid className="email" style={{ marginLeft: "70px" }}>
                <InputBase
                  type="email"
                  placeholder="Phone Number"
                  style={{ left: "30px" }}
                  className="email_field"
                />
              </Grid>

              <Grid className="button01" style={{ marginLeft: "90px" }}>
                <Button className="button01_field" style={{ color: "white" }}>
                  filter
                </Button>
              </Grid>

              <Grid className="button02" style={{ marginLeft: "110px" }}>
                <Button className="button02_field" style={{ color: "white" }}>
                  Reset
                </Button>
              </Grid>

              <Grid className="button03" style={{ marginLeft: "150px" }}>
                <Button
                  className="button03_field"
                  style={{ color: "white" }}
                  onClick={addPhyClick}
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
                    Physician Name
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
                    Group Practice Name
                    <img
                      src={GA}
                      alt=""
                      style={{
                        position: "absolute",
                        left: "180px",
                        top: "20px",
                      }}
                      className="groupArrow"
                    />
                  </TableCell>
                  <TableCell className="thead">
                    NPI #
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
                    License #
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
                    Phone Number
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

export default ManPhy;
