import { useState } from 'react'
import '../styles/sidebar.css'
import Personal from './Personal'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import ExperienceSection from './ExperienceSection'

export default function Sidebar({
  info, setInfo,
  darkMode, setDarkMode,
  sectionOrder, setSectionOrder,
  skills, setSkills,
  education, setEducation,
  experiences, setExperience,
  projects, setProjects
}) {
  const [draggedSection, setDraggedSection] = useState(null)

  const sectionLabels = {
    personal: 'Personal Information',
    skills: 'Technical Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
  }

  const moveSection = (targetSection) => {
    if (!draggedSection || draggedSection === targetSection) return

    const nextOrder = sectionOrder.filter((section) => section !== draggedSection)
    const targetIndex = nextOrder.indexOf(targetSection)
    nextOrder.splice(targetIndex, 0, draggedSection)
    setSectionOrder(nextOrder)
  }

  const renderSection = (section) => {
    const content = {
      personal: <Personal info={info} setInfo={setInfo} />,
      skills: <SkillsSection skills={skills} setSkills={setSkills} />,
      experience: <ExperienceSection experiences={experiences} setExperience={setExperience} />,
      projects: <ProjectsSection projects={projects} setProjects={setProjects} />,
      education: <EducationSection education={education} setEducation={setEducation} />,
    }[section]

    return (
      <div
        key={section}
        className={`editor-section-shell ${draggedSection === section ? 'is-dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault()
          moveSection(section)
        }}
        onDragEnd={() => setDraggedSection(null)}
      >
        <div className="section-drag-bar">
          <span
            className="drag-handle"
            draggable
            onDragStart={() => setDraggedSection(section)}
            aria-label={`Drag to move ${sectionLabels[section]}`}
            title={`Drag to move ${sectionLabels[section]}`}
          >
            ⋮⋮
          </span>
          <span>{sectionLabels[section]}</span>
        </div>
        {content}
      </div>
    )
  }

  const downloadCV = () => {
    window.print();
    setTimeout(() => {
      document.title = info.name ? info.name + " Resume" : "";
    }, 100);
  };

  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <div className="brand-mark">CV</div>
        <div>
          <p className="eyebrow">Workspace</p>
          <h1 className="brand-name">ResumeForge</h1>
        </div>
        <button
          type="button"
          className="theme-toggle"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☼' : '☾'}
        </button>
      </header>
      <div className="parser-intro">
        <div>
          <p className="eyebrow">Parsed resume</p>
          <h2>Refine your story</h2>
          <p>Review the extracted details, then shape them into a polished CV.</p>
        </div>
      </div>
      <div className='download-button'>
        <button type='button' className='button primary-button' onClick={downloadCV}>
        <svg className='download' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>
          Export CV
        </button>
      </div>
      <div className="editor-sections">
        {sectionOrder.map(renderSection)}
      </div>
    </div>
  )
}