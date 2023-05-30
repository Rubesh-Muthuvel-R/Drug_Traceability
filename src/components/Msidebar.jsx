import React, { useState } from "react";
import "./Msidebar.css";
import {
    FaTh,FaBars
} from "react-icons/fa";

import {AiOutlinePlus} from "react-icons/ai";
import { NavLink } from "react-router-dom";  

function Msidebar ({children}){
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);      
    const menuItem=[
        {
            path:"/Mhome/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Mhome/Addproduct",
            name:"Addproduct",
            icon:<AiOutlinePlus/>
        }
    ]
    return(
        <div className="container">
            <div style={{width:isOpen?"200px" :"50px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display:isOpen?"block" :"none"}} className="logo">Logo</h1>
                    <div style={{marginLeft:isOpen?"50px" :"0px"}} className="bars"><FaBars onClick={toggle}/></div>
                </div>
                {
            menuItem.map((item,index)=>(
                <NavLink to={item.path} key={index}  className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display:isOpen?"block" :"none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
            }
            </div>
            <main>{children}</main>
        </div>
        
    )
}

export default Msidebar;