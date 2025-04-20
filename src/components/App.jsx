import { useState } from 'react'
import Sidebar from './Sidebar.jsx'
import Resume from './Resume.jsx'
import '../styles/App.css'
import { personalObject } from '../data.jsx'
import { educationTemp } from '../data.jsx'
import { skillsTemp } from '../data.jsx'
import { experiencesTemp } from '../data.jsx'
import { projectsTemp } from '../data.jsx'

function App() {
  // set a temp 
  const [info, setInfo] = useState(personalObject);
  const [skills, setSkills] = useState(skillsTemp);
  const [education, setEducation] = useState(educationTemp)
  const [experiences, setExperience] = useState(experiencesTemp)
  const [projects, setProjects] = useState(projectsTemp)
  

  return (
    <div className="app">
      <Sidebar info={info} setInfo={setInfo} 
               skills={skills} setSkills={setSkills}
               education={education} setEducation={setEducation}
               experiences={experiences} setExperience={setExperience}
               projects={projects} setProjects={setProjects}
      />
      <Resume info={info}
              skills={skills}
              education={education}
              experiences={experiences} 
              projects={projects}
      />
    </div>
  )
}

export default App
