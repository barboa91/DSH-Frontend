import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import DataContext from "./DataContext";
import "../style/register.css";
import NavBar from "./NavBar";


const Register = (props) =>{

    const navigate = useNavigate();

    const iState = {
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        confpass:"",
    }
    const [cPass ,setCpass] = useState('confPass')
    const [uInfo, setuInfo] = useState(iState)
    const [nButtonClass, setNbuttonClass] = useState("nextButtongrey")
    const [valid, setValid]  = useState(false)

    const [teacherButton, setTeacherButton] = useState(false)

    const handleChange = (e) => {
        setuInfo({ ...uInfo, [e.target.name]: e.target.value });
        checkValid()
    }
    const registerUser = async() => {
        try {
            const configs = {
                method: "POST",
                body: JSON.stringify(uInfo),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const newUser = await fetch("https://dsh-backend.fly.dev/auth/register", configs);
            const parsedNewUser = await newUser.json();
            await props.setCurrentUserState(parsedNewUser);
            navigate("/editskills");
        } catch (err) {
            console.log(err);
        }
    }
    const checkValid=()=>{
        //console.log("in check Valid",uInfo)
        uInfo.confpass === uInfo.password && uInfo.firstName.length && uInfo.lastName.length && uInfo.username.length && uInfo.password.length && uInfo.confpass.length ? setValid(true) : setValid(false)
    }

    useEffect(()=>{
        // Check for bad password

            if(uInfo.confpass === uInfo.password){
                setCpass('confPass')
            }else{
                setCpass('badConfPass')
                setValid(false)
            }
            checkValid()
            console.log("in UE ", uInfo)
            console.log('Valid is ',valid)

            valid ? setNbuttonClass("nextButton") : setNbuttonClass("nextButtongrey");
    

    },[uInfo,valid])

    return(

    <div className='registerPage'>

        {teacherButton ? 


        <div>
        <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className='genInfo'>
            <input className='fName' name='firstName' onChange={handleChange} value={uInfo.firstName} placeholder="First Name"></input>
            <input className='lName' name='lastName' onChange={handleChange} value={uInfo.lastName}placeholder="Last Name"></input>
            <input className='email' name= 'username' onChange={handleChange} value={uInfo.username} placeholder="Username"></input>
            <input className='regPass' type="password"name='password' onChange={handleChange} value={uInfo.password} placeholder="Password"></input>
            <input className={cPass} type="password" name='confpass' onChange={handleChange} value={uInfo.confPass} placeholder="Confirm Password"></input>
        </div>
        <div className="buttons">
            <div className={nButtonClass} onClick={registerUser}> <div className='nextText'>Next</div> </div>
        </div>
        <div className="oldmember">Already a member? <div className="toLogin"> Login here</div></div>
        </div>
        :

        // Teacher or student Choice to get to the next page
        <div>
        <div className='startTitle'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className="nge">Next Gen Education</div>
        <div className="way">Who are you?</div>
        <div className="ima">I am a...</div>
        <div className="buttons">
        <div className="nextButton"><div className="nextText" onClick={()=>{setTeacherButton(true)}}>Student</div></div>
        <div className="nextButton"><div className="nextText" onClick={()=>{setTeacherButton(true)}} >Teacher</div></div>
        </div>
 


        </div>
        }

    </div>)
}

;
export default Register;
