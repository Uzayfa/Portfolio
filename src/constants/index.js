import 
{
  web,
  reactjs,
  backend, 
  creator,  
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  redux,
  tailwind,
  threejs,
  typescript,
  youTube,
}  from '../assets';


export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "Web developer",
      icon: web,
    },
    {
      title:  "React.js developer",
      icon: reactjs,
    },
    {
      title: "Backend developer",
      icon: backend,
    },
    {
      title: "Content creator",
      icon: creator,
    },
  ];

  const experiences = [
    {
      title: "Python Developer",
      company_name: "Tech Firm",
      icon: web,
      iconBg: "blue",
      date: "July 2022 - February 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
      ]
    },
    {
      title: "Python Developer",
      company_name: "Tech Firm",
      icon: web,
      iconBg: "blue",
      date: "July 2022 - February 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
      ] 
    },
    {
      title: "Python Developer",
      company_name: "Tech Firm",
      icon: web,
      iconBg: "blue",
      date: "July 2022 - February 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
      ]
    },
    {
      title: "Python Developer",
      company_name: "Tech Firm",
      icon: web,
      iconBg: "blue",
      date: "July 2022 - February 2023",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
      ] 
    },
  ]

const technologies = [
  {
    name: "HTML 5",
    icon: html
  },
  {
    name: "CSS 3",
    icon: css
  },
  {
    name: "GIT",
    icon: git
  },
  {
    name: "DOCKER",
    icon: docker
  },
  {
    name: "FIGMA",
    icon: figma
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "REDUX",
    icon: redux
  },
  {
    name: "Tailwind CSS",
    icon: tailwind
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "TYPESCRIPT",
    icon: typescript
  },
  {
    name: "Three JS",
    icon: threejs
  },
]

const projects = [
  {
    name: "E-Commerce Website",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    tags: [
      {
        name: "Website",
        color:"pink-text-gradient"
      }
    ],
    image: html,
    source_code_link: "https://github.com/"
  },
  {
    name: "Eye-Report",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
    tags: [
      {
        name: "Application",
        color:"green-text-gradient"
      }
    ],
    image: reactjs,
    source_code_link: "https://github.com/"
  },
  {
    name: "YouTube Clone",
    description: "Full functioning YouTube clone using Rapid API",
    tags: [
      {
        name: "React",
        color:"blue-text-gradient"
      }
    ],
    image: youTube,
    source_code_link: "https://github.com/"
  },
]
  export {services, experiences, technologies, projects}