import { Grid } from "@material-ui/core";
import React from "react";

function Footer() {
  return (
    <div>
      <Grid className="footer">
        <p className="foot_text">
          Copyrights © 2022{" "}
          <span style={{ fontWeight: "bolder" }}>Genetix</span>. All Rights
          Reserved
        </p>
      </Grid>
    </div>
  );
}

export default Footer;
