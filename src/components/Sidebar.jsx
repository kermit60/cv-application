import '../styles/sidebar.css'
import Personal from './Personal'
import SkillsSection from './SkillsSection'
import Education from './Education'

export default function Sidebar({
  info, setInfo,
  skills, setSkills,
  education, setEducation,
  experiences, setExperience,
  projects, setProjects
}) {
  return (
    <div className="sidebar">
      <Personal info={info} setInfo={setInfo}/>
      <SkillsSection skills={skills} setSkills={setSkills}/>
      
      <Education education={education} setEducation={setEducation}/>
      <Personal info={info} setInfo={setInfo}/>
      

    </div>
  )
}