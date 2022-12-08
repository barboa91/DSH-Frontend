import { useState } from "react";
import fb from '../assets/icons/Facebook.png';
import gg from '../assets/icons/Google.png';
import li from '../assets/icons/LinkedIn.png';

const Login = () => {
    return (
        <div>
        <h1>SCHOLA</h1>
        <h2>Next Gen Education</h2>
        <form>
        <input className='loginUsername' placeholder='Username' onChange={handleChange}></input>
        <input className='loginPassword' placeholder='Password' onChange={handleChange}></input>
        <hr>Or log in with</hr>
        <div className="loginImages">
            <img src={gg} alt="Google icon"></img>
            <img src={fb} alt="Facebook icon"></img>
            <img src={li} alt="LinkedIn icon"></img>
        </div>
        <button>Login</button>
        </form>
        <p>Not a member? Sign-up here</p>
        <div>Forgot username/password?</div>
        </div>
    )
}

export default Login;