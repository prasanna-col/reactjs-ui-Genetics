import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import Ethnicity from "./Ethnicity";
import Insurance from "./Insurance";

function Hereditary() {
  return (
    <div>
      <Paper
        elevation={3}
        style={{ height: 50, marginLeft: 20, marginRight: 20 }}
      >
        <div
          style={{
            marginLeft: "25px",
            position: "relative",
            top: "8px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Hereditary Cancer Requisition
        </div>
      </Paper>
      <Paper elevation={3} style={{ height: 1600, marginTop: -15 }}>
        <div>
          <div className="rectangleBox" style={{ marginTop: 20 }}>
            <div className="Hlabel">
              <label>Preferred Physicain</label>
            </div>
          </div>

          <Grid container spacing={3} style={{ marginLeft: 50, marginTop: 20 }}>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Health System</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                Lorem ipsum
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Practice Name</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                Johnny Depp
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Physician Name</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                Johnny Depp
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>License #</label>
              <Typography style={{ marginLeft: 120, fontWeight: "bold" }}>
                478965463
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>NPI #</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                7546555
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Phone Number</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                +1 789 8512
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Address</label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              >
                Department 98, 44-46, Morningside Road, Edinburgh, Scotland EH10
                .4BF
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>State</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                Cardiff
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Email Address</label>
              <Typography style={{ marginLeft: 90, fontWeight: "bold" }}>
                stevesmith88@gmail.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              ></Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>City</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                Edinburgh
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Fax Number</label>
              <Typography style={{ marginLeft: 110, fontWeight: "bold" }}>
                +1 789 8512
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              ></Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Zip Code</label>
              <Typography style={{ marginLeft: 120, fontWeight: "bold" }}>
                VF 7893
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 80, fontWeight: "bold" }}
              ></Typography>
            </Grid>
          </Grid>
        </div>

        {/* secondary physician */}
        <div>
          <div className="rectangleBox" style={{ marginTop: -300 }}>
            <div className="Hlabel">
              <label>Secondary Physician / Oncologist</label>
            </div>
          </div>

          <Grid container spacing={3} style={{ marginLeft: 50, marginTop: 20 }}>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Health System</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                Lorem ipsum
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Practice Name</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                Johnny Depp
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Physician Name</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                Scarlet Johnson
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>License #</label>
              <Typography style={{ marginLeft: 120, fontWeight: "bold" }}>
                478965463
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>NPI #</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                7546555
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Phone Number</label>
              <Typography style={{ marginLeft: 80, fontWeight: "bold" }}>
                +1 789 8512
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Address</label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              >
                Department 98, 44-46, Morningside Road, Edinburgh, Scotland EH10
                .4BF
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>State</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                Cardiff
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Email Address</label>
              <Typography style={{ marginLeft: 90, fontWeight: "bold" }}>
                stevesmith88@gmail.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              ></Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>City</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                Edinburgh
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Fax Number</label>
              <Typography style={{ marginLeft: 110, fontWeight: "bold" }}>
                +1 789 8512
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              ></Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Zip Code</label>
              <Typography style={{ marginLeft: 120, fontWeight: "bold" }}>
                VF 7893
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 80, fontWeight: "bold" }}
              ></Typography>
            </Grid>
          </Grid>
        </div>

        {/* patient information */}
        <div>
          <div className="rectangleBox" style={{ marginTop: -300 }}>
            <div className="Hlabel">
              <label>Patient Information</label>
            </div>
          </div>

          <Grid container spacing={3} style={{ marginLeft: 50, marginTop: 20 }}>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Last Name</label>
              <Typography style={{ marginLeft: 120, fontWeight: "bold" }}>
                johansson
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>First Name</label>
              <Typography style={{ marginLeft: 120, fontWeight: "bold" }}>
                Scarlett
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>MI</label>
              <Typography style={{ marginLeft: 180, fontWeight: "bold" }}>
                S A
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>DOB</label>
              <Typography style={{ marginLeft: 160, fontWeight: "bold" }}>
                22/01/2001
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Gender</label>
              <Typography style={{ marginLeft: 150, fontWeight: "bold" }}>
                Female
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Phone Number</label>
              <Typography style={{ marginLeft: 90, fontWeight: "bold" }}>
                +1 789 8512
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Patient Address</label>
              <Typography
                style={{ marginLeft: 80, fontWeight: "bold", width: 250 }}
              >
                Department 98, 44-46, Morningside Road, Edinburgh, Scotland EH10
                .4BF
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>City</label>
              <Typography style={{ marginLeft: 180, fontWeight: "bold" }}>
                Fenaro Vello
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Email Address</label>
              <Typography style={{ marginLeft: 100, fontWeight: "bold" }}>
                scarletjohn@gmail.com
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              ></Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Zip Code</label>
              <Typography style={{ marginLeft: 145, fontWeight: "bold" }}>
                VF 7893
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>State</label>
              <Typography style={{ marginLeft: 165, fontWeight: "bold" }}>
                Edinburgh
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={3}
            style={{ marginLeft: 50, marginTop: -340 }}
          >
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 120, fontWeight: "bold", width: 250 }}
              ></Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label>Best Time to Call</label>
              <Typography style={{ marginLeft: 95, fontWeight: "bold" }}>
                Afternoon
              </Typography>
            </Grid>
            <Grid item xs={3} style={{ display: "flex" }}>
              <label></label>
              <Typography
                style={{ marginLeft: 80, fontWeight: "bold" }}
              ></Typography>
            </Grid>
          </Grid>
        </div>

        {/* Ethnicity */}
        <div style={{ marginTop: -340, marginLeft: 70 }}>
          <label>Ethnicity</label>
          <br />
        </div>
        <Ethnicity />
        {/* Insurance */}
        <div style={{ marginTop: 20, marginLeft: 70 }}>
          <label>Insurance Information *</label>
          <br />
        </div>
        <Insurance />
      </Paper>
    </div>
  );
}

export default Hereditary;
