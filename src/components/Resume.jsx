import '../styles/resume.css'

export default function Resume({
  info,
  skills,
  education,
  experiences,
  projects
}) {
  return (
    <section className='resume'>
      <section className='info'>
        <h1>{info.name}</h1>
        <div className='links'>
          <div className='phone-number'>{info.phoneNumber}</div>| 
          <div className='email'>{info.email}</div> | 
          <a href={info.linkedin} className='link'>{info.linkedin}</a> | 
          <a href={info.github} className='link'>{info.github}</a> 
        </div>
      </section>
      <section className='skills-section'>
        <h1 className='technical-skills'>TECHNICAL SKILLS</h1>
        <div className='skills-content'>
          {
            skills.map((skill) => {
              return  <div key={skill.id} className="flex">
                <span className='skill-resume-category'>{skill.skillCategory}</span>: {skill.skillContent}
              </div>
            })     
          }
        </div>
      </section>
      
      <section className='skills-section'>
        <h1 className='technical-skills'>EXPERIENCE</h1>
        <div className='skills-content education'>
          {
            experiences.map(experience => {
              return ( 
                <section key={experience.id}>
                  <div className='education-content bold'>
                    {experience.title}
                    <span>{experience.date}</span>
                  </div>
                  <div className='education-content italics'>
                    {experience.company}
                    <div className='italics'>{experience.location}</div>
                  </div>
                  <ul className='responsibility'>
                    {
                      experience.descriptions.map(element => {
                        return <li key={element.id}>{element.description}</li>
                      })
                    }
                  </ul>
                </section>
              )
            })     
          }
        </div>
      </section>

      <section className='skills-section'>
        <h1 className='technical-skills'>PROJECTS</h1>
        <div className='skills-content education'>
          {
            projects.map(project => {
              return ( 
                <section key={project.id}>
                  <div className='education-content bold'>
                    <div className='bold'>{project.name} | <span className='italics'>{project.frameworks}</span></div>
                    <span>{project.date}</span>
                  </div>
                  <ul className='responsibility'>
                    {
                      project.descriptions.map(element => {
                        return <li key={element.id}>{element.description}</li>
                      })
                    }
                  </ul>
                </section>
              )
            })     
          }
        </div>
      </section>

      <section className='skills-section'>
        <h1 className='technical-skills'>EDUCATION</h1>
        <div className='skills-content education'>
          {
            education.map(e => {
              return ( 
                <section key={e.id}>
                  <div className='education-content bold'>
                    {e.university}
                    <span>{e.location}</span>
                  </div>
                  <div className='education-content italics'>
                    {e.name}
                    <div className='italics'>{e.date}</div>
                  </div>
                </section>
              )
            })     
          }
        </div>
      </section>
    </section>
  )
}