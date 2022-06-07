import img from "../img&Logos/image 1.png";
import logo from "../img&Logos/logo 1.png";
import icon from "../img&Logos/Vector.png";
import icon1 from "../img&Logos/Vector1.png";
import eye from "../img&Logos/eye.png";
import eye1 from "../img&Logos/eye1.png";

import { useState } from "react";
import "./Login.css";
import { Grid, Button, InputBase} from "@material-ui/core";
import Forgot from "../forgot_pass/Forgot";

function Login() {
  const [forgot, setForgot] = useState(false);

  const forgotClick = () => {
    setForgot(true);
  
  };
  

  return (
    <div className="Login">
      <img
        src={img}
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          height: "937px",
          left: "-1px",
          top: "0px",
          margin: "0px",
          backgroundSize: "100%",
        }}
      />
      <div className="text">
        <h1 className="h1Text">
          Cutting Edge Genitic Sequencing is Saving Lives{" "}
        </h1>
      </div>
      <div className="loginform">
        <div className="logo">
          <img
            src={logo}
            style={{ position: 'absolute',width: "46%", height: "20%", left: "134px", top: "76px" }}
            alt=""
          />
        </div>
        {forgot ? (
          <Forgot />
        ) : (
          <div className="form1">
            <h2
              style={{
                position: "absolute",
                width: "157px",
                left: "150px",
                top: "3px",
                fontFamily: "Open Sans",
                fontWeight: "600",
                fontSize: "28px",
              }}
            >
              Admin Login
            </h2>
            <Grid className="username">
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
            <Grid className="pass">
              <img
                src={icon1}
                alt=""
                style={{
                  position: "absolute",
                  width: "20px",
                  height: "20px",
                  left: "30px",
                  top: "17px",
                }}
              />
              <img
                src={eye}
                alt=""
                style={{
                  position: "absolute",
                  width: "9px",
                  height: "9px",
                  left: "369px",
                  top: "29px",
                  cursor: "pointer",
                }}
              />
              <img
                src={eye1}
                alt=""
                style={{
                  position: "absolute",
                  width: "25px",
                  height: "15px",
                  left: "361px",
                  top: "26px",
                  cursor: "pointer",
                }}
              />
              <InputBase
                variant="outlined"
                className="password"
                type={"Password"}
                placeholder="Password"
              />
            </Grid>
            <div>
              <a href
                onClick={forgotClick}
                style={{
                  left: "300px",
                  position: "absolute",
                  top: "254px",
                  width: "107px",
                  color: "#207EA9",
                  cursor: "pointer",
                }}
              >
                Forgot password
              </a>
            </div>
            <Grid className="button">
              <Button className="butt" href="/nav">Sign In</Button>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;
