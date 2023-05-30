import React, { Component } from "react";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import manu from "./manu.jpg";
import supp from "./supp.jpg";
import cus from "./cus.jpg";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar fixed-top shadow p-0"
        style={{ backgroundColor: "black", height: "50px" }}
      >
        <Link
          to="/Home"
          style={{ color: "white", fontSize: "24px", paddingLeft: "5%" }}
        >
          Drug Tracability
        </Link>
      </nav>

      <h2 className="mt-5 text-center mb-5">Pharmacy Supply Chain</h2>
      <div className="container card-wrapper d-flex">
        <div className="card">
          <img
            src={manu}
            className="card-img-top"
            alt="..."
            height="200px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Manufacturer</h5>
            <p className="card-text">
              Pharmacy manufacturers play a critical role in the healthcare
              industry, as their products are essential for the treatment and
              prevention of various medical outcomes.They must adhere to strict
              regulatory requirements and quality standards.
            </p>

            <button
              onClick={() => navigate("/Manus")}
              className="button btn btn-primary"
            >
              Signup
            </button>
            {/* <br />
            <br /> */}
            <button
              onClick={() => navigate("/Manul")}
              className="button btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={supp}
            className="card-img-top"
            alt="..."
            height="200px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Supplier</h5>
            <p className="card-text">
              Pharmacy suppliers offer a wide range of products and
              services.With the rise of e-commerce and online pharmacies, many
              pharmacy suppliers now offer online ordering and delivery services
              to make it easier for pharmacies to get the supplies they need
            </p>
            <button
              onClick={() => navigate("/Suppliers")}
              className="button btn btn-primary"
            >
              Signup
            </button>
            {/* <br />
            <br /> */}
            <button
              onClick={() => navigate("/Supplierl")}
              className="button btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>

        <div className="card">
          <img
            src={cus}
            className="card-img-top"
            alt="..."
            height="200px"
            width="200px"
          />
          <div className="card-body">
            <h5 className="card-title">Customer</h5>
            <p className="card-text">
              As pharmacy customers, it's important to keep track of all
              medications and supplements being taken, report any adverse
              reactions or side effects to healthcare providers, and take
              medications as directed to achieve optimal health outcomes.
            </p>
            <button
              onClick={() => navigate("/Customers")}
              className="button btn btn-primary"
            >
              Signup
            </button>
            {/* <br />
            <br /> */}
            <button
              onClick={() => navigate("/Customerl")}
              className="button btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
