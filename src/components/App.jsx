import { useEffect, useState } from 'react'
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
  const [editorWidth, setEditorWidth] = useState(400)
  const [darkMode, setDarkMode] = useState(false)
  const [sectionOrder, setSectionOrder] = useState([
    'personal',
    'skills',
    'experience',
    'projects',
    'education',
  ])

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!event.currentTarget.isResizing) return

      const availableWidth = window.innerWidth - 56 - 28
      const resumeMinWidth = window.innerWidth <= 1100 ? 400 : 520
      const maxEditorWidth = Math.max(320, Math.min(620, availableWidth - resumeMinWidth))
      const nextWidth = Math.min(Math.max(event.clientX - 28, 320), maxEditorWidth)
      setEditorWidth(nextWidth)
    }

    const handlePointerUp = (event) => {
      event.currentTarget.isResizing = false
      document.body.classList.remove('is-resizing')
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [])

  const startResize = () => {
    window.isResizing = true
    document.body.classList.add('is-resizing')
  }
  

  return (
    <div className={`app ${darkMode ? 'editor-dark' : ''}`} style={{ '--editor-width': `${editorWidth}px` }}>
      <Sidebar info={info} setInfo={setInfo}
               darkMode={darkMode} setDarkMode={setDarkMode}
               sectionOrder={sectionOrder} setSectionOrder={setSectionOrder}
               skills={skills} setSkills={setSkills}
               education={education} setEducation={setEducation}
               experiences={experiences} setExperience={setExperience}
               projects={projects} setProjects={setProjects}
      />
      <button
        type="button"
        className="splitter"
        aria-label="Resize editor and resume panels"
        onPointerDown={startResize}
      />
      <Resume info={info}
              skills={skills}
              education={education}
              experiences={experiences} 
              projects={projects}
              sectionOrder={sectionOrder}
      />
    </div>
  )
}

export default App
