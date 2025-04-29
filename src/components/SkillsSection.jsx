import '../styles/SkillsSection.css';
import OpenIcon from '../assets/open.svg';
import Skills from './Skills';
import { useState } from 'react';

export default function SkillsSection({ skills, setSkills }) {
  // individual visibility state for each personal
  const [visible, setVisible] = useState(true);

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
      
    </section>
  )
}