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
import Lforms from "../../ManLab.json";
import view from "../../view.png";
import pencil from "../../pencil.png";
import del from "../../deleteB.png";
import ReactPaginate from "react-paginate";
import AddLabs from "../Add/AddLabs";

function ManLab() {
  const [datas, setdatas] = React.useState(Lforms.slice(0, 20));
  const [pageNumber, setPageNumber] = React.useState(0);

  const [addLab, setAddLab] = React.useState(false);

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
            <Typography variant="subtitle1">{data.labName}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.NOC}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.Services}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.phNum}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.email}</Typography>
          </TableCell>
          <TableCell>
            <div style={{ textAlign: "center" }}>
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
            </div>
          </TableCell>
        </TableRow>
      );
    });

  const pageCount = Math.ceil(datas.length / datasPerPage);

  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const addLabClick = () => {
    setAddLab(true);
  };

  return (
    <div>
      {addLab ? (
        <AddLabs />
      ) : (
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
              List of Laboratory
              </Typography>
            </h2>
          </div>

          <Grid container spacing={5}>
            <div className="fields">
              <Grid className="namee" style={{ left: "30px" }}>
                <InputBase
                  className="namefield"
                  placeholder="Laboratory Name"
                  style={{ left: "30px" }}
                />
              </Grid>

              <Grid className="email" style={{ left: "350px" }}>
                <InputBase
                  className="email_field"
                  placeholder="Name of Contact"
                  style={{ left: "30px" }}
                />
              </Grid>

              <Grid
                className="select"
                style={{ marginLeft: "10px", left: "670px" }}
              >
                <select className="select_ins" style={{ border: "disabled" }}>
                  <option placeholder="Services">Services</option>
                  <option value="Manager">Manager</option>
                  <option value="Developers">Developers</option>
                  <option value="Testers">Testers</option>
                </select>
              </Grid>

              <Grid
                className="select"
                style={{ marginLeft: "10px", left: "990px" }}
              >
                <select className="select_ins" style={{ border: "disabled" }}>
                  <option placeholder="Services">Services</option>
                  <option value="Manager">Manager</option>
                  <option value="Developers">Developers</option>
                  <option value="Testers">Testers</option>
                </select>
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
                  onClick={addLabClick}
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
                    Laboratory Name
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
                    <Typography variant="body2">Name of Contact</Typography>
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
                    <Typography variant="body2">Services</Typography>
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

                  <TableCell className="thead" style={{ width: "300px" }}>
                    <Typography variant="body2">Email Address</Typography>
                    <img
                      src={GA}
                      alt=""
                      style={{
                        position: "absolute",
                        left: "228px",
                        top: "20px",
                      }}
                      className="groupArrow"
                    />
                  </TableCell>

                  <TableCell
                    style={{ width: "160px", textAlign: "center" }}
                    className="thead"
                  >
                    <Typography variant="body2">Actions</Typography>
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
      )}
    </div>
  );
}

export default ManLab;
