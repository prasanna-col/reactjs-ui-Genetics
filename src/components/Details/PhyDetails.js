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

function PhyDetails({ addPhy, setAddPhy }) {
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
                  <div style={{ marginTop: "25px", marginLeft: "180px" }}>
                    <Typography>Lorem Ipsum</Typography>
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
                  <div style={{ marginTop: "25px", marginLeft: "180px" }}>
                    <Typography>NPI 14598</Typography>
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
                    <Typography style={{ width: "218px", lineHeight: 2 }}>
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
                    <label>Health System</label>
                  </div>
                  <div style={{ marginTop: "25px", marginLeft: "180px" }}>
                    <Typography>Lorem Ipsum</Typography>
                  </div>
                </div>

                <div
                  className="email_address"
                  style={{ position: "absolute", left: "40px", top: "220px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "118px",
                      top: "20px",
                    }}
                  >
                    <label>Email Address</label>
                  </div>
                  <div className="namee" style={{ top: "5px", left: "180px" }}>
                    <InputBase className="namefield" style={{ left: "30px" }} />
                  </div>
                </div>

                <div
                  className="Phone_num"
                  style={{ position: "absolute", left: "40px", top: "300px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "126px",
                      top: "20px",
                    }}
                  >
                    <label>Phone Number</label>
                  </div>
                  <div className="namee" style={{ top: "5px", left: "180px" }}>
                    <InputBase className="namefield" style={{ left: "30px" }} />
                  </div>
                </div>

                <div
                  className="user_name"
                  style={{ position: "absolute", left: "40px", top: "378px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "122px",
                      top: "20px",
                    }}
                  >
                    <label>User Name</label>
                  </div>
                  <div className="namee" style={{ top: "5px", left: "180px" }}>
                    <InputBase className="namefield" style={{ left: "30px" }} />
                  </div>
                </div>

                <div
                  className="State"
                  style={{ position: "absolute", left: "40px", top: "450px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "110px",
                      top: "20px",
                    }}
                  >
                    <label>State</label>
                  </div>
                  <div
                    className="select"
                    style={{ left: "180px", top: "10px" }}
                  >
                    <select
                      placeholder="ID"
                      style={{ left: "30px", fontWeight: "800" }}
                      className="select_ins"
                    >
                      <option placeholder="ID">California</option>
                      <option value="001">Cuba</option>
                      <option value="002">Los Angels</option>
                      <option value="003">Mexico</option>
                    </select>
                  </div>
                </div>

                <div
                  className="NCPA_member"
                  style={{ position: "absolute", left: "40px", top: "530px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "130px",
                      top: "20px",
                    }}
                  >
                    <label>NCPA Member?</label>
                  </div>
                  <div className="radio">
                    <FormControl>
                      <RadioGroup defaultValue="yes">
                        <div className="radio_butt">
                          <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                          />
                          <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                          />
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>

                <div
                  className="part_id"
                  style={{ position: "absolute", left: "40px", top: "600px" }}
                >
                  <div
                    className="label"
                    style={{
                      position: "absolute",
                      width: "116px",
                      top: "20px",
                    }}
                  >
                    <label>Partner Id</label>
                  </div>
                  <div className="namee" style={{ top: "5px", left: "180px" }}>
                    <InputBase className="namefield" style={{ left: "30px" }} />
                  </div>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item xs={3}>
            <p>xs=3</p>
          </Grid>
          <Grid item xs={3}>
            <p>xs=3</p>
          </Grid>
        </Grid>
        {/* <div
          className="right_sideform"
          style={{ position: "absolute", left: "1200px", top: "1px" }}
        >
          <Grid container spacing={3}>
            <div
              className="phar_name"
              style={{ position: "absolute", left: "40px", top: "140px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "135px", top: "20px" }}
              >
                <label>Pharmacy Name</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="email_address"
              style={{ position: "absolute", left: "40px", top: "220px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "118px", top: "20px" }}
              >
                <label>Email Address</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="Phone_num"
              style={{ position: "absolute", left: "40px", top: "300px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "126px", top: "20px" }}
              >
                <label>Phone Number</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="user_name"
              style={{ position: "absolute", left: "40px", top: "378px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "122px", top: "20px" }}
              >
                <label>User Name</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="State"
              style={{ position: "absolute", left: "40px", top: "450px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "110px", top: "20px" }}
              >
                <label>State</label>
              </div>
              <div className="select" style={{ left: "180px", top: "10px" }}>
                <select
                  placeholder="ID"
                  style={{ left: "30px", fontWeight: "800" }}
                  className="select_ins"
                >
                  <option placeholder="ID">California</option>
                  <option value="001">Cuba</option>
                  <option value="002">Los Angels</option>
                  <option value="003">Mexico</option>
                </select>
              </div>
            </div>

            <div
              className="NCPA_member"
              style={{ position: "absolute", left: "40px", top: "530px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "130px", top: "20px" }}
              >
                <label>NCPA Member?</label>
              </div>
              <div className="radio">
                <FormControl>
                  <RadioGroup defaultValue="yes">
                    <div className="radio_butt">
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div
              className="part_id"
              style={{ position: "absolute", left: "40px", top: "600px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "116px", top: "20px" }}
              >
                <label>Partner Id</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>
          </Grid>
        </div> */}
        {/* <div
          className="right_sideform"
          style={{ position: "absolute", left: "1200px", top: "1px" }}
        >
          <Grid container spacing={3}>
            <div
              className="phar_name"
              style={{ position: "absolute", left: "40px", top: "140px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "135px", top: "20px" }}
              >
                <label>Pharmacy Name</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="email_address"
              style={{ position: "absolute", left: "40px", top: "220px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "118px", top: "20px" }}
              >
                <label>Email Address</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="Phone_num"
              style={{ position: "absolute", left: "40px", top: "300px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "126px", top: "20px" }}
              >
                <label>Phone Number</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="user_name"
              style={{ position: "absolute", left: "40px", top: "378px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "122px", top: "20px" }}
              >
                <label>User Name</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>

            <div
              className="State"
              style={{ position: "absolute", left: "40px", top: "450px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "110px", top: "20px" }}
              >
                <label>State</label>
              </div>
              <div className="select" style={{ left: "180px", top: "10px" }}>
                <select
                  placeholder="ID"
                  style={{ left: "30px", fontWeight: "800" }}
                  className="select_ins"
                >
                  <option placeholder="ID">California</option>
                  <option value="001">Cuba</option>
                  <option value="002">Los Angels</option>
                  <option value="003">Mexico</option>
                </select>
              </div>
            </div>

            <div
              className="NCPA_member"
              style={{ position: "absolute", left: "40px", top: "530px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "130px", top: "20px" }}
              >
                <label>NCPA Member?</label>
              </div>
              <div className="radio">
                <FormControl>
                  <RadioGroup defaultValue="yes">
                    <div className="radio_butt">
                      <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="No"
                        control={<Radio />}
                        label="No"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>

            <div
              className="part_id"
              style={{ position: "absolute", left: "40px", top: "600px" }}
            >
              <div
                className="label"
                style={{ position: "absolute", width: "116px", top: "20px" }}
              >
                <label>Partner Id</label>
              </div>
              <div className="namee" style={{ top: "5px", left: "180px" }}>
                <InputBase className="namefield" style={{ left: "30px" }} />
              </div>
            </div>
          </Grid>
        </div> */}

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
              onClick={() => setAddPhy(false)}
            >
              Cancel
            </Button>
          </Grid>

          <Grid
            className="button02"
            style={{ marginLeft: "110px", background: "#207EA9" }}
          >
            <Button
              className="button02_field"
              style={{ color: "white" }}
              onClick={() => setAddPhy(false)}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PhyDetails;
