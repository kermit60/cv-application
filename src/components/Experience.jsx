import { useState } from 'react';
import { nanoid } from 'nanoid';
import OpenIcon from '../assets/open.svg';
import '../styles/Skills.css'
import '../styles/notes-section.css'

export default function Experience({
  id,
  title,
  company,
  location,
  date,
  descriptions,
  experiences,
  setExperience,
}) {
  const [visible, setVisible] = useState(true);
  const deepCopy = [...experiences];
  const descriptionsCopy = [...descriptions]

  const changeExperiences = (newContent, category) => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i][category] = newContent;
      }
    }
    setExperience(deepCopy);
  }

  const changeResponsibility = (id, newResponsibility) => {
    for (let i = 0; i < descriptionsCopy.length; ++i) {
      if (descriptionsCopy[i].id === id) {
        descriptionsCopy[i]["description"] = newResponsibility;
      }
    } 
    deepCopy[descriptions] = descriptionsCopy;
    setExperience(deepCopy);
  }

  const deleteExperiences = (id) => {
    for (let i = 0; i < experiences.length; ++i) {
      if (experiences[i].id === id) {
        deepCopy.splice(i, 1);
      }
    }
    setExperience(deepCopy);
  }

  const deleteResponsibility = (index) => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        for (let j = 0; j < descriptionsCopy.length; ++j) {
          if (deepCopy[i]['descriptions'][j].id === index) {
            descriptionsCopy.splice(j, 1);
            deepCopy[i]['descriptions'] = descriptionsCopy;
            setExperience(deepCopy);
          }
        }
      }
    } 
  }

  const addResponsibility = () => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i]['descriptions'].push({id: nanoid(), description: ""}) 
        setExperience(deepCopy);
      }
    }
  }

  return (
    <div>
      <div className='skills-heading' onClick={() => setVisible(!visible)}>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""} />
        <div className=''>Job Title</div>
      </div>
      <form className={`skills-form ${visible ? "": "hide"}`}>
        <input 
          type="text" 
          value={title}
          onChange={(e) => changeExperiences(e.target.value, "title")}
          placeholder='Undergraduate Research Assistant'
        />
        <label className='skill-category'>Company</label>
          <input 
            type="text" 
            value={company}
            onChange={(e) => changeExperiences(e.target.value, "company")}
            placeholder='University of Waterloo'
          />
        <label className='skill-category'>Location/City</label>
          <input 
            type="text" 
            value={location}
            onChange={(e) => changeExperiences(e.target.value, "location")}
            placeholder='Kitchener, Waterloo'
          />
        <label className='skill-category'>Period/date</label>
          <input 
            type="text" 
            value={date}
            onChange={(e) => changeExperiences(e.target.value, "date")}
            placeholder='June 2020 - Present'
          />
        
        <label className='skill-category'>Responsibilities</label>
        {
          descriptions.map(responsibility => {
            return <div key={responsibility.id} className='description-section' >
              <textarea
                className='input'
                type="text" 
                value={responsibility.description}
                onChange={(e) => changeResponsibility(responsibility.id, e.target.value)}
                placeholder='Developed a full-stack web application using Flash, React, PostgreSQL and Docker to analyze Github data'
              />

              <button type='button' className='button' onClick={() => deleteResponsibility(responsibility.id)}>–</button>
            </div>
          })
        }
        <button type="button" className='button add' onClick={() => addResponsibility()}>+ Add Responsibility</button>
        <button type="button" className='button delete-button' onClick={() => deleteExperiences(id)}>- Delete</button>
      </form>
    </div>
    
  )
}