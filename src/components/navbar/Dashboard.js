import { Grid, Typography } from "@material-ui/core";
import datas from "../../Dashdata.json";
import data from "../../Dashdata1.json";
import "../navbarCSS/dashboard.css";
import icon1 from "../img&Logos/clock1.png";
import icon2 from "../img&Logos/2.png";
import icon3 from "../img&Logos/3.png";
import icon4 from "../img&Logos/4.png";
import icon5 from "../img&Logos/5.png";
import icon6 from "../img&Logos/6.png";
import icon7 from "../img&Logos/7.png";
import icon8 from "../img&Logos/8.png";
import icon9 from "../img&Logos/9.png";
import icon10 from "../img&Logos/10.png";
import icon12 from "../img&Logos/12.png";

function Dashboard() {
  return (
    <div className="dash_contents">
      <div className="content1">
        <div className="data">
          {datas.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className="top_head"
                  style={{
                    marginTop: "10px",
                    width: "1880px",
                    border: "0px solid grey",
                    boxShadow: " 0px 1px 0px rgb(206, 206, 206)",
                    borderRadius: "10px",
                  }}
                >
                  <div className="top_head_name" style={{ marginLeft: "20px" }}>
                    {/* <h2 style={{marginTop:"20px",position:"relative" ,top:'-9px'}}>{item.title}</h2> */}
                    <Typography
                      variant="h5"
                      style={{
                        marginTop: "20px",
                        position: "relative",
                        top: "-9px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
                <Grid container spacing={2} style={{ marginTop: 10 }}>
                  {item.value.map((data, i) => (
                    <Grid item xs={3}>
                      <div
                        className="datas"
                        style={{ background: data.background }}
                      >
                        <h2 style={{ marginLeft: "80px", marginTop: "5px" }}>
                          {data.num}
                        </h2>
                        <Typography>
                          <p style={{ marginLeft: "80px", marginTop: "5px" }}>
                            {data.name}
                          </p>
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            );
          })}
        </div>

        <div
          className="Icon1"
          style={{
            position: "absolute",
            background: "orange",
            top: "86px",
            left: "30px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon1}
            alt=""
            style={{ position: "absolute", left: "12px", top: "10px" }}
          />
        </div>

        <div
          className="Icon2"
          style={{
            position: "absolute",
            background: "#2ECC71",
            top: "86px",
            left: "505px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon2}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>

        <div
          className="Icon3"
          style={{
            position: "absolute",
            background: "#3498DB",
            top: "86px",
            left: "978px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon3}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>

        <div
          className="Icon4"
          style={{
            position: "absolute",
            background: "#9B59B6",
            top: "86px",
            left: "1451px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon4}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>

        <div
          className="Icon5"
          style={{
            position: "absolute",
            background: "#1ABC9C",
            top: "199px",
            left: "30px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon5}
            alt=""
            style={{ position: "absolute", left: "4px", top: "6px" }}
          />
        </div>

        <div
          className="Icon6"
          style={{
            position: "absolute",
            background: "#E84393",
            top: "199px",
            left: "505px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon6}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>

        <div
          className="Icon7"
          style={{
            position: "absolute",
            background: "#2D3436",
            top: "199px",
            left: "978px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon7}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>

        <div
          className="Icon8"
          style={{
            position: "absolute",
            background: "#6C5CE7",
            top: "199px",
            left: "1451px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon8}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>

        <div
          className="Icon9"
          style={{
            position: "absolute",
            background: "#27AE60",
            top: "312px",
            left: "30px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon9}
            alt=""
            style={{ position: "absolute", left: "12px", top: "4px" }}
          />
        </div>
      </div>

      <div className="content2">
        <div className="data">
          {data.map((item, index) => {
            return (
              <div>
                <div
                  className="top_head"
                  style={{
                    marginTop: "10px",
                    width: "1880px",
                    border: "0px solid grey",
                    boxShadow: " 0px 1px 0px rgb(206, 206, 206)",
                    borderRadius: "10px",
                  }}
                >
                  <div className="top_head_name" style={{ marginLeft: "20px" }}>
                    {/* <h2 style={{marginTop:"20px" ,position:"relative" ,top:'-9px'}}>{item.title}</h2> */}
                    <Typography
                      variant="h5"
                      style={{
                        marginTop: "20px",
                        position: "relative",
                        top: "-9px",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
                <Grid container spacing={2} style={{ marginTop: 10 }}>
                  {item.value.map((data, i) => (
                    <Grid item xs={3}>
                      <div
                        className="datas"
                        style={{ background: data.background }}
                      >
                        <h2 style={{ marginLeft: "80px", marginTop: "5px" }}>
                          {data.num}
                        </h2>
                        <Typography>
                          <p style={{ marginLeft: "80px", marginTop: "5px" }}>
                            {data.name}
                          </p>
                        </Typography>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            );
          })}
        </div>
        <div
          className="Icon10"
          style={{
            position: "absolute",
            background: "#9B59B6",
            top: "86px",
            left: "30px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon10}
            alt=""
            style={{ position: "absolute", left: "12px", top: "4px" }}
          />
        </div>

        <div
          className="Icon11"
          style={{
            position: "absolute",
            background: "#2ECC71",
            top: "86px",
            left: "505px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon5}
            alt=""
            style={{ position: "absolute", left: "4px", top: "6px" }}
          />
        </div>

        <div
          className="Icon12"
          style={{
            position: "absolute",
            background: "#E74C3C",
            top: "86px",
            left: "978px",
            height: "70px",
            width: "80px",
            borderRadius: "5px",
          }}
        >
          <img
            src={icon12}
            alt=""
            style={{ position: "absolute", left: "12px", top: "6px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
