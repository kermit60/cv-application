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
          <div className='phone-number'>{info.phoneNumber}</div>
          <div className='email'>{info.email}</div>
          <a href={info.linkedin} className='link'>{info.linkedin}</a>
          <a href={info.github} className='link'>{info.github}</a>
        </div>
      </section>
      <section className='skills-section'>
        <h1 className='technical-skills'>TECHNICAL SKILLS</h1>
        <div className='skills-content'>
          {
            skills.map((skill) => {
              return  <div key={skill.id} className="flex">
                <span className='skill-category'>{skill.skillCategory}</span>: {skill.skillContent}
              </div>
            })     
          }
        </div>
      </section>
    </section>
  )
}