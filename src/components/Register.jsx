import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import React  from 'react'
import DataContext from './DataContext'
import '../style/register.css'

const Register = () =>{
    const iState = {
        fName:"",
        lName:"",
        email:"",
        password:"",
        confpass:"",
    }
    const [cPass ,setCpass] = useState('confPass')
    const [uInfo, setuInfo] = useState(iState)
    const [nButtonClass, setNbuttonClass] = useState("nextButtongrey")
    const [valid, setValid]  = useState(false)
    const handleChange = (e) => {
        setuInfo({ ...uInfo, [e.target.name]: e.target.value });
        checkValid()

        // e.target.value.length < 1 ? setValid(false) : setValid(true) 
    }

    const checkValid=()=>{
        //console.log("in check Valid",uInfo)
        uInfo.confpass === uInfo.password && uInfo.fName.length && uInfo.lName.length && uInfo.email.length && uInfo.password.length && uInfo.confpass.length ? setValid(true) : setValid(false)

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
        <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className='genInfo'>
            <input className='fName' name='fName' onChange={handleChange} value={uInfo.fName} placeholder="First Name"></input>
            <input className='lName' name='lName' onChange={handleChange} value={uInfo.lName}placeholder="Last Name"></input>
            <input className='email' name= 'email' onChange={handleChange} value={uInfo.email} placeholder="Username"></input>
            <input className='regPass' type="password"name='password' onChange={handleChange} value={uInfo.password} placeholder="Password"></input>
            <input className={cPass} type="password" name='confpass' onChange={handleChange} value={uInfo.confPass} placeholder="Confirm Password"></input>
        </div>
        <div className="buttons">
            <div className={nButtonClass}> <div className='nextText'>Next</div> </div>
        </div>
        <div className="oldmember">Already a member? <div className="toLogin"> Login here</div></div>

    </div>)
}

export default Register