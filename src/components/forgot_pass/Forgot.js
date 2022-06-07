import React from "react";
import { Grid, Button, InputBase} from "@material-ui/core";
import icon from './mailicon.png'

import './Forgot.css'
import { useHistory } from "react-router-dom";



function Forgot() {

        
  

     
    


    return(
  
        <div className="forgotForm">
           <h2 style={{
              position: "absolute",
              width: "211px",
              left: "139px",
              top: "240px",
              fontFamily: "Open Sans",
              fontWeight: "600",
              fontSize: "28px",
            }}>Forgot Password</h2>

            <Grid className="forgot_mail">
            <img
              src={icon}
              alt=""
              style={{
                position: "absolute",
                width: "20px",
                height: "20px",
                left: "30px",
                top: "17px",
              }}
            />
            <InputBase className="userinput" />
          </Grid>

          <Grid className="msg">
              <p>The password reset link will be sent to your registered email id.</p>
          </Grid>

          <Grid className="button1">
            <Button className="butt1" onClick="history.back()">Submit</Button>
          </Grid>

          
        </div>

        
    )
    
}


export default Forgot;