import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

export default function Managerl() {
  function highlight(e) {
    e.target.style.textDecoration = "underline";
  }

  function normal(e) {
    e.target.style.textDecoration = "none";
  }
  const navigate = useNavigate();
  return (
    <div>
      <form>
        <h1 style={{ textAlign: "center", color: "rgb(33, 57, 49)" }}>
          Manufacturer
        </h1>
        <br />
        <input type="text" name="user" placeholder="Email ID" />
        <br />
        <input type="text" name="pass" placeholder="Password" />
        <br />
        <br />
        <button onClick={() => navigate("/Mhome")}>Login</button>
        <br />
        <br />
        <p style={{ marginLeft: "90px", color: "rgb(33, 57, 49)" }}>
          New user?{" "}
          <a
            onClick={() => navigate("/Manus")}
            style={{ color: "rgb(71, 71, 8)", cursor: "pointer" }}
            onMouseOver={highlight}
            onMouseLeave={normal}
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
