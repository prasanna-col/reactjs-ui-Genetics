import React from "react";
import { Grid, Typography } from "@material-ui/core";

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
          <Typography style={{ width: 400 }} variant="body2">
            Hispanic/ Latin American
          </Typography>

          <Typography
            variant="body2"
            style={{
              width: 400,
              marginLeft: -130,
            }}
          >
            African - American
          </Typography>

          <Typography
            variant="body2"
            style={{
              width: 400,
              marginLeft: -130,
            }}
          >
            Middle Eastern
          </Typography>

          <Typography
            variant="body2"
            style={{
              width: 400,
              marginLeft: -130,
            }}
          >
            Caucasian
          </Typography>

          <Typography
            variant="body2"
            style={{
              width: 400,
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
