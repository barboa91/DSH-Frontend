import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import DataContext from "./DataContext";
import "../style/register.css";
import NavBar from "./NavBar";

<<<<<<< HEAD
const Register = () => {
  const iState = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    confPass: "",
  };
=======
const Register = () =>{
    const iState = {
        fName:"",
        lName:"",
        email:"",
        password:"",
        confpass:"",
    }
    const [cPass ,setCpass] = useState('confPass')
>>>>>>> d88c526a4470985da30e3019877b3170518d02c0

  const [uInfo, setuInfo] = useState(iState);

  const handleChange = (e) => {
    setuInfo({ ...uInfo, [e.target.name]: e.target.value });
  };

<<<<<<< HEAD
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
=======
    const handleChange = (e) => {


        setuInfo({ ...uInfo, [e.target.name]: e.target.value });

    }
    useEffect(()=>{
        // Check for bad password
            if(uInfo.confpass === uInfo.password){
                setCpass('confPass')
            }else{
                setCpass('badConfPass')
            }
    },[uInfo])

    return(
    <div className='registerPage'>
        <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className='genInfo'>
            <input className='fName' name='fName' onChange={handleChange} value={uInfo.fName} placeholder="First Name"></input>
            <input className='lName' name='lName' onChange={handleChange} value={uInfo.lName}placeholder="Last Name"></input>
            <input className='email' name= 'email' onChange={handleChange} value={uInfo.email} placeholder="e-Mail"></input>
            <input className='regPass' type="password"name='password' onChange={handleChange} value={uInfo.password} placeholder="Password"></input>
            <input className={cPass} type="password" name='confpass' onChange={handleChange} value={uInfo.confPass} placeholder="Confirm Password"></input>
        </div>
        <div className='nextButton'><div className='nextText'>Next</div></div>
>>>>>>> d88c526a4470985da30e3019877b3170518d02c0

export default Register;
