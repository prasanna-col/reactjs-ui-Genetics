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
  Divider,
} from "@material-ui/core";
import "../../App.css";
import FamilyTable from "./Swabk/FamilyTable";
import Hereditary from "./Swabk/Hereditary";
import patient from "../../Json/Patient.json";
import PatientConsent from "./Swabk/PatientConsent";

function Swabk() {
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
              Family Medical History Form
            </div>
          </h2>
        </div>

        <div className="rectangleBox">
          <div className="Hlabel">
            <label>Patient Basic Detail</label>
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
                    <label>Last Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 14 }}>
                      {patient.lastName}
                    </Typography>
                  </div>
                </div>

                <div
                  className="con_id"
                  style={{ position: "absolute", left: "30px", top: "200px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "110px",
                      top: "20px",
                    }}
                  >
                    <label>Gender</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "175px" }}>
                    <Typography
                      style={{ fontWeight: "bold", width: 200, fontSize: 14 }}
                    >
                      {patient.gender}
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
                    <label>First Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 14 }}>
                      {patient.firstName}
                    </Typography>
                  </div>
                </div>

                <div
                  className="email_address"
                  style={{ position: "absolute", left: "30px", top: "200px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Phone Number</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography
                      style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
                    >
                      {patient.phone}
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
                    <label>DOB</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ fontWeight: "bold", fontSize: 14 }}>
                      {patient.dob}
                    </Typography>
                  </div>
                </div>

                <div
                  className="email_address"
                  style={{ position: "absolute", left: "590px", top: "200px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Email Address</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography
                      style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
                    >
                      {patient.email}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <div style={{ marginTop: -160, marginLeft: 70 }}>
          <label>Status</label>
          <br />
        </div>

        <Grid
          style={{
            background: "#F4F9FB",
            marginLeft: 60,
            marginTop: 22,
            width: "90%",
            border: "1px solid #dcdcdc",
            borderWidth: 1,
            height: "20%",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <Grid style={{ display: "flex" }}>
            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Dr. Approval Pending
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Doctor Approved
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Test Accpeted
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Test on Hold
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Test Shipped to Lab
            </Typography>
          </Grid>

          <Grid style={{ display: "flex", marginTop: 20 }}>
            <label style={{ width: 400, fontSize: 14 }}>20/02/2020</label>

            <label style={{ width: 400, fontSize: 14 }}>20/02/2020</label>

            <label style={{ width: 400, fontSize: 14 }}>20/02/2020</label>

            <label style={{ width: 400, fontSize: 14 }}>20/02/2020</label>
            <label style={{ width: 400, fontSize: 14 }}>20/02/2020</label>
          </Grid>
          <Divider style={{ marginTop: 20, marginBottom: 20 }} />

          <Grid style={{ display: "flex" }}>
            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Test Received by Lab
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Test Inprocess at Lab
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Test Resulted
            </Typography>

            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Paid
            </Typography>
            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            ></Typography>
          </Grid>

          <Grid style={{ display: "flex", marginTop: 20 }}>
            <label style={{ width: 400, fontSize: 14 }}>25/02/2020</label>

            <label style={{ width: 400, fontSize: 14 }}>26/02/2020</label>

            <label style={{ width: 400, fontSize: 14 }}>27/02/2020</label>

            <label style={{ width: 400, fontSize: 14 }}>28/02/2020</label>
            <label style={{ width: 400, fontSize: 14 }}></label>
          </Grid>
        </Grid>
        <Divider
          style={{
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 60,
            marginRight: 80,
          }}
        />

        <Grid style={{ display: "flex", marginTop: 20, marginLeft: 60 }}>
          <label style={{ width: 400, fontSize: 14 }}>
            Have you ever been diagnosed with cancer
          </label>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -80,
            }}
          >
            36
          </Typography>

          <label style={{ width: 400, fontSize: 14, marginLeft: -300 }}>
            Do you have any Ashkenazi jewish Ancestry
          </label>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -60,
            }}
          >
            No
          </Typography>
        </Grid>

        <Grid style={{ display: "flex", marginTop: 20, marginLeft: 60 }}>
          <label style={{ width: 400, fontSize: 14 }}>
            Do you have a personal history of Colan Polyps
          </label>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -80,
            }}
          >
            10, 24/10/2020
          </Typography>
        </Grid>

        <Grid style={{ display: "flex", marginTop: 20, marginLeft: 60 }}>
          <label style={{ width: 400, fontSize: 14, lineHeight: 2 }}>
            Have you ever been tested for a DNA cancer
            <br />
            screening in your lifetime?
          </label>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -80,
            }}
          >
            28
          </Typography>
        </Grid>

        <div className="rectangleBox" style={{ marginTop: 20 }}>
          <div className="Hlabel">
            <label>Your Family Detail</label>
          </div>
        </div>

        <FamilyTable />
        <Hereditary />

        <PatientConsent />
      </div>
    </div>
  );
}

export default Swabk;
