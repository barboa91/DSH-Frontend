import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import React from "react";
import '../style/editskill.css'

const EditSkills = () =>{
    const [addskills, setSkills] = useState(
        ['Math','Science','History','Accounting','Marketing','Finance','Coding','HTML','Spanish']
    )
    const [removeSkill, setRemoveSkill] = useState([])

    const addSkill = (e) =>{
        console.log(e)
        setRemoveSkill([...removeSkill, e] )
        
        setSkills((current)=> current.filter((skill)=>skill !== e))
    }
    const remSkill = () =>{

    }

    return (
    <div className="eSkills">
        <div className='title'>
            <div className='wTitle'>WELCOME TO</div>
            <div className='aTitle'>SCHOLA</div>
        </div>
        <div className="skills">
            <div id="skilltitle">Skillsets</div>
            <div className="customSkill"></div>
            <div className="skillsBox">{addskills.map((skil, i)=>(
            
            <div className="nSkill" key={i} ><div className="skill">{skil}</div><div name={skil} className="lilcross" onClick={()=>addSkill(skil)}></div></div>
            
            
            ))}
            </div>
        </div>
        <div className="skills">
            <div className="skillsBox">{removeSkill.map((skil, i)=>(
            
            <div className="nSkill" key={i} name={skil}><div className="skill">{skil}</div><div className="lilminus" onClick={remSkill}></div></div>
            
            
            ))}
            </div>
        </div>



    </div>
    )
}

export default EditSkills
