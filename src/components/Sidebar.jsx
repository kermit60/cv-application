import '../styles/sidebar.css'
import Personal from './Personal'

export default function Sidebar({
  info, setInfo,
  skills, setSkills,
  education, setEducation,
  experiences, setExperience,
  projects, setProjects
}) {
  return (
    <div id="sidebar">
      <Personal info={info} setInfo={setInfo}/>

    </div>
  )
}