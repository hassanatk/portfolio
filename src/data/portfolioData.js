import hero from "../assets/hero.png";
import studentHub from "../assets/studenthub.png";
import portfolio from "../assets/portfolio.png";

export const portfolioData = {
  // Personal Information
  name: "Muhammad Hassan",

  role: "Frontend Developer",

  description:
    "I'm a Computer Science student and Frontend Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean, interactive interfaces while continuously improving my skills in React, JavaScript, and modern web technologies.",

  email: "mailto:Hassanworkme03@gmail.com",

  phone: "+92 318 9434251",

  location: "Islamabad, Pakistan",

  github: "https://github.com/hassanatk",

  linkedin:
    "https://www.linkedin.com/in/muhammad-hassan-2917b9382/",

  // Skills
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Firebase",
    "Git",
    "GitHub",
  ],

  // Projects
  projects: [
    {
      id: 1,

      title: "Student Smart Hub",

      description:
        "A modern student management system built with React, Firebase Authentication, Firestore, and Tailwind CSS. It allows students to manage assignments, timetables, CGPA, and academic progress through a clean and responsive interface.",

      image: studentHub,

      technologies: [
        "React",
        "Firebase",
        "Tailwind CSS",
      ],

      github: "#",

      live: "https://student-smart-hub-dd86d.web.app",
    },

   {
  id: 2,

  title: "Personal Portfolio",

  description:
    "A modern and responsive portfolio website built with React, Tailwind CSS, and Framer Motion. It showcases my skills, projects, and frontend development journey with smooth animations and a clean user interface.",

  image: portfolio,

  technologies: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
  ],

  github: "https://github.com/hassanatk",

  live: "#",
},
  ],
};