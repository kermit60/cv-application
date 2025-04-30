import '../styles/SkillsSection.css';
import OpenIcon from '../assets/open.svg';
import Skills from './Skills';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function SkillsSection({ skills, setSkills }) {
  // individual visibility state for each personal
  const [visible, setVisible] = useState(true);
  const addSkill = () => {
    const newSkill = {
      id: nanoid(),
      skillCategory: "",
      skillContent: ""
    }
    setSkills([...skills, newSkill])
  }

  return (
    <section className="personal">
      <div className="drop-down" onClick={() => setVisible(!visible)}>
        <h1>Technical Skills</h1>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""}/>
      </div>
      <div className={`personal-form ${visible ? "": "hide"}`}>
        {skills.map(skill => {
          return <Skills key={skill.id} id={skill.id} skills={skills} skillCategory={skill.skillCategory} skillContent={skill.skillContent} setSkills={setSkills} />
        })}
        
      </div>
      <button type='button' className='button add-button' onClick={() => addSkill()}>+ Add skill</button>
    </section>
  )
}