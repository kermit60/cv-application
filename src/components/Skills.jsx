import '../styles/Skills.css'
import { useState } from 'react';
import OpenIcon from '../assets/open.svg';

export default function Skills( {id, skills, skillCategory, skillContent, setSkills} ) {
  const [visible, setVisible] = useState(true);
  const deepCopy = [...skills];

  const changeCategory = (newCategory, category) => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i][category] = newCategory;
      } 
    }
    setSkills(deepCopy);
  }
 
  // deletes skill by getting the id from array and removing it using splice
  const deleteSkill = () => {
    for (let i = 0; i < skills.length; ++i) {
      if (skills[i].id === id) {
        deepCopy.splice(i, 1);
      }
    }
    setSkills(deepCopy);
  }

  return (
    <div>
      <div className='skills-heading' onClick={() => setVisible(!visible)}>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""} />
        <div className=''>Skill Category: {skillCategory}</div>
      </div>
      <form className={`skills-form ${visible ? "": "hide"}`}>
        <input 
          type="text" 
          value={skillCategory}
          onChange={(e) => changeCategory(e.target.value, "skillCategory")}
          placeholder='Frameworks'
        />
        <label className='skill-category'>Skills</label>
          <input 
            type="text" 
            value={skillContent}
            onChange={(e) => changeCategory(e.target.value, "skillContent")}
            placeholder='React, Node.js, Express.js, Next.js'
          />
        <button type="button" className='button delete-button' onClick={() => deleteSkill()}>- Delete</button>
      </form>
    </div>
    
  )
}