import {
  backend,
  frontend,
  database,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mobx,
  tailwind,
  nodejs,
  postgresql,
  git,
  docker,
  freelance,
  founderz,
  mohirai,
  mohiraiWork,
} from "../assets";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database",
    icon: database,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Mobx",
    icon: mobx,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelancer",
    icon: freelance,
    iconBg: "#fff",
    date: "October 2020 - April 2021",
    points: [
      "Creating intuitive and user friendly designs for web-pages.",
      "Updating layouts to meet usability and performance requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Developing landing pages, dashboards and online applications using HTML, CSS, Bootstrap and JavaScript.",
    ],
  },
  {
    title: "No-code Developer & \nJavascript Developer",
    company_name: "Founderz",
    icon: founderz,
    iconBg: "#fff",
    date: "July 2022 - December 2022",
    points: [
      "Creating web-applications by using the no-code platform named “ZeroOne” (Japanese no-code platform).",
      "Building flexible workflows using “N8N”, and integrated backend workflows with workflows in “ZeroOne”.",
      "Analyzing the structure and logic of the business needs and created the Database structure for meeting them, and optimize the Database.",
      "Creating the schedule of the project, taking into consideration the difficulty of the tasks and the approximate deadline of the project. Use management tool named “Asana” and also used Scrum methodology.",
      "Implementing Javascript functions to process data for showing in UI, and also for creating data in JSON format to integrate with services through REST API in “N8N”.",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "MohirAI",
    icon: mohirai,
    iconBg: "#000",
    date: "June 2023 - Present",
    points: [
      "Developing interactive and responsive web-pages using React JS and Typescript for making Javascript code typed and controllable.",
      "Creating REST API endpoints for processing data according to business needs.",
      "Creating SQL procedures/functions for working directly inside DBMS and decreasing the time of processing data and waiting its’ response.",
      "Writing SQL scripts for showing statistics of the existing data in Database.",
      "Implementing Socket IO connections for making applications real-time. Implement rooms for making notification for all users in that room in some action.",
      "Writing python scripts for monitoring deployments in Kubernetes and if needed increase or decrease the number of pods.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mohir AI",
    description:
      "Mohir AI the first Uzbek speech recognition and synthesis system. It is a platform that allows you to convert text to speech and speech to text. It is also have a studio where you can create subtitles for videos and audios.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mobx",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: mohiraiWork,
    source_code_link: "https://mohir.ai/",
  },
];

export { services, technologies, experiences, testimonials, projects };
