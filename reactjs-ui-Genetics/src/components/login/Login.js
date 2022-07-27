import img from "../img&Logos/image 1.png";
import logo from "../img&Logos/logo 1.png";
import icon from "../img&Logos/Vector.png";
import { useQuery, useMutation } from "@apollo/client";
import icon1 from "../img&Logos/Vector1.png";
import eye from "../img&Logos/eye.png";
import eye1 from "../img&Logos/eye1.png";
import mail from "../img&Logos/mailicon.png";
import { toast } from "react-toastify";
import { useState } from "react";
import "./Login.css";
import { LOGIN } from "../../graphql/Queries";
import { Grid, Button, InputBase } from "@material-ui/core";
import Forgot from "../forgot_pass/Forgot";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

function Login() {
  const history = useHistory();
  const [forgot, setForgot] = useState(false);

  const Registerpage = () => {
    history.push("/register");
  };

  const [login, { loading, data, error }] = useMutation(LOGIN);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(6, "6 characters required"),
    }),
    onSubmit: async (data) => {
      console.log(data);

      login({ variables: data })
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", JSON.stringify(res.data.login));
          const token = localStorage.getItem("token");
          if (token) {
            history.replace("/Dashboard");
            window.location.reload();
          }
        })
        .catch((error) => {
          history.push("/");
          toast.error("Invalid email or password");
        });
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
              Admin Login
            </h2>
            <Grid className="username">
              <img
                src={mail}
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
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange("email")}
              />
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
                value={formik.values.password}
                onChange={formik.handleChange("password")}
              />
            </Grid>
            <div>
              <a
                href
                onClick={Registerpage}
                style={{
                  left: "300px",
                  position: "absolute",
                  top: "254px",
                  width: "107px",
                  color: "#207EA9",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </a>
            </div>

            <Grid className="button">
              <Button className="butt" onClick={formik.handleSubmit}>
                Sign In
              </Button>
            </Grid>
          </div>
        )}
      </div>
    </div>
  );
}
export default Login;
