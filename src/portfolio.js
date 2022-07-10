import aboutpic from "./components/Access/mephoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Siva123E?tab=repositories',
  title: 'Portfolio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'EDEPALLI SIVA RAMA KRISHNA',
  role: 'Software Engineer',
  description:
  'I am an enthusiastic fresher with complete knowledge and Understanding of Software Development and highly inspiring leadership skills. I am always ready to learn and enhance my skills in the IT Corporate flourishing my talent and to harness it in the best possible way has always been a sort of whim for me. I have a specialization in the field of Data Science andexpertise in Data Analysis.',
  resume: 'https://github.com/narendra11902977/Portfolio-using-React-JS',
  social: {
    linkedin: 'https://www.linkedin.com/in/sivarama-krishna-041120193',
    WhatsApp: 'https://wa.me/918688985725?text=Hello siva',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Python GUI Car selling web page: [PYTHON,TKINTER]',
    description:
      'In this project we created web page for car selling using GUI.In that project we can buy the car based onthe company which is available',
    stack: ['PYTHON','GUI'],
    
  },
  {
    name: 'Banking Application using Python (10/2019 - 11/2019)',
    description:
      'Built an interactive Banking application using Graphical User Interface in Python, it provides the details of withdraw, deposit and current balance.',
    stack: ['Python'],
    
  },
  {
    name: 'Machine Learning on a data set: [python]',
    description:
      'which deals with the number of persons who didn’t pay money within due in date.',
    stack: ['MACHINE LEARNING','PYTHON'],
    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React JS',
  'Material UI',
  'Python',
  'SQL',
  'MS Excel',
  'Tableau',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sivaedepalli123@gmail.com',
}


export { header, about, projects, skills, contact }
