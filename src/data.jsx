import { nanoid } from 'nanoid';

export const personalObject = {
  name: "Jake Ryan",
  phoneNumber: "123-456-7890",
  email: "jake@ryan.edu",
  linkedin: "linkedin.com/in/jake",
  github: "github.com/jake"
}

export const skillsTemp = [
  {
    id: nanoid(),
    skillCategory: "Language",
    skillContent: "JavaScript, Typescript, Python, C/C++, SQL, HTML, CSS",
  },
  {
    id: nanoid(),
    skillCategory: "Frameworks",
    skillContent: "React, Node.js, Express.js, Next.js",
  },
  {
    id: nanoid(),
    skillCategory: "Tools",
    skillContent: "Git, Github, Visual Studio Code, Postman",
  },
  {
    id: nanoid(),
    skillCategory: "Library",
    skillContent: "Axios, React Router, Redux, Tailwind CSS, Bootstrap" 
  }
]

export const educationTemp = [{
  id: nanoid(),
  university: "Southwestern University",
  location: "Georgetown, TX",
  name: "Bachelors of Arts in Computer Science",
  date: "Aug. 2018 - May 2021" 
}]

export const experiencesTemp = [{
  id: nanoid(),
  title: "Undergraduate Research Assistant",
  company: "University of Waterloo",
  location: "Kitchener, Waterloo",
  date: "June 2020 - Present",
  descriptions: [
    {
      id: nanoid(),
      description: "Developed a REST API using fast API and Postgres SQL"
    },
    {
      id: nanoid(),
      description: "Developed a full-stack web application using Flash, React, PostgreSQL and Docker to analyze Github data"
    }
  ]
}]

export const projectsTemp = [{
  id: nanoid(),
  name: "Gitlytics",
  date: "June 2020 - Present",
  descriptions: [{
    id: nanoid(),
    description: "Developed a REST API using fast API and Postgres SQL"
  }]
}]
