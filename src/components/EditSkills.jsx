import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import '../style/editskill.css'

const EditSkills = () =>{

    const [custSkill, setCustSkill] = useState("")
    const [addskills, setSkills] = useState(
        ['Math','Science','History','Accounting','Marketing','Finance','Coding','HTML','Spanish']
    )
    const [removeSkill, setRemoveSkill] = useState([])
    const [nButtonClass, setNbuttonClass] = useState("nextButtongrey")

    const addSkill = (e) =>{
        setRemoveSkill([...removeSkill, e] )
        setSkills((current)=> current.filter((skill)=>skill !== e))
    }
    const remSkill = (e) =>{
        setSkills([...addskills, e] )
        setRemoveSkill((current)=> current.filter((skill)=>skill !== e))
    }
    const handleChange = (e) =>{
        setCustSkill(e.target.value)
    }
    const addCustom= (skill)=>{
        setRemoveSkill([...removeSkill, skill] )
    }
    useEffect(()=>{
        console.log("useEffecting")
        if(removeSkill.length >= 1){
            setNbuttonClass("nextButton")
        }else {
            setNbuttonClass("nextButtongrey")

        }

    },[removeSkill])

    return (
    <div className="eSkills">
        <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className="skills" id="topskill">
            
        <div id="skilltitle">Skillsets</div>
            <div className="cusSkill">
                <input className="customSkill" name="custskill" onChange={handleChange} value={custSkill}></input>
                <div id="bigCross" onClick={()=>addCustom(custSkill)}></div>
            </div>
            <div className="skillsBox">{addskills.map((skil, i)=>(
        
            <div className="nSkill" key={i} ><div className="skill">{skil}</div><div name={skil} className="lilcross" onClick={()=>addSkill(skil)}></div></div>
            
            
            ))}
            </div>
        </div>
        <div className="skills">
            <div className="skillsBox">{removeSkill.map((skil, i)=>(
                <div className="rSkill" key={i} name={skil}><div className="skill">{skil}</div><div className="lilminus" onClick={()=>remSkill(skil)}></div></div>
                ))}
            </div>
        </div>

        <div className="buttons">
            <div className={nButtonClass}> <div className='nextText'>Next</div> </div>
            <div className="skipButton"><div>Skip</div></div>
        </div>
        <div className="oldmember">Already a member? <div className="toLogin"> Login here</div></div>


    </div>
    )
}

export default EditSkills
