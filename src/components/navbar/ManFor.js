import React from "react";
import {
  Grid,
 
} from "@material-ui/core";
import "../../App.css";
import CGX from "../img&Logos/CGX.png";
import New from "../img&Logos/New.png";
import Mycard from "../img&Logos/MyCardio.png";
import PDA from "../img&Logos/PDA.png";
import CustomForm from "./CustomForm";

function ManFor() {

        const [CustForm, setCustForm] = React.useState(false);
   
    const formClick =()=>{
        setCustForm(true)
       
       
    }
    console.log(CustForm)

  


  return (  
      <div>
        {CustForm ? (<CustomForm/>) : (
    <div className="content">
      <div className="C_heading">
        <h2
          style={{
            marginTop: "10px",
            width: "1880px",
            border: "0px solid grey",
            boxShadow: " 0px 1px 0px rgb(206, 206, 206)",
            borderRadius: "10px",
          }}
        >
          <div
            style={{ marginLeft: "25px", position: "relative", top: "-7px" }}
          >
            Type of Tests
          </div>
        </h2>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <img
            src={CGX}
            alt=""
            style={{ position: "absolute", left: "111px", top: "217px" ,cursor:"pointer"}}
          />
          <div
            style={{
              position: "absolute",
              width: "1px",
              height: "160px",
              left: "414px",
              top: "238px",

              background: "#E5EFF3",
            }}
          ></div>
        </Grid>

        <Grid item xs={3}>
          <img
            src={Mycard}
            alt=""
            style={{ position: "absolute", left: "570px", top: "217px" ,cursor:"pointer"}}
          />
          <div
            style={{
              position: "absolute",
              width: "1px",
              height: "160px",
              left: "850px",
              top: "238px",

              background: "#E5EFF3",
            }}
          ></div>
        </Grid>

        <Grid item xs={3}>
          <img
            src={PDA}
            alt=""
            style={{ position: "absolute", left: "990px", top: "225px" ,cursor:"pointer"}}
          />
          <div
            style={{
              position: "absolute",
              width: "1px",
              height: "160px",
              left: "1270px",
              top: "238px",

              background: "#E5EFF3",
            }}
          ></div>
        </Grid>

        <Grid item xs={3}>
          <img
            src={New}
            alt=""
            style={{ position: "absolute", left: "1450px", top: "225px",cursor:"pointer" }}
            onClick={formClick}
          />
          </Grid>

      </Grid>

    </div>
    )}

    


</div>
  );
}

export default ManFor;
