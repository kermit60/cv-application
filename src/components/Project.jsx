import { useState } from 'react';
import { nanoid } from 'nanoid';
import OpenIcon from '../assets/open.svg';
import '../styles/Skills.css'
import '../styles/notes-section.css'

export default function Project({
  id,
  name,
  date,
  frameworks,
  descriptions,
  projects,
  setProjects,
}) {
  const [visible, setVisible] = useState(true);
  const deepCopy = [...projects];
  const descriptionsCopy = [...descriptions]

  const changeProjects = (newContent, category) => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i][category] = newContent;
      }
    }
    setProjects(deepCopy);
  }

  const changeDescription = (id, newResponsibility) => {
    for (let i = 0; i < descriptionsCopy.length; ++i) {
      if (descriptionsCopy[i].id === id) {
        descriptionsCopy[i]["description"] = newResponsibility;
      }
    } 
    deepCopy[descriptions] = descriptionsCopy;
    setProjects(deepCopy);
  }

  const deleteProjects = (id) => {
    for (let i = 0; i < projects.length; ++i) {
      if (projects[i].id === id) {
        deepCopy.splice(i, 1);
      }
    }
    setProjects(deepCopy);
  }

  const deleteDescription = (index) => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        for (let j = 0; j < descriptionsCopy.length; ++j) {
          if (deepCopy[i]['descriptions'][j].id === index) {
            descriptionsCopy.splice(j, 1);
            deepCopy[i]['descriptions'] = descriptionsCopy;
            setProjects(deepCopy);
          }
        }
      }
    } 
  }

  const addDescription = () => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i]['descriptions'].push({id: nanoid(), description: ""}) 
        setProjects(deepCopy);
      }
    }
  }

  return (
    <div>
      <div className='skills-heading' onClick={() => setVisible(!visible)}>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""} />
        <div className=''>Project Name</div>
      </div>
      <form className={`skills-form ${visible ? "": "hide"}`}>
        <input 
          type="text" 
          value={name}
          onChange={(e) => changeProjects(e.target.value, "name")}
          placeholder='Gitlytics'
        />
        <label className='skill-category'>Frameworks/Technologies</label>
          <input 
            type="text" 
            value={frameworks}
            onChange={(e) => changeProjects(e.target.value, "frameworks")}
            placeholder='JavaScript, Express.JS, React, MongoDB, Node.JS'
          />
        <label className='skill-category'>Period/date</label>
          <input 
            type="text" 
            value={date}
            onChange={(e) => changeProjects(e.target.value, "date")}
            placeholder='June 2020 - Present'
          />
        
        <label className='skill-category'>Descriptions</label>
        {
          descriptions.map(d => {
            return <div key={d.id} className='description-section' >
              <textarea
                className='input'
                type="text" 
                value={d.description}
                onChange={(e) => changeDescription(d.id, e.target.value)}
                placeholder='Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze Github data'
              />

              <button type='button' className='button' onClick={() => deleteDescription(d.id)}>–</button>
            </div>
          })
        }
        <button type="button" className='button add' onClick={() => addDescription()}>+ Add Description</button>
        <button type="button" className='button delete-button' onClick={() => deleteProjects(id)}>- Delete</button>
      </form>
    </div>
    
  )
}