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
  TextField,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@material-ui/core";
import "../../App.css";

function PhyDetails({ addPhy, setDetail }) {
  return (
    <div className="AddContractor">
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
            <div
              style={{ marginLeft: "25px", position: "relative", top: "-7px" }}
            >
              Doctor Detail
            </div>
          </h2>
        </div>

        <div className="rectangleBox">
          <div className="Hlabel">
            <label>Basic Information</label>
          </div>
        </div>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <div
              className="right_sideform"
              style={{ position: "absolute", left: "40px", top: "1px" }}
            >
              <Grid container spacing={3}>
                <div
                  className="name"
                  style={{ position: "relative", left: "40px", top: "140px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Health System</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      Lorem Ipsum
                    </Typography>
                  </div>
                </div>

                <div
                  className="con_id"
                  style={{ position: "absolute", left: "40px", top: "220px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "110px",
                      top: "20px",
                    }}
                  >
                    <label>NPI #</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "175px" }}>
                    <Typography style={{ fontWeight: "bold", width: 200 }}>
                      NPI 14598
                    </Typography>
                  </div>
                </div>

                <div
                  className="street_add"
                  style={{ position: "absolute", left: "40px", top: "300px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "122px",
                      top: "20px",
                    }}
                  >
                    <label>Street Address</label>
                  </div>
                  <div style={{ marginTop: "25px", marginLeft: "180px" }}>
                    <Typography
                      style={{
                        width: "218px",
                        lineHeight: 2,
                        fontWeight: "bold",
                      }}
                    >
                      Department 98, 44-46, Morningside Road, Edinburgh,
                      Scotland EH104BF.
                    </Typography>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div
              className="right_sideform"
              style={{ position: "absolute", left: "640px", top: "1px" }}
            >
              <Grid container spacing={3}>
                <div
                  className="name"
                  style={{ position: "relative", left: "40px", top: "140px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Physician Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      Scarlett Johnsson
                    </Typography>
                  </div>
                </div>

                <div
                  className="email_address"
                  style={{ position: "absolute", left: "30px", top: "220px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>License #</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "170px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      42623218333588
                    </Typography>
                  </div>
                </div>

                <div
                  className="Phone_num"
                  style={{ position: "absolute", left: "40px", top: "300px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>City</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "160px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      New York
                    </Typography>
                  </div>
                </div>

                <div
                  className="user_name"
                  style={{ position: "absolute", left: "40px", top: "378px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>State</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "160px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      California
                    </Typography>
                  </div>
                </div>

                <div
                  className="State"
                  style={{ position: "absolute", left: "40px", top: "450px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Zip Code</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "160px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      CDF 78963
                    </Typography>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={3}>
            <div
              className="right_sideform"
              style={{ position: "absolute", left: "640px", top: "1px" }}
            >
              <Grid container spacing={3}>
                <div
                  className="name"
                  style={{ position: "relative", left: "600px", top: "140px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Group Practice Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      The Pill Club
                    </Typography>
                  </div>
                </div>

                <div
                  className="email_address"
                  style={{ position: "absolute", left: "600px", top: "220px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Email Address</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      scarlettjohansson77@gmail.com
                    </Typography>
                  </div>
                </div>

                <div
                  className="Phone_num"
                  style={{ position: "absolute", left: "600px", top: "300px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Phone Number</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      +60 47896 42563
                    </Typography>
                  </div>
                </div>

                <div
                  className="user_name"
                  style={{ position: "absolute", left: "600px", top: "378px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Fax Number</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      +60 47896 42563
                    </Typography>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>
    
        <Grid
          className="add_buttons"
          style={{ position: "absolute", top: "606px", left: "-584px" }}
        >
          <Grid
            className="button01"
            style={{ marginLeft: "90px", background: "#7F8C8D" }}
          >
            <Button
              className="button01_field"
              style={{ color: "white" }}
              onClick={() => setDetail(false)}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PhyDetails;
