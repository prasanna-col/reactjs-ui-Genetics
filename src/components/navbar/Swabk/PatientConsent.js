/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import signature from "../../img&Logos/sign.png";
import patconsent from "../../../Json/PatientConsent.json";
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
    marginTop: theme.spacing(-30),
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
    marginTop: 22,
    width: "95%",
    border: "1px solid #dcdcdc",
    borderWidth: 1,
    height: "4%",
    padding: "25px",
    borderRadius: "10px",
  },
  imgPaper: {
    padding: theme.spacing(1.2),
    border: "1px solid #D1D1D1",
    borderRadius: 6,
  },
  signature: {
    color: "gray",
    marginTop: -16,
    marginLeft: 16,
  },
  date: {
    padding: theme.spacing(0),
    border: "1px solid #D1D1D1",
  },
  dateText: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "gray",
    borderRadius: 6,
  },
}));

function PatientConsent() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.headPaper}>
          <Typography variant="h5" className={classes.cardTitle}>
            Patient Consent and Patient Agreement Form
          </Typography>
        </Paper>

        {/* DNA Cancer test*/}
        <Grid item xs={12}>
          <Paper className={classes.bodayPaper}>
            <Grid className={classes.aceBanner}>
              <Grid>
                <Typography
                  variant="body2"
                  style={{
                    width: "80%",
                    fontWeight: "bold",
                    lineHeight: 2,
                  }}
                >
                  DNA cancer test(s) are designed to improve the health outcomes
                  for patients by providing additional information to help guide
                  ongoing medical treatment for Medicare patients with a cancer
                  history. The test identifies inherited gene mutations that
                  reflect a genetic susceptibility to certain type of cancer.
                  The result from this test will allow a comprehensive forecast
                  of the Cancer risk(s) to the patient and future lineage. What
                  next?
                </Typography>
              </Grid>
            </Grid>

            <div style={{ marginTop: 40 }}>
              {patconsent.map(
                (item, i) =>
                  i < 5 && (
                    <Grid key={i} style={{ marginTop: 10 }}>
                      <ul className="ulist">
                        <li className="llist" style={{ width: "95%" }}>
                          {" "}
                          <b>{item.title} - </b>{" "}
                          <label style={{ color: "gray" }}>
                            {item.description}
                          </label>
                        </li>
                      </ul>
                      {item.id === 6 ? null : (
                        <Divider style={{ marginLeft: 30 }} />
                      )}
                    </Grid>
                  )
              )}
            </div>

            <Grid className={classes.aceBanner}>
              <Grid>
                <Typography
                  style={{
                    width: "80%",
                    fontWeight: "bold",
                    fontSize: 16,
                    lineHeight: 2,
                    marginLeft: 28,
                  }}
                >
                  There are several types of genetic test results including:
                </Typography>
              </Grid>
              <Grid>
                <div>
                  {patconsent.map(
                    (item, i) =>
                      i > 5 && (
                        <Grid key={i} style={{ marginTop: 10 }}>
                          <ul className="ulist">
                            <li className="llist" style={{ width: "95%" }}>
                              {" "}
                              <b>{item.title} - </b>{" "}
                              <label style={{ color: "gray" }}>
                                {item.description}
                              </label>
                            </li>
                          </ul>
                          {item.id === 6 ? null : (
                            <Divider style={{ marginLeft: 30 }} />
                          )}
                        </Grid>
                      )
                  )}
                </div>
              </Grid>
            </Grid>

            <div style={{ marginTop: 40 }}>
              {patconsent.map(
                (item, i) =>
                  i > 5 && (
                    <Grid key={i} style={{ marginTop: 10 }}>
                      <ul className="ulist">
                        <li className="llist" style={{ width: "95%" }}>
                          {" "}
                          <b>
                            {item.id === 9 ? item.title : null}{" "}
                            {item.id === 9 ? "-" : null}
                          </b>{" "}
                          <label style={{ color: "gray" }}>
                            {item.description}
                          </label>
                        </li>
                      </ul>
                      {item.id === 6 ? null : (
                        <Divider style={{ marginLeft: 30 }} />
                      )}
                    </Grid>
                  )
              )}
            </div>

            <div style={{ marginTop: 30 }}>
              <Grid style={{ marginTop: 10 }}>
                <ul className="inormalList" style={{ listStyle: "none" }}>
                  <li className="normalList" style={{ width: "94%" }}>
                    {" "}
                    <label style={{ color: "gray" }}>
                      By signing my name, I hereby authorize to perform the
                      indicated genetic tests on my sample of DNA. I acknowledge
                      that I have read the “Informed Consent for Hereditary
                      Cancer Testing” and I understand the benefits and
                      limitations of this type of testing. Signing this form
                      authorizes a below performance location to perform
                      specimen testing, release test result to the ordering
                      provider and bill my insurance provider directly for
                      payment. I furthure authorize the performance location and
                      my provider to release to my insurance company any medical
                      information necessary to process this claim.
                    </label>
                  </li>
                </ul>
              </Grid>
            </div>

            <Grid
              container
              spacing={3}
              style={{ marginLeft: 30, marginTop: 30 }}
            >
              <Grid item xs={8} sm={2}>
                <Paper elevation={0} className={classes.imgPaper}>
                  <img src={signature} width={200} height={80} />
                  <Typography variant="body1" className={classes.signature}>
                    Patient Signature
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={8} sm={2}>
                <Paper elevation={0} className={classes.date}>
                  <Typography
                    variant="subtitle1"
                    className={classes.dateText}
                    style={{ color: "#000" }}
                  >
                    20/10/2020
                  </Typography>
                  <Typography className={classes.dateText}>Date</Typography>
                </Paper>
              </Grid>
            </Grid>
            {/* Agent Information */}

            <Grid item xs={12} className={classes.bannerTop}>
              <Typography variant="h6" className={classes.cardTitle}>
                Agent Information
              </Typography>
            </Grid>

            <div className={classes.bannerButtom}>
              <Grid container spacing={2}>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Agent Name</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {patient.firstName} {patient.lastName}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Agent #</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {physicain.npi}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Agent Email</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {physicain.email}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Agent Phone</Typography>
                  <Typography variant="body2" style={{ marginLeft: 80 }}>
                    {physicain.phone}
                  </Typography>
                </Grid>
                <Grid container item xs={6} sm={4}>
                  <Typography variant="body1">Submitted by</Typography>
                  <Typography variant="body2" style={{ marginLeft: 50 }}>
                    Contractor
                  </Typography>
                </Grid>
              </Grid>
            </div>

            <Grid
              item
              xs={12}
              className={classes.bannerTop}
              style={{ marginTop: 10 }}
            >
              <Typography variant="h6" className={classes.cardTitle}>
                Swab KIT Shipment Information
              </Typography>
            </Grid>

            <Grid style={{ display: "flex", marginTop: 20, marginLeft: 50 }}>
              <Typography variant="body1" style={{ width: 400 }}>
                Where would you like the Test Kit to be shipped?
              </Typography>

              <Typography
                variant="body2"
                style={{
                  width: 400,
                  marginLeft: -60,
                }}
              >
                Home
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default PatientConsent;
