import { useState } from "react";
import fb from '../assets/icons/Facebook.png';
import gg from '../assets/icons/Google.png';
import li from '../assets/icons/LinkedIn.png';
import '../style/login.css'

const Login = () => {

    const handleChange= (e)=>{
        console.log('do stuff')
    }
    return (
        <div>
            <div className="aTitle">SCHOLA</div>
            <div className="nge">Next Gen Education</div>
            <form>
            <input className='loginUsername' placeholder='Username' onChange={handleChange}></input>
            <input className='loginPassword' placeholder='Password' onChange={handleChange}></input>
            <div className="way" >Or log in with</div>
            <div className="loginImages" >
                <img src={gg} alt="Google icon"></img>
                <img src={fb} alt="Facebook icon"></img>
                <img src={li} alt="LinkedIn icon"></img>
            </div>
            <div className="logButton">Login</div>
            </form>
            <div> </div>
        <div className="oldmember">Not a member? <div className="toLogin"> Sign-up here</div></div>

            <div className="unpw">Forgot username/password?</div>
        </div>
    )
}

export default Login;