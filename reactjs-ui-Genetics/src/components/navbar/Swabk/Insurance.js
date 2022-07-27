import React from "react";
import { Divider, Grid, Paper, Typography } from "@material-ui/core";

function Insurance() {
  return (
    <div>
      <Grid
        style={{
          background: "#F4F9FB",
          marginLeft: 8,
          marginTop: 2,
          width: "87%",
          border: "1px solid #dcdcdc",
          borderWidth: 1,
          height: "auto",
          padding: "25px",
          borderRadius: "10px",
        }}
      >
        <Grid style={{ display: "flex" }}>
          <Typography variant="body2" style={{ fontSize: 14, width: 400 }}>
            Primary Insurance
          </Typography>

          <Typography variant="subtitle1">Insurance Type</Typography>

          <Typography
            variant="body2"
            style={{
              width: 400,
              marginLeft: 30,
            }}
          >
            Commercial
          </Typography>
          <Typography variant="subtitle1">Policy #</Typography>

          <Typography
            variant="body2"
            style={{
              width: 400,
              marginLeft: 30,
            }}
          >
            000423663482
          </Typography>
        </Grid>

        <Divider style={{ marginTop: 20 }} />

        <Grid style={{ display: "flex", marginTop: 20 }}>
          <Grid style={{ display: "flex" }}>
            <Typography Typography="body2" style={{ width: 400 }}>
              Secondary Insurance
            </Typography>

            <Typography variant="subtitle1" style={{ width: 300 }}>
              Insurance Type
            </Typography>

            <Typography
              variant="body2"
              style={{
                width: 400,
                marginLeft: -180,
              }}
            >
              Not Applicable
            </Typography>

            <Typography variant="subtitle1" style={{ width: 60 }}>
              Policy #
            </Typography>

            <Typography
              variant="body2"
              style={{
                width: 400,
                marginLeft: 30,
              }}
            >
              000423663482
            </Typography>

            <Typography variant="subtitle1" style={{ width: 190 }}>
              Red Asterisk
            </Typography>

            <Typography
              variant="body2"
              style={{
                width: 400,
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
