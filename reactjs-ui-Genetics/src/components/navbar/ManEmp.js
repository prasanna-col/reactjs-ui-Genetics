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
import Eforms from "../../ManEmp.json";
import ReactPaginate from "react-paginate";
import view from "../../view.png";
import pencil from "../../pencil.png";
import del from "../../deleteB.png";
import { height } from "@mui/system";
import AddEmployee from "../Add/AddEmployee";
import { useHistory } from "react-router-dom";

function ManEmp() {
  const history = useHistory();
  const [datas, setdatas] = React.useState(Eforms.slice(0, 20));
  const [pageNumber, setPageNumber] = React.useState(0);
  const [addEmp, setAddEmp] = React.useState(false);

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
            <Typography variant="subtitle1">{data.name}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.empid}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.mob}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.email}</Typography>
          </TableCell>
          <TableCell>
            <Typography variant="subtitle1">{data.role}</Typography>
          </TableCell>

          <TableCell className="statuss">
            <div className="status" style={{ background: data.background }}>
              <Typography
                variant="body1"
                style={{
                  left: "10px",
                  position: "relative",
                  top: "2px",
                  color: "white",
                }}
              >
                {data.status}
              </Typography>
            </div>
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

  const ClickAdd = () => {
    history.push("/AddEmployee");
  };

  return (
    <div>
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

        <div className="fields">
          <Grid className="namee" style={{ left: "30px" }}>
            <InputBase
              className="namefield"
              placeholder="Last Name"
              style={{ left: "30px" }}
            />
          </Grid>

          <Grid className="email" style={{ left: "350px" }}>
            <InputBase
              className="email_field"
              placeholder="Email Address"
              style={{ left: "30px" }}
            />
          </Grid>

          <Grid className="button01" style={{ left: "670px" }}>
            <Button className="button01_field" style={{ color: "white" }}>
              filter
            </Button>
          </Grid>

          <Grid className="button02" style={{ left: "810px" }}>
            <Button className="button02_field" style={{ color: "white" }}>
              Reset
            </Button>
          </Grid>

          <Grid className="button03" style={{ marginLeft: "150px" }}>
            <Button
              className="button03_field"
              style={{ color: "white" }}
              onClick={ClickAdd}
            >
              Add Now
            </Button>
          </Grid>
        </div>

        <div className="form">
          <Table stickyHeader>
            <TableHead style={{ background: "transparent" }}>
              <TableRow>
                <TableCell style={{ width: "2px" }}>
                  {" "}
                  <Typography variant="body2">S.No</Typography>
                </TableCell>
                <TableCell className="thead">
                  <Typography variant="body2">Emp Name</Typography>
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
                  <Typography variant="body2">Emp #</Typography>
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
                  <Typography variant="body2">Mobile Number</Typography>
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
                      left: "300px",
                      top: "20px",
                    }}
                    className="groupArrow"
                  />
                </TableCell>
                <TableCell className="thead">
                  <Typography variant="body2">Role</Typography>
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
                  <Typography variant="body2">Status</Typography>
                </TableCell>

                <TableCell style={{ textAlign: "center" }} className="thead">
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
    </div>
  );
}

export default ManEmp;
