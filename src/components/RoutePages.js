import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Managers, { ManagersWithRouter } from "./Managers";
import Managerl from "./Managerl";
import Supplierl from "./Supplierl";
import Customerl from "./Customerl";
import Suppliers from "./Suppliers";
import Customers from "./Customers";
import Mhome from "./Mhome";
import Dashboard from "../pages/Dashboard";
import Addproduct from "../pages/Addproduct";
import Msidebar from "./Msidebar";

export default function RoutePages() {
  return (
    <Routes>
      <Route exact path="/Home" element={<Home />}></Route>
      <Route exact path="/Manus" element={<ManagersWithRouter />}></Route>
      <Route exact path="/Suppliers" element={<Suppliers />}></Route>
      <Route exact path="/Customers" element={<Customers />}></Route>
      <Route exact path="/Manul" element={<Managerl />}></Route>
      <Route exact path="/Supplierl" element={<Supplierl />}></Route>
      <Route exact path="/Customerl" element={<Customerl />}></Route>
      <Route
        exact
        path="/Mhome"
        element={<Msidebar children={<Dashboard />} />}
      ></Route>
      <Route
        exact
        path="/Mhome/Dashboard"
        element={<Msidebar children={<Dashboard />} />}
      ></Route>
      <Route
        exact
        path="/Mhome/Addproduct"
        element={<Msidebar children={<Addproduct />} />}
      ></Route>
    </Routes>
  );
}
