import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";

const BackgroundInfo = () =>{

    const iState = {
        jTitle:"",
        education:"",
        licencepic:"",
        selfie:"",
        city:"",
        state:"",
    }
    const [bgInfo, setbgInfo] = useState(iState)
    const handleChange = (e) => {
        setbgInfo({ ...bgInfo, [e.target.name]: e.target.value });
    }

    return (
    <div>
         <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className='genInfo'>
            <input className='jTitle' name='jTitle' onChange={handleChange} placeholder="Job title" value={bgInfo.jTitle}></input>
            <input className='education' name='education' onChange={handleChange} value={bgInfo.education}placeholder="Degree"></input>
            <input className='licencepic' name= 'licencepic' onChange={handleChange} value={bgInfo.licencepic} placeholder="Upload Drivers Licence"></input>
            <input className='selfie' type="selfie"name='selfie' onChange={handleChange} value={bgInfo.selfie} placeholder="Selfie Photo Verification"></input>
            <input className='city' name='city' onChange={handleChange} value={bgInfo.city} placeholder="Selfie Photo Verification"></input>            <input className='state' name='state' onChange={handleChange} value={bgInfo.state} placeholder="State"></input>

        </div>
        <div className='nextButton'><div className='nextText'>Next</div></div>
    </div>
    )

}

export default BackgroundInfo 