import OpenIcon from '../assets/open.svg';
import '../styles/section.css';
import Project from './Project';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export default function ProjectsSection( { projects, setProjects }) {
  const [visible, setVisible] = useState(true);
  const addProject = () => {
    const newProject = {
      id: nanoid(),
      name: "",
      date: "",
      frameworks: "",
      descriptions: [{
        id: nanoid(),
        description: ""
      }]
    }
    setProjects([...projects, newProject])
  }


  return (
    <section className='section-layout'>
      <div className="drop-down" onClick={() => setVisible(!visible)}>
        <h1>Projects</h1>
        <img src={OpenIcon} alt="" className={visible ? "arrow": ""}/>
      </div>
      <div className={`personal-form ${visible ? "": "hide"}`}>
        {projects.map(project => {
          return <Project
            key={project.id}
            id={project.id}
            name={project.name}
            date={project.date}
            frameworks={project.frameworks}
            descriptions={project.descriptions}
            projects={projects}
            setProjects={setProjects}
          />
        })}
      </div>
      <button type='button' className='button add-button' onClick={() => addProject()}>+ Add Project</button>
    </section>
  )
}