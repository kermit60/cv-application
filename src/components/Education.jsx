import { useState } from 'react';
import OpenIcon from '../assets/open.svg';
import '../styles/Skills.css'

export default function Education({
  id,
  university,
  education,
  location,
  name,
  date,
  setEducation
}) {
  const [visible, setVisible] = useState(true);
  const deepCopy = [...education];
  const changeEducation = (newContent, category) => {
    for (let i = 0; i < deepCopy.length; ++i) {
      if (deepCopy[i].id === id) {
        deepCopy[i][category] = newContent;
      }
    }
    setEducation(deepCopy);
  }

  const deleteEducation = () => {
    for (let i = 0; i < education.length; ++i) {
      if (education[i].id === id) {
        deepCopy.splice(i, 1);
      }
    }
    setEducation(deepCopy);
  }

  return (
    <div>
      <div className='skills-heading' onClick={() => setVisible(!visible)}>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""} />
        <div className=''>School/University</div>
      </div>
      <form className={`skills-form ${visible ? "": "hide"}`}>
        <input 
          type="text" 
          value={university}
          onChange={(e) => changeEducation(e.target.value, "university")}
          placeholder='Southwestern University'
        />
        <label className='skill-category'>Major/Field of Study</label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => changeEducation(e.target.value, "name")}
            placeholder='Bachelors of Arts in Computer Science'
          />
        <label className='skill-category'>Location/City</label>
          <input 
            type="text" 
            value={location}
            onChange={(e) => changeEducation(e.target.value, "location")}
            placeholder='Georgetown, TX'
          />
        <label className='skill-category'>Period/date</label>
          <input 
            type="text" 
            value={date}
            onChange={(e) => changeEducation(e.target.value, "date")}
            placeholder='Aug. 2018 - May 2021'
          />
        <button type="button" className='button delete-button' onClick={() => deleteEducation()}>- Delete</button>
      </form>
    </div>
    
  )
}