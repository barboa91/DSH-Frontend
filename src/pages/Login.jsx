import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fb from '../assets/icons/Facebook.png';
import gg from '../assets/icons/Google.png';
import li from '../assets/icons/LinkedIn.png';
import '../style/login.css'

const Login = () => {
    const navigate = useNavigate()
    const iState = {
        username:"",
        password:"",
    }

    const [userPass,setUserPass] = useState(iState)
    const [valid, setValid] = useState(false)
    const [logButtonClass, setlogbuttonClass] = useState("logButtongrey")


    const handleChange= (e)=>{
        setUserPass({...userPass,[e.target.name]: e.target.value})
        console.log('do stuff')
    }
    const checkValid = () =>{
        valid ? setlogbuttonClass('logButton') : setlogbuttonClass('logButtongrey')
    }
    useEffect(()=>{
        userPass.username.length && userPass.password.length ? setValid(true) :setValid(false)
        checkValid()

    },[userPass,valid])
    return (
        <div>
            <div className="logTitle">SCHOLA</div>
            <div className="nge">Next Gen Education</div>
            <form>
            <input className='loginUsername' name='username' placeholder='Username' onChange={handleChange}></input>
            <input className='loginPassword' name='password' placeholder='Password' type="password" onChange={handleChange}></input>

            
            <div className="way" >Or log in with</div>
            <div className="loginImages" >
                <img src={gg} alt="Google icon"></img>
                <img src={fb} alt="Facebook icon"></img>
                <img src={li} alt="LinkedIn icon"></img>
            </div>
            <div className={logButtonClass}><div className="logText">Login</div></div>
            </form>
            <div> </div>
        <div className="oldmember">Not a member? <div className="toLogin"  onClick={()=>{navigate('/register')}}> Sign-up here</div></div>

            <div className="unpw">Forgot username/password?</div>
        </div>
    )
}

export default Login;