import OpenIcon from '../assets/open.svg';
import '../styles/section.css';
import Education from './Education';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function EducationSection( { education, setEducation }) {
  const [visible, setVisible] = useState(true);
  const addEducation = () => {
    const newSkill = {
      id: nanoid(),
      skillCategory: "",
      skillContent: ""
    }
    setSkills([...skills, newSkill])
  }


  return (
    <section className='section-layout'>
      <div className="drop-down" onClick={() => setVisible(!visible)}>
        <h1>Education</h1>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""}/>
      </div>
      <div className={`personal-form ${visible ? "": "hide"}`}>
        {education.map(e => {
          return <Education 
            key={e.id}
            id={e.id}
            education={education}
            university={e.university}
            location={e.location}
            name={e.name}
            date={e.date}
          />
        })}
      </div>
      <button type='button' className='button add-button' onClick={() => addSkill()}>+ Add Education</button>
    </section>
  )
}