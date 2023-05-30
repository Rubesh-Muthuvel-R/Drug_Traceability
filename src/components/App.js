import React, { useState, Component } from "react";
import "./App.css";
// import Navbar from "./Home";
import Web3 from "web3";
// import Home from "./Home";
import RoutePages from "./RoutePages";
import Dummy from "../truffle_abis/dummy.json";
import Dashboard from "../pages/Dashboard";

class App extends Component {
  // async componentWillMount() {
  //   await this.loadWeb3();
  //   await this.loadBlockChainData();
  // }

  // async loadWeb3() {
  //   //ethereum - metamask
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     await window.ethereum.request({
  //       method: "eth_accounts",
  //     });
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     window.alert("No ethereum browser detected! Check out metamask.");
  //   }
  // }

  // async loadBlockChainData() {
  //   const web3 = window.web3;
  //   const account = await web3.eth.getAccounts();
  //   this.state.account = account[0];
  // }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     account: "",
  //     val: 0,
  //   };
  // }
  //     isLoggedIn: false,
  //   };
  //   this.handleLogin = this.handleLogin.bind(this);
  // }

  // handleLogin() {
  //   this.setState({
  //     isLoggedIn: true,
  //   });
  // }

  render(children) {
    return (
      <div>
        {/* <Navbar account={this.state.account}/> */}
        <RoutePages />
      </div>
    );
  }
}

export default App;
