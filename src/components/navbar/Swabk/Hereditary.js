import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import Ethnicity from "./Ethnicity";
import Insurance from "./Insurance";
import PhotoID from "./PhotoID";
import patient from "../../../Json/Patient.json";
import physicain from "../../../Json/Physicain.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
  },
  headPaper: {
    padding: theme.spacing(1.5),
    color: theme.palette.text.secondary,
  },
  bodayPaper: {
    padding: theme.spacing(1.5),
    marginTop: theme.spacing(0.5),
    height: theme.spacing("auto"),
  },
  cardTitle: {
    color: "#000",
    marginLeft: theme.spacing(1),
  },
  bannerTop: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1.5),
    backgroundColor: "#F4F9FB",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  bannerButtom: {
    padding: theme.spacing(1.5),
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  aceBanner: {
    background: "#F4F9FB",
    marginLeft: 20,
    width: "90%",
    border: "1px solid #dcdcdc",
    borderWidth: 1,
    height: "auto",
    padding: "20px",
    borderRadius: "10px",
  },
}));

function Medical() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.headPaper}>
          <Typography variant="h5" className={classes.cardTitle}>
            Hereditary Cancer Requisition
          </Typography>
        </Paper>

        {/* preferred physicain */}
        <Grid item xs={12}>
          <Paper className={classes.bodayPaper}>
            <Grid item xs={12} className={classes.bannerTop}>
              <Typography variant="h6" className={classes.cardTitle}>
                Preferred Physicain
              </Typography>
            </Grid>

            <div className={classes.bannerButtom}>
              <Grid container spacing={2}>
                <Grid container item xs={6} sm={4}>
                  <Typography>Health System</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.health_system}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Practice Name</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.practice_name}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Physicain Name</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.phyician_name}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>License #</Typography>
                  <Typography style={{ marginLeft: 110 }}>
                    {physicain.license}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>NPI #</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {physicain.npi}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Phone Number</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.phone}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>Address</Typography>
                  <Typography style={{ marginLeft: 120, width: 250 }}>
                    {physicain.Address}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>State</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {physicain.State}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>Email Address</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.email}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography></Typography>
                  <Typography
                    style={{ marginLeft: 120, width: 250 }}
                  ></Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography>City</Typography>
                  <Typography style={{ marginLeft: 160, width: 250 }}>
                    {physicain.city}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography>Fax Number</Typography>
                  <Typography style={{ marginLeft: 160, width: 250 }}>
                    {physicain.fax_number}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {/* secondary physicain */}
            <Grid item xs={12} className={classes.bannerTop}>
              <Typography variant="h6" className={classes.cardTitle}>
                Secondary Physician / Oncologist
              </Typography>
            </Grid>

            <div className={classes.bannerButtom}>
              <Grid container spacing={2}>
                <Grid container item xs={6} sm={4}>
                  <Typography>Health System</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.health_system}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Practice Name</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.practice_name}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Physicain Name</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.phyician_name}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>License #</Typography>
                  <Typography style={{ marginLeft: 110 }}>
                    {physicain.license}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>NPI #</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {physicain.npi}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Phone Number</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.phone}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>Address</Typography>
                  <Typography style={{ marginLeft: 120, width: 250 }}>
                    {physicain.Address}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>State</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {physicain.State}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>Email Address</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.email}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography></Typography>
                  <Typography
                    style={{ marginLeft: 120, width: 250 }}
                  ></Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography>City</Typography>
                  <Typography style={{ marginLeft: 160, width: 250 }}>
                    {physicain.city}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography>Fax Number</Typography>
                  <Typography style={{ marginLeft: 160, width: 250 }}>
                    {physicain.fax_number}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {/* patient information */}
            <Grid item xs={12} className={classes.bannerTop}>
              <Typography variant="h6" className={classes.cardTitle}>
                Patient Information
              </Typography>
            </Grid>

            <div className={classes.bannerButtom}>
              <Grid container spacing={2}>
                <Grid container item xs={6} sm={4}>
                  <Typography>Last Name</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {patient.lastName}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>First Name</Typography>
                  <Typography style={{ marginLeft: 120 }}>
                    {patient.firstName}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Mi</Typography>
                  <Typography style={{ marginLeft: 180 }}>
                    {physicain.mi}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>DOB</Typography>
                  <Typography style={{ marginLeft: 190 }}>
                    {patient.dob}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Gender</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {patient.gender}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography>Phone Number</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.phone}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>Patient Address</Typography>
                  <Typography style={{ marginLeft: 110, width: 250 }}>
                    {physicain.Address}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>City</Typography>
                  <Typography style={{ marginLeft: 150 }}>
                    {physicain.city}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography>Email Address</Typography>
                  <Typography style={{ marginLeft: 80 }}>
                    {physicain.email}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography></Typography>
                  <Typography
                    style={{ marginLeft: 120, width: 250 }}
                  ></Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography>Zip Code</Typography>
                  <Typography style={{ marginLeft: 120, width: 250 }}>
                    {physicain.zip_code}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography>State</Typography>
                  <Typography style={{ marginLeft: 160, width: 250 }}>
                    {physicain.State}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography></Typography>
                  <Typography
                    style={{ marginLeft: 120, width: 250 }}
                  ></Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -10 }}>
                  <Typography>Best Time to Call</Typography>
                  <Typography style={{ marginLeft: 60, width: 250 }}>
                    {physicain.best_time}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: -40 }}>
                  <Typography></Typography>
                  <Typography
                    style={{ marginLeft: 160, width: 250 }}
                  ></Typography>
                </Grid>

                <Grid container item xs={6} sm={4} style={{ marginTop: 0 }}>
                  <Typography>Ethnicity</Typography>
                </Grid>
                <Ethnicity />

                <Grid container item xs={6} sm={4} style={{ marginTop: 10 }}>
                  <Typography>Insurance Information</Typography>
                </Grid>

                <Insurance />

                <Grid item xs={12} className={classes.bannerTop}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Insurance Card and Photo ID Image
                  </Typography>
                </Grid>

                <PhotoID />
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Medical;
