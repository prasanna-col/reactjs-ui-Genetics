import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

function Ethnicity() {
  return (
    <div>
      <Grid
        style={{
          background: "#F4F9FB",
          marginLeft: 8,
          marginTop: 22,
          width: "112%",
          border: "1px solid #dcdcdc",
          borderWidth: 1,
          height: "20%",
          padding: "25px",
          borderRadius: "10px",
        }}
      >
        <Grid style={{ display: "flex" }}>
          <Typography style={{ width: 400, fontWeight: "bold", fontSize: 14 }}>
            Hispanic/ Latin American
          </Typography>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -130,
            }}
          >
            African - American
          </Typography>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -130,
            }}
          >
            Middle Eastern
          </Typography>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -130,
            }}
          >
            Caucasian
          </Typography>

          <Typography
            style={{
              width: 400,
              fontWeight: "bold",
              fontSize: 14,
              marginLeft: -130,
            }}
          >
            Native American
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Ethnicity;
