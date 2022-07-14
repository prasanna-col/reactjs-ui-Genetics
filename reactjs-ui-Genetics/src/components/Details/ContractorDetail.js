import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import "../../App.css";
import { useHistory, useLocation } from "react-router-dom";

function ContractorDetail() {
  const history = useHistory();
  const location = useLocation();
  const data = location.state.state;
  console.log(data);
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
              Contractor Detail
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
                    <label>Full Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {data?.fullName}
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
                    <label>Email Address</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "175px" }}>
                    <Typography style={{ fontWeight: "bold", width: 200 }}>
                      {data?.email_address}
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
                  <div style={{ marginTop: "18px", marginLeft: "180px" }}>
                    <Typography
                      style={{
                        width: "218px",
                        lineHeight: 2,
                        fontWeight: "bold",
                      }}
                    >
                      {data?.street_address}
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
                    <label>Pharmacy Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "180px" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {data?.pharmacy_name}
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
                    <label>Phone Number</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "170px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      {data?.phone}
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
                      {data?.city}
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
                      {data?.state}
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
                      {data?.zip_code}
                    </Typography>
                  </div>
                </div>

                <div
                  className="State"
                  style={{ position: "absolute", left: "40px", top: "530px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Partner Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "160px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                      {data?.partner_name}
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
                    <label>Contractor ID</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ fontWeight: "bold" }}>
                      {data?.contractor_id}
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
                    <label>User Name</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                    {data?.username}
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
                    <label>State</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                    {data?.state}
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
                    <label>NCPA Member ? </label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                    {data?.ncpa}
                    </Typography>
                  </div>
                </div>

                <div
                  className="user_name"
                  style={{ position: "absolute", left: "600px", top: "450px" }}
                >
                  <div
                    className="label"
                    style={{ position: "absolute", top: "20px" }}
                  >
                    <label>Partner ID</label>
                  </div>
                  <div style={{ marginTop: "22px", marginLeft: "220px" }}>
                    <Typography style={{ width: 400, fontWeight: "bold" }}>
                    {data?.partner_id}
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
              onClick={() => history.goBack()}
            >
              Back
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default ContractorDetail;
