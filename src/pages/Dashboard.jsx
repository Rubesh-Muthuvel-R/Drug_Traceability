import React, { Component } from "react";
import Web3 from "web3";
import Dummy from "../truffle_abis/dummy.json";

export default class Dashboard extends Component {
  async UNSAFE_componentWillMount() {
    // await this.loadWeb3();
    await this.loadBlockChainData();
  }
  
  async loadWeb3() {
    //ethereum - metamask
    if (window.ethereum) {
      window.Web3 = new Web3(window.ethereum);
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
      } catch (error) {
        console.error(error);
      }
      // await window.ethereum.request({
      //   method: "eth_accounts",
      // });
    } else if (window.web3) {
      window.web3 = new Web3(window.Web3.currentProvider);
    } else {
      window.alert("No ethereum browser detected! Check out metamask.");
    }
  }

  async loadBlockChainData() {
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    this.state.account = account[0];
    const netId = await web3.eth.net.getId();
    console.log(this.state.account);
    //load contract
    const dummy = Dummy.networks[netId];
    const manu = new web3.eth.Contract(Dummy.abi, dummy.address);
    if (dummy) {
      // tether.methods.store(100).send({ from: this.state.account });
      // tether.methods.addManufacturer().call();
      // console.log(tether);
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
    this.create = this.create.bind(this);
  }

  //setting out n/w to 5777

  // async getContract() {
  //   const web3 = window.Web3;
  //   const netId = await web3.eth.net.getId();
  //   const dummy = Dummy.networks[netId];
  //   const contract = new Web3.eth.Contract(Dummy.abi, dummy.address);
  //   // return contract;
  //   return contract;
  // }
  create = async () => {
    // const web3 = window.Web3;
    const web3 = new Web3(Web3.givenProvider);
    const account = await web3.eth.getAccounts();
    this.state.account = account[0];
    const netId = await web3.eth.net.getId();
    // console.log(this.state.account);
    //load contract
    const dummy = Dummy.networks[netId];
    const manu = new web3.eth.Contract(Dummy.abi, dummy.address);
    // const web3 = new Web3(window.web3.currentProvider);
    // const netId = new web3.eth.net.getId();
    // const contract = this.getContract();
    const val = await manu.methods.totalManufacturers().call();
    console.log(val);
    // console.log(netId);
    //load contract
    // const dummy = Dummy.networks[netId];
    // const tether = this.getContract();
    // Web3.eth.Contract(Dummy.abi, dummy.address);
    // if (dummy) {
    // tether.methods.store(100).send({ from: this.state.account });
    //   let val = tether.methods.retrieve().call();
    //   // console.log(tether.methods.retrieve().call());
    // } else {
    //   window.alert("Particular contract not yet deployed");
    // }
  };
  render() {
    return (
      <div style={{ backgroundColor: "yellow" }}>
        <h1>Dashbaord</h1>
        <button onClick={this.create}>Click</button>
      </div>
    );
  }
}
