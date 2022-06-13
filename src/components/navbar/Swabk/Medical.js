import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import FamilyTable from "./FamilyTable";
import patient from "../../../Json/Patient.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
            Family Medical History Form
          </Typography>
        </Paper>

        {/* family medical */}
        <Grid item xs={12}>
          <Paper className={classes.bodayPaper}>
            <Grid item xs={12} className={classes.bannerTop}>
              <Typography variant="h6" className={classes.cardTitle}>
                Patient Basic Detail
              </Typography>
            </Grid>

            <div className={classes.bannerButtom}>
              <Grid container spacing={2}>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Last Name</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {patient.lastName}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">First Name</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {patient.firstName}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">DOB</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {patient.dob}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Gender</Typography>
                  <Typography variant="body2" style={{ marginLeft: 100 }}>
                    {patient.gender}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Phone Number</Typography>
                  <Typography variant="body2" style={{ marginLeft: 50 }}>
                    {patient.phone}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Email</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {patient.email}
                  </Typography>
                </Grid>

                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Status</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid className={classes.aceBanner}>
                    <Grid style={{ display: "flex" }}>
                      <Typography variant="body2" style={{ width: 400 }}>
                        Dr. Approval Pending
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Doctor Approved
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Test Accpeted
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Test on Hold
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Test Shipped to Lab
                      </Typography>
                    </Grid>

                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <Typography style={{ width: 400, fontSize: 14 }}>
                        20/02/2020
                      </Typography>

                      <Typography style={{ width: 400, fontSize: 14 }}>
                        20/02/2020
                      </Typography>
                      <Typography style={{ width: 400, fontSize: 14 }}>
                        20/02/2020
                      </Typography>

                      <Typography style={{ width: 400, fontSize: 14 }}>
                        20/02/2020
                      </Typography>
                      <Typography style={{ width: 400, fontSize: 14 }}>
                        20/02/2020
                      </Typography>
                    </Grid>
                    <Divider style={{ marginTop: 20, marginBottom: 20 }} />

                    <Grid style={{ display: "flex" }}>
                      <Typography variant="body2" style={{ width: 400 }}>
                        Test Received by Lab
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Test Inprocess at Lab
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Test Resulted
                      </Typography>

                      <Typography variant="body2" style={{ width: 400 }}>
                        Paid
                      </Typography>
                      <Typography
                        variant="body2"
                        style={{ width: 400 }}
                      ></Typography>
                    </Grid>

                    <Grid style={{ display: "flex", marginTop: 20 }}>
                      <Typography style={{ width: 400, fontSize: 14 }}>
                        25/02/2020
                      </Typography>

                      <Typography style={{ width: 400, fontSize: 14 }}>
                        26/02/2020
                      </Typography>

                      <Typography style={{ width: 400, fontSize: 14 }}>
                        27/02/2020
                      </Typography>

                      <Typography style={{ width: 400, fontSize: 14 }}>
                        28/02/2020
                      </Typography>
                      <Typography
                        style={{ width: 400, fontSize: 14 }}
                      ></Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={11}>
                  <Divider
                    style={{
                      marginLeft: 30,
                    }}
                  />
                </Grid>
                <Grid
                  style={{ display: "flex", marginTop: 20, marginLeft: 60 }}
                >
                  <Typography style={{ width: 400, fontSize: 14 }}>
                    Have you ever been diagnosed with cancer
                  </Typography>

                  <Typography
                    variant="body2"
                    style={{
                      width: 400,
                      fontWeight: "bold",
                      fontSize: 14,
                      marginLeft: -80,
                    }}
                  >
                    36
                  </Typography>

                  <Typography
                    style={{ width: 400, fontSize: 14, marginLeft: -300 }}
                  >
                    Do you have any Ashkenazi jewish Ancestry
                  </Typography>

                  <Typography
                    variant="body2"
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

                <Grid
                  style={{ display: "flex", marginTop: 20, marginLeft: 60 }}
                >
                  <Typography style={{ width: 400, fontSize: 14 }}>
                    Do you have a personal history of Colan Polyps
                  </Typography>

                  <Typography
                    variant="body2"
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

                <Grid
                  item
                  xs={12}
                  style={{ display: "flex", marginTop: 20, marginLeft: 50 }}
                >
                  <Typography
                    style={{ width: 400, fontSize: 14, lineHeight: 2 }}
                  >
                    Have you ever been tested for a DNA cancer
                    <br />
                    screening in your lifetime?
                  </Typography>

                  <Typography
                    variant="body2"
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
                <Grid item xs={12} className={classes.bannerTop}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Your Family Detail
                  </Typography>
                </Grid>

                <FamilyTable />
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Medical;
