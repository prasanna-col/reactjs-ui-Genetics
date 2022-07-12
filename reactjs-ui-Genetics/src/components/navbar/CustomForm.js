import '../../App.css';
import CF_image from "../img&Logos/CF_image.png";


function CustomForm() {
    return (  
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
            Custom Form
          </div>
        </h2>
      </div>

      <div className='CustomForm_box'>
         <img src={CF_image} alt='' style={{position:"absolute", width:"1500px",height:"680px", left:"180px", top:"60px"}}/>


      </div>

        </div>
    );
}

export default CustomForm;