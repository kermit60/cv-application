import OpenIcon from '../assets/open.svg';
import '../styles/section.css';
import Experience from './Experience';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function ExperienceSection( { experiences, setExperience }) {
  const [visible, setVisible] = useState(true);
  const addExperience = () => {
    const newExperience = {
      id: nanoid(),
      title: "",
      company: "",
      location: "",
      date: "",
      descriptions: [{
        id: nanoid(),
        description: ""
      }]
    }
    setExperience([...experiences, newExperience])
  }


  return (
    <section className='section-layout'>
      <div className="drop-down" onClick={() => setVisible(!visible)}>
        <h1>Experiences</h1>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""}/>
      </div>
      <div className={`personal-form ${visible ? "": "hide"}`}>
        {experiences.map(experience => {
          return <Experience
            key={experience.id}
            id={experience.id}
            title={experience.title}
            company={experience.company}
            location={experience.location}
            date={experience.date}
            descriptions={experience.descriptions}
            experiences={experiences}
            setExperience={setExperience}
          />
        })}
      </div>
      <button type='button' className='button add-button' onClick={() => addExperience()}>+ Add Experience</button>
    </section>
  )
}