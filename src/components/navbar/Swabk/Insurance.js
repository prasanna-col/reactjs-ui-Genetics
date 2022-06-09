import React from "react";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";

function Insurance() {
  return (
    <div>
      <Grid
        style={{
          background: "#F4F9FB",
          marginLeft: 60,
          marginTop: 22,
          width: "90%",
          border: "1px solid #dcdcdc",
          borderWidth: 1,
          height: "20%",
          padding: "25px",
          borderRadius: "10px",
        }}
      >
        <Grid style={{ display: "flex" }}>
          <Typography style={{ width: 400, fontWeight: "bold", fontSize: 14 }}>
            Primary Insurance
          </Typography>

          <label style={{ fontSize: 14 }}>Insurance Type</label>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: 30,
            }}
          >
            Commercial
          </Typography>

          <label style={{ fontSize: 14 }}>Policy #</label>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: 30,
            }}
          >
            000423663482
          </Typography>
        </Grid>

        <Divider style={{ marginTop: 20 }} />

        <Grid style={{ display: "flex", marginTop: 20 }}>
          <Grid style={{ display: "flex" }}>
            <Typography
              style={{ width: 400, fontWeight: "bold", fontSize: 14 }}
            >
              Secondary Insurance
            </Typography>

            <label style={{ fontSize: 14, width: 300 }}>Insurance Type</label>

            <Typography
              style={{
                width: 400,
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: -170,
              }}
            >
              Not Applicable
            </Typography>

            <label style={{ fontSize: 14, width: 50 }}>Policy #</label>

            <Typography
              style={{
                width: 400,
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: 30,
              }}
            >
              000423663482
            </Typography>

            <label style={{ fontSize: 14, width: 190 }}>Red Asterisk</label>

            <Typography
              style={{
                width: 400,
                fontWeight: "bold",
                fontSize: 14,
                marginLeft: -80,
              }}
            >
              Loren ipsum
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Insurance;
