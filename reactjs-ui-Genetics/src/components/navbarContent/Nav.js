import { Grid } from "@material-ui/core";
import "./nav.css";
import logo1 from "../img&Logos/logo 1.png";
import ManCont from "../navbar/ManCont";
import { useState } from "react";
import ManEmp from "../navbar/ManEmp";
import ManRep from "../navbar/ManRep";
import ManFor from "../navbar/ManFor";
import ManLab from "../navbar/ManLab";
import ManPhy from "../navbar/ManPhy";
import userface from "../img&Logos/userface.png";
import ell from "../img&Logos/Ellipse 1.png";
import bell1 from "../img&Logos/bell.png";
import ell1 from "../img&Logos/Ellipse 2.png";
import ell2 from "../img&Logos/WhEllipse.png";
import downarrow from "../img&Logos/downarrow.png";
import ManPat from "../navbar/ManPat";
import SwabK from "../navbar/SwabK";
import Dashboard from "../navbar/Dashboard";
import "../navbarCSS/dashboard.css";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const history = useHistory();
  const location = useLocation();
  const [dash, setDash] = useState(false);
  const [mancont, setMancont] = useState(false);
  const [manemp, setManemp] = useState(false);
  const [manrep, setManrep] = useState(false);
  const [manform, setManform] = useState(false);
  const [manlab, setManlab] = useState(false);
  const [manphy, setManphy] = useState(false);
  const [manpat, setManpat] = useState(false);
  const [swak, setSwak] = useState(false);

  const navHandle = () => {
    history.push("/Dashboard");
  };

  const navHandle1 = () => {
    history.push("/ManangeContractors");
  };

  const navHandle2 = () => {
    history.push("/ManangeEmployees");
  };

  const navHandle3 = () => {
    setManemp(false);
    setDash(false);
    setManrep(true);
    setManform(false);
    setMancont(false);
    setManlab(false);
    setManphy(false);
    setManpat(false);
    setSwak(false);
  };

  const navHandle4 = () => {
    history.push("/ManangeReports");
  };

  const navHandle5 = () => {
    history.push("/ManangeForms");
  };

  const navHandle6 = () => {
    history.push("/ManangeLabs");
  };

  const navHandle7 = () => {
    history.push("/Manangephysician");
  };

  const navHandle8 = () => {
    history.push("/ManangePatients");
  };

  const navHandle9 = () => {
    history.push("/SwabK");
  };

  return (
    <div className="nav">
      <div className="header">
        <Grid className="logo">
          <img
            src={logo1}
            alt=""
            style={{
              position: "absolute",
              width: "164px",
              height: "100px",
              left: "30px",
              top: "-2px",
            }}
          />
        </Grid>

        <Grid className="box">
          <Grid className="boxitems">
            <Grid
              className={
                location.pathname === "/Dashboard" ? "dash" : "non_dash"
              }
              onClick={navHandle}
            >
              <p
                className={
                  location.pathname === "/Dashboard"
                    ? "dash_text"
                    : "nondash_text"
                }
              >
                Dashboard
              </p>
            </Grid>
            <Grid className="line" />

            <Grid
              className={
                location.pathname === "/ManangeContractors" ? "mc" : "non_mc"
              }
              onClick={navHandle1}
            >
              <p
                className={
                  location.pathname === "/ManangeContractors"
                    ? "mc_text"
                    : "nonmc_text"
                }
              >
                Manage Contractors
              </p>
            </Grid>
            <Grid className="line1" />

            <Grid
              className={
                location.pathname === "/ManangeEmployees" ? "me" : "non_me"
              }
              onClick={navHandle2}
            >
              <p
                className={
                  location.pathname === "/ManangeEmployees"
                    ? "me_text"
                    : "nonme_text"
                }
              >
                Manage Employees
              </p>
            </Grid>
            <Grid className="line2" />

            <Grid
              className={
                location.pathname === "/ManangeReports" ? "mr" : "non_mr"
              }
              onClick={navHandle4}
            >
              <p
                className={
                  location.pathname === "/ManangeReports"
                    ? "mr_text"
                    : "nonmr_text"
                }
              >
                Manage Reports
              </p>
            </Grid>
            <Grid className="line3" />

            <Grid
              className={
                location.pathname === "/ManangeForms" ? "mf" : "non_mf"
              }
              onClick={navHandle5}
            >
              <p
                className={
                  location.pathname === "/ManangeForms"
                    ? "mf_text"
                    : "nonmf_text"
                }
              >
                Manage Forms
              </p>
            </Grid>
            <Grid className="line4" />

            <Grid
              className={location.pathname === "/ManangeLabs" ? "ml" : "non_ml"}
              onClick={navHandle6}
            >
              <p
                className={
                  location.pathname === "/ManangeLabs"
                    ? "ml_text"
                    : "nonml_text"
                }
              >
                Manage Labs
              </p>
            </Grid>
            <Grid className="line5" />

            <Grid
              className={
                location.pathname === "/Manangephysician" ? "mp" : "non_mp"
              }
              onClick={navHandle7}
            >
              <p
                className={
                  location.pathname === "/Manangephysician"
                    ? "mp_text"
                    : "nonmp_text"
                }
              >
                Manage Physician
              </p>
            </Grid>
            <Grid className="line6" />

            <Grid
              className={
                location.pathname === "/ManangePatients" ? "mpa" : "non_mpa"
              }
              onClick={navHandle8}
            >
              <p
                className={
                  location.pathname === "/ManangePatients"
                    ? "mpa_text"
                    : "nonmpa_text"
                }
              >
                Manage Patient
              </p>
            </Grid>
            <Grid className="line7" />

            <Grid
              className={location.pathname === "/SwabK" ? "swa" : "non_swa"}
              onClick={navHandle9}
            >
              <p
                className={
                  location.pathname === "/SwabK" ? "swa_text" : "nonswa_text"
                }
              >
                Swab KITS
              </p>
            </Grid>
          </Grid>
        </Grid>

        <Grid className="user_det">
          <Grid className="user" />
          <Grid className="userimg">
            <img
              src={ell}
              alt=""
              style={{
                position: "absolute",
                left: "1550px",
                right: "77.34",
                top: "17%",
                bottom: "14%",
                border: "1px solid #EF9035",
                borderRadius: "45px",
                opacity: 2,
              }}
            />

            <img
              src={userface}
              alt=""
              style={{
                position: "absolute",
                Width: "302px",
                Height: "201px",
                left: "1551px",
                right: "49.48%",
                top: "17%",
                bottom: -"79%",
                borderRadius: "52px",
                opacity: "none",
              }}
            />
            <input
              type="text"
              classname="name"
              value="  Justin"
              readonly
              style={{
                position: "absolute",
                width: "100px",
                left: "1635px",
                right: "47.66%",
                top: "25%",

                border: "0px",
                opacity: "0.9",

                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "22px",
                background: "none",
                color: "#2C3E50",
              }}
            />
            <input
              type="text"
              classname="name"
              value="  Admin"
              readonly
              style={{
                position: "absolute",
                width: "100px",
                left: "1634px",

                top: "55%",

                border: "0px",
                opacity: "0.9",

                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "600",
                fontSize: "16px",
                lineHeight: "22px",
                background: "none",
                color: "#2C3E50",
              }}
            />

            <img
              src={downarrow}
              alt=""
              style={{
                position: "absolute",
                height: "7px",
                left: "1710px",
                top: "34%",
                cursor: "pointer",
              }}
            />
          </Grid>
          <div
            className="noti"
            style={{ position: "absolute", top: "-14px", left: "5px" }}
          >
            <img
              src={ell1}
              alt=""
              style={{
                position: "absolute",
                left: "1825px",
                top: "48px",
              }}
            />

            <img
              src={bell1}
              alt=""
              style={{
                position: "absolute",
                left: "1838px",
                top: "60px",
              }}
            />

            <img
              src={ell2}
              alt=""
              style={{
                position: "absolute",
                left: "1848px",
                top: "58px",
              }}
            />
          </div>
        </Grid>
      </div>

      <Grid className="con"></Grid>
      <div></div>
      {/* <Grid className="footer">
        <p className="foot_text">
          Copyrights © 2022 <span style={{fontWeight:'bolder'}}>Genetix</span>. All Rights Reserved
        </p>
      </Grid> */}
    </div>
  );
}

export default Nav;
