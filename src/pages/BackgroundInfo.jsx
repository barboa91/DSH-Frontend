import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import "../style/backgroundinfo.css"
import truth from '../assets/icons/truthfinder.svg'

const BackgroundInfo = () =>{
    const navigate = useNavigate()

    const iState = {
        jTitle:"",
        education:"",
        degree:"",
        licencepic:"",
        selfie:"",
        city:"",
        state:"",
    }
    const [valid, setValid]  = useState(false)
    const [nButtonClass, setNbuttonClass] = useState("nextButtongrey")
    const [bgInfo, setbgInfo] = useState(iState)
    const handleChange = (e) => {
        setbgInfo({ ...bgInfo, [e.target.name]: e.target.value });
        checkValid()

    }

    const checkValid=()=>{
        bgInfo.jTitle.length && bgInfo.city.length && bgInfo.state.length ? setValid(true) : setValid(false)

        console.log(bgInfo)
    }
    useEffect(()=>{
        checkValid()
        valid ? setNbuttonClass("nextButton") : setNbuttonClass("nextButtongrey");
    },[bgInfo,valid])

    return (
    <div>
         <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className='genInfo'>
            <input className='jTitle' name='jTitle' onChange={handleChange} placeholder="Job title" value={bgInfo.jTitle}></input>
            <input className='education' name='education' onChange={handleChange} value={bgInfo.education}placeholder="School"></input>
            <input className='degree' name='degree' onChange={handleChange} value={bgInfo.degree}placeholder="Degree"></input>

            <div className="backgroundCheck"><div>Begin Background check through</div><img className="truthlogo" src={truth} alt="tf logo"/></div>
            <div className="pix">
                <input className='licencepic' name= 'licencepic' onChange={handleChange} value={bgInfo.licencepic} placeholder="Upload Drivers Licence"></input>
                <input className='selfie' type="selfie"name='selfie' onChange={handleChange} value={bgInfo.selfie} placeholder="Selfie Photo Verification"></input>
            </div>
            <div className="location">
                <input className='city' name='city' onChange={handleChange} value={bgInfo.city} placeholder="Selfie Photo Verification"></input>
                <input className='state' name='state' onChange={handleChange} value={bgInfo.state} placeholder="State"></input>
            </div>
        </div>
        <div className="buttons">
            <div className={nButtonClass} onClick={()=>navigate('/landing')}> <div className='nextText'>Get Started</div> </div>
            <div className="skipButton" onClick={()=>navigate('/landing')}><div >Skip</div></div>
        </div>
    </div>
    )

}

export default BackgroundInfo 