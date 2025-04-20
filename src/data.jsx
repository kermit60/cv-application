import { nanoid } from 'nanoid';

export const personalObject = {
  name: "Jake Ryan",
  phoneNumber: "123-456-7890",
  email: "jake@ryan.edu",
  linkedin: "linkedin.com/in/jake",
  github: "github.com/jake"
}

export const skillsTemp = {
  language: [{id: nanoid(), name: "JavaScript"}, 
             {id: nanoid(), name: "Python"}, 
             {id: nanoid(), name: "C/C++"}, 
             {id: nanoid(), name: "SQL (Postgres)"}
            ],
  frameworks: [{id: nanoid(), name: "React"}, 
               {id: nanoid(), name: "Node.js"}, 
               {id: nanoid(), name: "Flash"}, 
               {id: nanoid(), name: "WordPress"}
              ],
  tools: [{id: nanoid(), name: "Git"}, 
          {id: nanoid(), name: "Docker"}, 
          {id: nanoid(), name: "Google Cloud Platform"}, 
          {id: nanoid(), name: "Material-UI"}
          ],
  library: [{id: nanoid(), name: "pandas"}, 
            {id: nanoid(), name: "NumPy"}, 
            {id: nanoid(), name: "Matplotlib"}
          ]
}

export const educationTemp = [{
  id: nanoid(),
  university: "Southwestern University",
  location: "Georgetown, TX",
  name: "Bachelors of Arts in Computer Science",
  date: "Aug. 2018 - May 2021" 
}]

export const experiencesTemp = [{
  id: nanoid(),
  name: "Undergraduate Research Assistant",
  location: "University of Waterloo",
  date: "June 2020 - Present",
  descriptions: [{
    id: nanoid(),
    description: "Developed a REST API using fast API and Postgres SQL"
  }]
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
