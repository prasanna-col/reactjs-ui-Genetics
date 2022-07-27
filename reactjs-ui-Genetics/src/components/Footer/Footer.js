import { Grid } from "@material-ui/core";
import React from "react";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <div>
      <Grid
        className={location.pathname === "/SwabK" ? "footer_swab" : "footer"}
      >
        <p
          className={
            location.pathname === "/SwabK" ? "foot_text_swab" : "foot_text"
          }
        >
          Copyrights © 2022{" "}
          <span style={{ fontWeight: "bolder", color: "#000" }}> Genetix</span>.
          All Rights Reserved
        </p>
      </Grid>
    </div>
  );
}

export default Footer;
