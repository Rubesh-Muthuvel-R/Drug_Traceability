import React from "react";
import "./Signup.css";

export default function Suppliers() {
  return (
    <div>
      {/* <body> */}
      <form>
        <h1 style={{ textAlign: "center" }}>Supplier</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email id" />
        <input type="text" placeholder="Aadhar No" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
        <br />
        <br />
        <button>Sign Up</button>
      </form>
      {/* </body> */}
    </div>
  );
}
