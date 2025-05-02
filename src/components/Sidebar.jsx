import '../styles/sidebar.css'
import Personal from './Personal'
import SkillsSection from './SkillsSection'
import EducationSection from './EducationSection'
import ProjectsSection from './ProjectsSection'
import ExperienceSection from './ExperienceSection'
import DownloadIcon from '../assets/download.svg';

export default function Sidebar({
  info, setInfo,
  skills, setSkills,
  education, setEducation,
  experiences, setExperience,
  projects, setProjects
}) {

  const downloadCV = () => {
    window.print();
    setTimeout(() => {
      document.title = info.name ? info.name + " Resume" : "";
    }, 100);
  };

  const style = {
    backgroundColor: "green"
  }

  return (
    <div className="sidebar">
      <div className='download-button'>
        <button type='button' className='button' style={style} onClick={downloadCV}>
          <img className='download' src={DownloadIcon} alt="Download Icon" /> Download CV
        </button>
      </div>
      <Personal info={info} setInfo={setInfo}/>
      <SkillsSection skills={skills} setSkills={setSkills}/>
      <ExperienceSection experiences={experiences} setExperience={setExperience}/>
      <ProjectsSection projects={projects} setProjects={setProjects} />
      <EducationSection education={education} setEducation={setEducation}/>
    </div>
  )
}