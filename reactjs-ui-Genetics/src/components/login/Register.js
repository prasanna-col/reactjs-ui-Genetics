import img from "../img&Logos/image 1.png";
import logo from "../img&Logos/logo 1.png";
import icon from "../img&Logos/Vector.png";
import icon1 from "../img&Logos/Vector1.png";
import eye from "../img&Logos/eye.png";
import eye1 from "../img&Logos/eye1.png";
import mail from "../img&Logos/mailicon.png";
import { gql, useMutation } from "@apollo/client";
import { useFormik } from "formik";
import { useState } from "react";
import "./Login.css";
import { toast } from 'react-toastify';
import { Grid, Button, InputBase } from "@material-ui/core";
import Forgot from "../forgot_pass/Forgot";
import { useHistory } from "react-router-dom";
import { REGISTER } from "../../graphql/Queries";

function Register() {
  const history = useHistory();
  const [forgot, setForgot] = useState(false);

  const forgotClick = () => {
    history.push("/");
  };

  const [createUser, { data }] = useMutation(REGISTER);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (data, reset) => {
      console.log(data);
      await createUser({ variables: { userInput: data } })
        .then((res) => {
          console.log(res);
          history.push("/");
        })
        .catch((error) => toast.error(error.message));
    },
  });

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
            style={{
              position: "absolute",
              width: "46%",
              height: "20%",
              left: "134px",
              top: "76px",
            }}
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
                width: "257px",
                left: "150px",
                top: "3px",
                fontFamily: "Open Sans",
                fontWeight: "600",
                fontSize: "28px",
              }}
            >
              Admin Register
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
              <InputBase
                className="userinput"
                placeholder="Username"
                value={formik?.values?.username}
                onChange={formik.handleChange("username")}
              />
            </Grid>
            <Grid className="username" style={{ marginTop: 80 }}>
              <img
                src={mail}
                alt=""
                style={{
                  position: "absolute",
                  width: "25px",
                  height: "20px",
                  left: "30px",
                  top: "17px",
                }}
              />
              <InputBase
                className="userinput"
                placeholder="Email"
                value={formik?.values?.email}
                onChange={formik.handleChange("email")}
              />
            </Grid>
            <Grid className="pass" style={{ marginTop: 70 }}>
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
                value={formik?.values?.password}
                onChange={formik.handleChange("password")}
              />
            </Grid>
            <div>
              <a
                href
                onClick={forgotClick}
                style={{
                  left: "360px",
                  position: "absolute",
                  top: "320px",
                  width: "107px",
                  color: "#207EA9",
                  cursor: "pointer",
                }}
              >
                Sign In
              </a>
            </div>
            <Grid className="button" style={{ marginTop: 50 }}>
              <Button className="butt" onClick={formik.handleSubmit}>
                Sign Up
              </Button>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}
export default Register;
