import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import DataContext from "./DataContext";
import "../style/register.css";
import NavBar from "./NavBar";

const Register = () => {
  const iState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confPass: "",
  };

  const [uInfo, setuInfo] = useState(iState);

  const handleChange = (e) => {
    setuInfo({ ...uInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="registerPage">
      <div className="title">
        <div className="wTitle">WELCOME TO</div>
        <div className="aTitle">SCHOLA</div>
      </div>
      <div className="genInfo">
        <input
          className="fName"
          name="fName"
          onChange={handleChange}
          value={uInfo.fName}
          placeholder="First Name"></input>
        <input
          className="lName"
          name="lName"
          onChange={handleChange}
          value={uInfo.lName}
          placeholder="Last Name"></input>
        <input
          className="email"
          name="email"
          onChange={handleChange}
          value={uInfo.email}
          placeholder="e-Mail"></input>
        <input
          className="regPass"
          name="password"
          onChange={handleChange}
          value={uInfo.password}
          placeholder="Password"></input>
        <input
          className="confPass"
          name="city"
          onChange={handleChange}
          value={uInfo.confPass}
          placeholder="Confirm Password"></input>
      </div>
      <div className="nextButton">Next</div>

      <NavBar />
    </div>
  );
};

export default Register;
