import React from "react";
import { Divider, Grid } from "@material-ui/core";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CGX from "../img&Logos/CGX.png";
import New from "../img&Logos/New.png";
import Mycard from "../img&Logos/MyCardio.png";
import PDA from "../img&Logos/PDA.png";

function RoleModal(props) {
  const { open, setOpen } = props;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ fontWeight: "bold", marginBottom: 60 }}
        >
          Please Select the Role
          <Divider style={{ marginTop: 12 }} />
        </DialogTitle>

        <DialogContent>
          <Grid container spacing={3}>
            <Grid item xs={3} style={{ marginLeft: 80 }}>
              <img
                src={CGX}
                alt=""
                style={{
                  cursor: "pointer",
                }}
              />
            </Grid>

            <Grid item xs={3} style={{ marginLeft: 100 }}>
              <img
                src={Mycard}
                alt=""
                style={{
                  cursor: "pointer",
                }}
              />
            </Grid>

            <Grid item xs={3} style={{ marginLeft: 100 }}>
              <img
                src={PDA}
                alt=""
                style={{
                  cursor: "pointer",
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default RoleModal;
