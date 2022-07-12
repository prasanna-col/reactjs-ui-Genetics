import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Forget from "./components/forgot_pass/Forgot";
import Nav from "./components/navbarContent/Nav";
import ManCont from "./components/navbar/ManCont";
import AddContractor from "./components/Add/AddContractor";
import Dashboard from "./components/navbar/Dashboard";
import ManEmp from "./components/navbar/ManEmp";
import ManRep from "./components/navbar/ManRep";
import ManFor from "./components/navbar/ManFor";
import ManLab from "./components/navbar/ManLab";
import ManPhy from "./components/navbar/ManPhy";
import ManPat from "./components/navbar/ManPat";
import SwabK from "./components/navbar/SwabK";
import Footer from "./components/Footer/Footer";
import Register from "./components/login/Register";

function RouterPage() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Login} />
        <Route exact path="/forgotPassword" component={Forget} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/ManangeContractors" component={ManCont} />
        <Route exact path="/ManangeEmployees" component={ManEmp} />
        <Route exact path="/ManangeReports" component={ManRep} />
        <Route exact path="/ManangeForms" component={ManFor} />
        <Route exact path="/ManangeLabs" component={ManLab} />
        <Route exact path="/ManangeLabs" component={ManLab} />
        <Route exact path="/Manangephysician" component={ManPhy} />
        <Route exact path="/ManangePatients" component={ManPat} />
        <Route exact path="/SwabK" component={SwabK} />
        <Route exact path="/AddNewContractors" component={AddContractor} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default RouterPage;
