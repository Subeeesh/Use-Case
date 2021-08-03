import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./components/NavbarComp";
import AdminLogin from "./components/AdminLogin";
import EmployeeLogin from "./components/EmployeeLogin";
import AdminPortal from "./components/AdminPortal";
import EmployeeDashboard from "./components/EmployeeDashboard";
import AddProduct from "./components/AddProduct";
// import Nav1 from "./components/Nav1.html";
import { Link, Route, Switch } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import UserRegistration from "./components/UserRegistration";
import EditProducts from "./components/EditProducts";
// import LoginPage from "./components/LoginPage";

// import {LinkContainer} from 'react-router-bootstrap'
// import {Route,BrowserRouter as Router,Switch}from 'react-router-dom';
// import {Nav,Navbar} from 'react-bootstrap';

function App() {
  const rey = useMediaQuery("(max-width:500px)");
  return (
    <div className="App">
      <Route exact path="/" component={NavbarComp}></Route>

      <Route path="/adminlogin/add" component={AdminLogin}></Route>

      <Route path="/employeelogin" component={EmployeeLogin}></Route>
      <Route path="/adminportal" component={AdminPortal}></Route>
      <Route path="/employeedashboard" component={EmployeeDashboard}></Route>
      <Route path="/addproduct" component={AddProduct}></Route>
      <Route path="/editproduct" component={EditProducts}></Route>
      <Route path="/userregistration" component={UserRegistration}></Route>

      {/* <AdminPortal/> */}
      {rey && (
        <div style={{ backgroundColor: "grey", textAlign: "center" }}>
          Screen Switched to mobile version
        </div>
      )}
    </div>
  );
}

export default App;
