import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import React  from 'react'
import DataContext from './DataContext'

const Login = () =>{

    //Login Logic

    const initialState = {
        username: "",
        password: "",
      };

    const {logUser, setUser} = useContext(DataContext)
    const [loggingUser, setLoggingUser] = useState(initialState);

    const handleChange = (e) => {
        setLoggingUser({ ...loggingUser, [e.target.name]: e.target.value });
    }
    const handleLogin = async(e) =>{
        e.preventDefault();
        try {
          const response = await logUser(loggingUser);
          navigate("/main");
        } catch (error) {

          console.log(error);
        }
      
    }
    const handleSignUp = () =>{

    }

  
    const navigate = useNavigate()




    return (
        <div className="Login">
            <div className='logo-signup'></div>
            <div className="loginBox">
                <form>
                <div className="username"><input className="username" type="username" name="username" onChange={handleChange} value={loggingUser.username} required placeholder="username"></input></div>
                <div className="password"><input className="pass" type="password" name="password" onChange={handleChange} value={loggingUser.password} required placeholder="Password"></input></div>
                <div className="fPass">Forgot Password?</div>
                <div className="logButt" onClick={handleLogin}>Log in</div>
                <div className="signButt" onClick={handleSignUp}>Sign up</div>
                </form>
                <div className="socialSign" onClick={()=>navigate('/main')}>
                    <div className="fb"/>
                    <div className="ig"/>
                    <div className="gg"/>
                </div>
            </div>
        </div>
    )
}
export default Login