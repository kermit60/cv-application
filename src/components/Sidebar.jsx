import '../styles/sidebar.css'
import Personal from './Personal'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ExperienceSection from './ExperienceSection'

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
      <ExperienceSection experiences={experiences} setExperience={setExperience}/>

      <EducationSection education={education} setEducation={setEducation}/>

    </div>
  )
}