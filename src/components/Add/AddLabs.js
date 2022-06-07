import React from 'react'
import { Grid , InputBase , Button , Table , TableRow , TableCell , TableHead , TableBody, TextField, RadioGroup, FormControl, FormControlLabel, Radio } from '@material-ui/core'
import "../../App.css"



function AddLabs() {
    return ( 
        <div className='AddLaboratory'>
    
        <div className='content'>
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
            Add New Laboratory
          </div>
        </h2>
      </div>

          <div className='rectangleBox'>
            <div className='Hlabel'>
              <label >Basic Information</label>
            </div> 
          </div>
            <div className='left_sideform'>
            <Grid container spacing={3}>
                <div className='lab_name' style={{position:'absolute',left:'40px', top:"140px"}}>
                  <div className='label' style={{ position:"absolute",width:"138px",top:"20px"}}>
                      <label>laboratory Name</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px"}}>
                      <InputBase className='namefield' style={{left:"30px"}}/>
                  </div>
                </div>

                <div className='serviceOffer' style={{position:'absolute',left:'40px', top:"227px"}}>
                  <div className='label' style={{ position:"absolute",width:"135px",top:"20px"}}>
                      <label>Services Offered</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px"}}>
                      <InputBase className='namefield' style={{left:"30px"}}/>
                  </div>
                </div>

                <div className='street_add' style={{position:'absolute',left:'40px', top:"311px"}}>
                  <div className='label' style={{ position:"absolute",width:"122px",top:"20px"}}>
                      <label>Street Address</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px", height:"130px", borderRadius:"10px"}}>
                      <InputBase multiline className='namefield' style={{left:"30px",}}/>
                  </div>
                </div>

                <div className='City' style={{position:'absolute',left:'40px', top:"475px"}}>
                  <div className='label' style={{ position:"absolute",width:"110px",top:"20px"}}>
                      <label>City</label>
                  </div>
                  <div className='select' style={{left:"180px", top:"10px"}}>
                  <select
                        placeholder="ID"
                        style={{ left: "30px" , fontWeight:"800"}}
                        className="select_ins"
                        >
                          <option placeholder="ID">New York</option>
                          <option value="001">Cuba</option>
                          <option value="002">Los Angels</option>
                          <option value="003">Mexico</option>
                        </select>    
                  </div>
                  </div>

                  <div className='zip_code' style={{position:'absolute',left:'40px', top:"570px"}}>
                  <div className='label' style={{ position:"absolute",width:"110px",top:"20px"}}>
                      <label>Zip Code</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px"}}>
                      <InputBase className='namefield' style={{left:"30px"}}/>
                  </div>
                </div>

                
      
            </Grid>
            </div>

            <div className='right_sideform' style={{position:"absolute" , left:"1200px", top:"1px"}}>
            <Grid container spacing={3}>
                <div className='nameOfContact' style={{position:'absolute',left:'40px', top:"140px"}}>
                  <div className='label' style={{ position:"absolute",width:"139px",top:"20px"}}>
                      <label>Name of Contact</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px"}}>
                      <InputBase className='namefield' style={{left:"30px"}}/>
                  </div>
                </div>

                <div className='email_address' style={{position:'absolute',left:'40px', top:"226px"}}>
                  <div className='label' style={{ position:"absolute",width:"118px",top:"20px"}}>
                      <label>Email Address</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px"}}>
                      <InputBase className='namefield' style={{left:"30px"}}/>
                  </div>
                </div>

                <div className='Phone_num' style={{position:'absolute',left:'40px', top:"310px"}}>
                  <div className='label' style={{ position:"absolute",width:"126px",top:"20px"}}>
                      <label>Phone Number</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px", }}>
                      <InputBase className='namefield' style={{left:"30px",}}/>
                  </div>
                </div>

                <div className='fax_num' style={{position:'absolute',left:'40px', top:"396px"}}>
                  <div className='label' style={{ position:"absolute",width:"122px",top:"20px"}}>
                      <label>Fax Number</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px", }}>
                      <InputBase className='namefield' style={{left:"30px",}}/>
                  </div>
                </div>


                <div className='State' style={{position:'absolute',left:'40px', top:"479px"}}>
                  <div className='label' style={{ position:"absolute",width:"110px",top:"20px"}}>
                      <label>State</label>
                  </div>
                  <div className='select' style={{left:"180px", top:"10px"}}>
                  <select
                        placeholder="ID"
                        style={{ left: "30px" , fontWeight:"800"}}
                        className="select_ins"
                        >
                          <option placeholder="ID">California</option>
                          <option value="001">Cuba</option>
                          <option value="002">Los Angels</option>
                          <option value="003">Mexico</option>
                        </select>    
                  </div>
                  </div>

                <div className='clin_num' style={{position:'absolute',left:'40px', top:"570px"}}>
                  <div className='label' style={{ position:"absolute",width:"116px",top:"20px"}}>
                      <label>CLIN Number</label>
                  </div>
                  <div className='namee' style={{top:"5px", left:"180px"}}>
                      <InputBase className='namefield' style={{left:"30px"}}/>
                  </div>
                </div>            

            </Grid>
            </div>

            <Grid className='add_buttons' style={{position:"absolute", top:"606px" , left:'-584px'}}>
            <Grid className="button01" style={{ marginLeft: "90px" , background:"#7F8C8D"}}>
            <Button className="button01_field" style={{ color: "white" }}>
              Cancel
            </Button>
          </Grid>

          <Grid className="button02" style={{ marginLeft: "110px", background:"#207EA9" }}>
            <Button className="button02_field" style={{ color: "white" }}>
              Save
            </Button>
          </Grid>
            </Grid>


          
        </div>
        </div>
     );
}

export default AddLabs;