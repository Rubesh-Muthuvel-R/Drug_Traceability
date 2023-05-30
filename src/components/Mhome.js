import React, { Component } from "react";
import "./Signup.css";
// import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import Dummy from "../truffle_abis/dummy.json";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addproduct from "../pages/Addproduct";
import Msidebar from "./Msidebar";
import "./Msidebar.css";
import { FaTh, FaBars } from "react-icons/fa";

import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";

export default class Mhome extends Component {

  render(children) {
    const menuItem = [
      {
        path: "/Mhome/Dashboard",
        name: "Dashboard",
        icon: <FaTh />,
      },
      {
        path: "/Mhome/Addproduct",
        name: "Addproduct",
        icon: <AiOutlinePlus />,
      },
    ];
    return (
      <div className="container">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">Logo</h1>
            <div className="bars">
              <FaBars />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    );
    // return (
    //   <div>
    //     <nav
    //       className="navbar fixed-top shadow p-0"
    //       style={{ backgroundColor: "black", height: "50px" }}
    //     >
    //       Drug Tracability
    //     </nav>
    //     <form>
    //       <h1 style={{ textAlign: "center" }}>Add product</h1>
    //       <input type="text" placeholder="Name" name="Name" />
    //       <input type="date" name="manufacturing_date" />
    //       <input type="date" name="expiring_date" />
    //       <input type="text" placeholder="Aadhar No" />
    //       <input type="text" placeholder="Password" />
    //       <input type="text" placeholder="Confirm Password" />
    //       <br />
    //       <br />
    //       <button>Add</button>
    //     </form>
    //   </div>
    // );
  }
}
