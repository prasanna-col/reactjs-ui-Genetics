import React from 'react'
import { Grid , InputBase , Button , Table , TableRow , TableCell , TableHead , TableBody } from '@material-ui/core'
import "../../App.css"
import GA from '../img&Logos/GroupArrow.png'
import calendar from  '../img&Logos/calendar.png'
import Rforms from '../../ManRep.json';
import ReactPaginate from 'react-paginate'



function ManRep() {

    const[datas , setdatas] = React.useState(Rforms.slice(0,20));
    const[pageNumber , setPageNumber] = React.useState(0);

    const datasPerPage = 10;
    const pageVisited =pageNumber * datasPerPage;

    const dispData = datas.slice(pageVisited, pageVisited+datasPerPage).map((data)=>{
        return(
            <TableRow>
                <TableCell >{data.id}</TableCell>
                <TableCell>{data.date}</TableCell>
                <TableCell>{data.patId}</TableCell>
                <TableCell>{data.patName}</TableCell>
                <TableCell>{data.gender}</TableCell>
                <TableCell>{data.phNUm}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell className="statuss" ><div className='status' style={{background:data.background,width:'180px'}}><div style={{left:"3px", position:'relative', top:'2px' , color:'white', textAlign:"center"}}>{data.status}</div></div></TableCell>
            </TableRow>
        )
    });

    const pageCount = Math.ceil(datas.length/datasPerPage)

    const pageChange = ({selected}) =>{
        setPageNumber(selected);
    }

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
            Reports
          </div>
        </h2>
      </div>
      <Grid container spacing={5}>
        <div className="fields">
          <Grid className="select" style={{ marginLeft: "10px" }}>
            <select className="select_ins" style={{ border: "disabled" , fontWeight:"bold"}}>
              <option placeholder="Total Days in Status">Total Days in Status</option>
              <option value="Manager">Manager</option>
              <option value="Developers">Developers</option>
              <option value="Testers">Testers</option>
            </select>
          </Grid>
          <Grid className="namee" style={{ marginLeft: "30px" }}>
            <InputBase
              placeholder="Patient Name"
              style={{ left: "30px" }}
              className="namefield"
            />
          </Grid>

          <Grid className="namee" style={{ marginLeft: "350px" }}>
            <InputBase
              placeholder="Submission Date"
              style={{ left: "30px",top:'10px' }}
              className="name_field"
            />
            <img src={calendar} alt='' style={{position:"absolute",left:"250px",top:"13px"}}/>
          </Grid>

          <Grid className="id" style={{ marginLeft: "360px" }}>
            <select
              placeholder="Status"
              style={{ left: "30px" }}
              className="id_field"
            >
              <option placeholder="Status">Status</option>
              <option value="001">001</option>
              <option value="002">002</option>
              <option value="003">003</option>
            </select>
          </Grid>

          <Grid className="button01" style={{ marginLeft: "90px" }}>
            <Button className="button01_field" style={{ color: "white" }}>
              filter
            </Button>
          </Grid>

          <Grid className="button02" style={{ marginLeft: "110px" }}>
            <Button className="button02_field" style={{ color: "white" }}>
              Reset
            </Button>
          </Grid>

          <Grid className="button03" style={{ marginLeft: "150px" }}>
            <Button className="button03_field" style={{ color: "white" }}>
              Export 
            </Button>
          </Grid>
         
        </div>
        </Grid> 

        <div className="form">
      
    
          <Table stickyHeader >
          <TableHead style={{background:'transparent'}} >
            <TableRow>
               
               <TableCell style={{width:'2px'}}>S.No</TableCell>
               <TableCell className="thead">
                 Date
                 <img
                   src={GA}
                   alt=""
                   style={{ position: "absolute", left: "140px", top: "20px" }}
                   className="groupArrow"
                 />
               </TableCell>
               <TableCell className="thead">
                 Patient ID
                 <img
                   src={GA}
                   alt=""
                   style={{ position: "absolute", left: "120px", top: "20px" }}
                   className="groupArrow"
                 />
               </TableCell>
               <TableCell className="thead">
                 Patient Name
                 <img
                   src={GA}
                   alt=""
                   style={{ position: "absolute", left: "140px", top: "20px" }}
                   className="groupArrow"
                 />
               </TableCell>
               <TableCell className="thead">
                 Gender
                 <img
                   src={GA}
                   alt=""
                   style={{
                     position: "absolute",
                     left: "135px",
                     top: "20px",
                   }}
                   className="groupArrow"
                   
                 />
               </TableCell>
               <TableCell className="thead">
                 Phone Number
                 <img
                   src={GA}
                   alt=""
                   style={{
                     position: "absolute",
                     left: "200px",
                     top: "20px",
                   }}
                   className="groupArrow"
                 />
               </TableCell>

               <TableCell className="thead" style={{width:"300px"}}>
                 Email Address
                 <img
                   src={GA}
                   alt=""
                   style={{
                     position: "absolute",
                     left: "228px",
                     top: "20px",
                   }}
                   className="groupArrow"
                 />
               </TableCell>

               
               <TableCell style={{width:"160px", textAlign:'center'}} className="thead">Status</TableCell>

             </TableRow>
            </TableHead>
              
            <TableBody>{dispData}</TableBody>
         
          </Table>
      
        </div>  

             <ReactPaginate
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}                                        
             />

        </div>
     );
}

export default ManRep;