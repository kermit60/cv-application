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
    },
    {
      id: nanoid(),
      description: "Explored ways to visualize GitHub collaboration in a classroom setting"
    }
  ]
},
{
  id: nanoid(),
  title: "Artificial Intelligence Research Assistant",
  company: "Southwestern University",
  location: "Georgetown, TX",
  date: "May 2019 - July 2019",
  descriptions: [
    {
      id: nanoid(),
      description: "Explored methods to generate video game dungeons based off of The legend of Zelda"
    },
    {
      id: nanoid(),
      description: "Developed a game in Java to test the generated dungeons"
    },
    {
      id: nanoid(),
      description: "Contributed 50K+ lines of code to an establish codebase via Git"
    },
    {
      id: nanoid(),
      description: "Wrote a 8-page paper and gave multiple presentations on-campus"
    }
  ]
}]

export const projectsTemp = [{
  id: nanoid(),
  name: "Gitlytics",
  date: "June 2022 - Present",
  frameworks: "JavaScript, Express.JS, React, MongoDB, Node.JS",
  descriptions: [{
    id: nanoid(),
    description: "Developed a REST API using fast API and Postgres SQL"
  },{
    id: nanoid(),
    description: "Implemented GitHub OAuth to get data from user's repositories"
  }, {
    id: nanoid(),
    description: "Visualized GitHub data to show collaboration"
  }]}, {
    id: nanoid(),
    name: "Simple Paintball",
    date: "May 2020 - June 2021",
    frameworks: "Spigot API, Java, Maven, TravisCI, Git",
    descriptions: [{
      id: nanoid(),
      description: "Developed a Minecraft server plugin to entertain kids during free time for a previous job"
    },{
      id: nanoid(),
      description: "Published plugin to websites gaining 2K+ downloads and an average 4.5/5-star review"
    }, {
      id: nanoid(),
      description: "Implemented continuous delivery using TravisCI to build the plugin upon new a release"
    }]
  }
]
