import React, { Component, useState } from "react";
import "./Signup.css";
// import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import Dummy from "../truffle_abis/dummy.json";
import Dashboard from "../pages/Dashboard";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Addproduct from "../pages/Addproduct";
import Msidebar from "./Msidebar";

class Managers extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockChainData();
  }

  async loadWeb3() {
    //ethereum - metamask
    if (window.ethereum) {
      window.Web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "eth_accounts",
      });
    } else if (window.Web3) {
      window.web3 = new Web3(window.Web3.currentProvider);
    } else {
      window.alert("No ethereum browser detected! Check out metamask.");
    }
  }

  async loadBlockChainData() {
    const web3 = window.Web3;
    const account = await web3.eth.getAccounts();
    this.state.account = account[0];
    const netId = await web3.eth.net.getId();
    console.log(this.state.account);
    //load contract
    const dummy = Dummy.networks[netId];
    const manu = new web3.eth.Contract(Dummy.abi, dummy.address);
    if (dummy) {
      // tether.methods.store(100).send({ from: this.state.account });
      manu.methods
        .addManufacturer(this.state.account)
        .send({ from: this.state.account });
      console.log(manu.methods.totalManufacturers().call());
    } else {
      window.alert("Particular contract not yet deployed");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      name: "",
      email: "",
      aadhaar: "",
      pwd: "",
      cpwd: " ",
      valid: false,
    };
  }

  //setting out n/w to 5777
  async create() {
    const netId = Web3.eth.net.getId();
    // console.log(netId);
    //load contract
    const dummy = Dummy.networks[netId];
    const tether = new Web3.eth.Contract(Dummy.abi, dummy.address);
    if (dummy) {
      // tether.methods.store(100).send({ from: this.state.account });
      let val = tether.methods.addManufacturer().call();
      console.log(val);
    } else {
      window.alert("Particular contract not yet deployed");
    }
  }

  render() {
    const setName = (event) => {
      this.state.name = event.target.value;
    };

    const setEmail = (event) => {
      this.state.email = event.target.value;
    };

    const setAadhaar = (event) => {
      this.state.aadhaar = event.target.value;
    };

    const setPassword = (event) => {
      this.state.pwd = event.target.value;
    };

    const setConfimPassword = (event) => {
      this.state.cpwd = event.target.value;
    };

    const aadhaarpattern = new RegExp("^[0-9]{12}$");

    const validate = () => {
      if (this.state.name.length >= 3) {
        if (aadhaarpattern.test(this.state.aadhaar)) {
          if (this.state.pwd == this.state.cpwd) {
            this.props.navigate("/Mhome");
          } else {
            alert("Passwords don't match");
          }
        } else {
          alert("Invalid Aadhaar number");
        }
      } else {
        alert("Username should be 3 characters long");
      }
    };

    // const navigate = useNavigate();
    return (
      <div>
        {/* <body> */}
        <form>
          <h1 style={{ textAlign: "center" }}>Manufacturer</h1>
          <input type="text" placeholder="Name" onChange={setName} required />
          <input
            type="email"
            placeholder="Email id"
            // onChange={(event) => setManufacturer(event.target.value)}
            onChange={setEmail}
            required
          />
          <input
            type="text"
            placeholder="Aadhar No"
            // onChange={(event) => setManufacturer(event.target.value)}
            onChange={setAadhaar}
            required
          />
          <input
            type="password"
            placeholder="Password"
            // onChange={(event) => setManufacturer(event.target.value)}
            onChange={setPassword}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            onChange={setConfimPassword}
            required
            // onChange={(event) => setManufacturer(event.target.value)}
          />
          <br />
          <br />
          <button onClick={validate}>Sign Up</button>
        </form>
        {/* </body> */}
      </div>
    );
  }
}

export function ManagersWithRouter(props) {
  const navigate = useNavigate();
  return <Managers navigate={navigate} />;
}

export default Managers;
