import '../styles/resume.css'

export default function Resume({
  info,
  skills,
  education,
  experiences,
  projects,
  sectionOrder,
}) {
  const externalUrl = (value) => value && (/^https?:\/\//i.test(value) ? value : `https://${value}`)

  const personalSection = (
    <section className='info'>
      <h1>{info.name}</h1>
      <address className='links'>
        {info.phoneNumber && <a href={`tel:${info.phoneNumber}`} className='phone-number'>{info.phoneNumber}</a>}
        {info.phoneNumber && info.email && <span aria-hidden="true">|</span>}
        {info.email && <a href={`mailto:${info.email}`} className='email'>{info.email}</a>}
        {info.email && info.linkedin && <span aria-hidden="true">|</span>}
        {info.linkedin && <a href={externalUrl(info.linkedin)} className='link'>{info.linkedin}</a>}
        {info.linkedin && info.github && <span aria-hidden="true">|</span>}
        {info.github && <a href={externalUrl(info.github)} className='link'>{info.github}</a>}
      </address>
    </section>
  )

  const sectionContent = {
    personal: personalSection,
    skills: (
      <section className='skills-section'>
        <h2 className='technical-skills'>TECHNICAL SKILLS</h2>
        <div className='skills-content'>
          {skills.map((skill) => (
            <div key={skill.id} className="flex">
              <span className='skill-resume-category'>{skill.skillCategory}</span>: {skill.skillContent}
            </div>
          ))}
        </div>
      </section>
    ),
    experience: (
      <section className='skills-section'>
        <h2 className='technical-skills'>EXPERIENCE</h2>
        <div className='skills-content education'>
          {experiences.map((experience) => (
            <article key={experience.id}>
              <div className='education-content bold'>
                {experience.title}
                <span>{experience.date}</span>
              </div>
              <div className='education-content italics'>
                {experience.company}
                <div className='italics'>{experience.location}</div>
              </div>
              <ul className='responsibility'>
                {experience.descriptions.map((element) => (
                  <li key={element.id}>{element.description}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    ),
    projects: (
      <section className='skills-section'>
        <h2 className='technical-skills'>PROJECTS</h2>
        <div className='skills-content education'>
          {projects.map((project) => (
            <article key={project.id}>
              <div className='education-content bold'>
                <div className='bold'>{project.name} | <span className='italics'>{project.frameworks}</span></div>
                <span>{project.date}</span>
              </div>
              <ul className='responsibility'>
                {project.descriptions.map((element) => (
                  <li key={element.id}>{element.description}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    ),
    education: (
      <section className='skills-section'>
        <h2 className='technical-skills'>EDUCATION</h2>
        <div className='skills-content education'>
          {education.map((entry) => (
            <article key={entry.id}>
              <div className='education-content bold'>
                {entry.university}
                <span>{entry.location}</span>
              </div>
              <div className='education-content italics'>
                {entry.name}
                <div className='italics'>{entry.date}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    ),
  }

  return (
    <main className='resume'>
      {sectionOrder.map((section) => (
        <div key={section}>{sectionContent[section]}</div>
      ))}
    </main>
  )
}
