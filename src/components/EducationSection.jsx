import OpenIcon from '../assets/open.svg';
import '../styles/section.css';
import Education from './Education';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function EducationSection( { education, setEducation }) {
  const [visible, setVisible] = useState(true);
  const addEducation = () => {
    const newEducation = {
      id: nanoid(),
      university: "",
      location: "",
      name: "",
      date: "" 
    }
    setEducation([...education, newEducation])
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
            university={e.university}
            education={education}
            location={e.location}
            name={e.name}
            date={e.date}
            setEducation={setEducation}
          />
        })}
      </div>
      <button type='button' className='button add-button' onClick={() => addEducation()}>+ Add Education</button>
    </section>
  )
}