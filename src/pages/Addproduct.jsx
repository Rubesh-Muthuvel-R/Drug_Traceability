import React, { useState } from "react";
import "../components/Signup.css";
import Web3 from "web3";
import Dummy from "../truffle_abis/dummy.json";

function Addproduct() {
  const initial = {
    name: "",
    manufacuring_date: "",
    expiry_date: "",
    quantity: 0,
    mrppt: 0,
    account: "",
  };

  const [state, change] = useState(initial);

  const setName = (event) => {
    state.name = event.target.value;
  };

  const setManudate = (event) => {
    state.manufacuring_date = event.target.value;
  };

  const setExpdate = (event) => {
    state.expiry_date = event.target.value;
  };

  const setQuan = (event) => {
    state.quantity = event.target.value;
  };

  const setMrp = (event) => {
    state.mrppt = event.target.value;
  };

  const addProduct = async (e) => {
    e.preventDefault();
    // console.log(10);
    const web3 = new Web3(Web3.givenProvider);
    const accounts = await web3.eth.getAccounts();
    state.account = accounts[0];
    const netId = await web3.eth.net.getId();
    // console.log(this.state.account);
    //load contract
    const dummy = Dummy.networks[netId];
    const manu = new web3.eth.Contract(Dummy.abi, dummy.address);
    console.log(manu);
    // const web3 = new Web3(window.web3.currentProvider);
    // const netId = new web3.eth.net.getId();
    // const contract = this.getContract();
    const val = await manu.methods
      .addProduct(
        state.name,
        state.manufacuring_date,
        state.expiry_date,
        state.quantity,
        state.mrppt
      )
      .send({ from: state.account });
    // await manu.methods.removeManufacturer(0).call();
    // console.log(val);
  };
  return (
    <div>
      <form onSubmit={addProduct}>
        <h1 style={{ textAlign: "center" }}>Add product</h1>
        <input type="text" placeholder="Name" onChange={setName} />
        <input
          type="date"
          placeholder="Manufacturing_date"
          onChange={setManudate}
        />
        <input type="date" placeholder="Expiry_date" onChange={setExpdate} />
        <input type="text" placeholder="Quantity" onChange={setQuan} />
        <input type="text" placeholder="MRP/Tablet" onChange={setMrp} />
        <br />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Addproduct;
