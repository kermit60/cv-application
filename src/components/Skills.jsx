import '../styles/Skills.css'
import { useState } from 'react';
import OpenIcon from '../assets/open.svg';

export default function Skills( {id, skills, skillCategory, skillContent, setSkills} ) {
  const [visible, setVisible] = useState(true);

  const changeCategory = (newCategory) => {
    const deepCopy = [...skills];
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i]['skillCategory'] = newCategory;
      } 
    }
    setSkills(deepCopy);
  }
  const changeContent = (newContent) => {
    const deepCopy = [...skills]
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i]['skillContent'] = newContent;
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
          onChange={(e) => changeCategory(e.target.value)}
        />
        <label className='skill-category'>Skills</label>
          <input 
            type="text" 
            value={skillContent}
            onChange={(e) => changeContent(e.target.value)}
          />
        <button type="button" className='delete-button'>- Delete</button>
      </form>
    </div>
    
  )
}