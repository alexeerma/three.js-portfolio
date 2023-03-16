import { three } from "maath";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wordpress,
  php,
  elementor,
  foodmood,
  acty,
  smit, 
  logo

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
    title: "HTML",
    icon: html,
  },
  {
    title: "Tailwind CSS",
    icon: tailwind,
  },
  {
    title: "Javascript",
    icon: javascript,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "PHP",
    icon: php,
  },
  {
    title: "Wordpress",
    icon: wordpress,
  },
  {
    title: "Elementor",
    icon: elementor,
  },
  {
    title: "Three.js",
    icon: threejs,
  }
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
    name: "Wordpress",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Project Manager/ Analyst",
    company_name: "LM Keskus",
    icon: foodmood,
    iconBg: "#383E56",
    date: "May 2016 - Feb 2020",
    points: [
      "Started out helping and managing logistical system and couriers. Helped put together the cost effective drive schedules.",
      "Moved on to help with marketing and E-commerce website projects. Led the E-commerce site development project.",
      "Implemented new featured in collaboration with the development team.",
      
    ],
  },
  {
    title: "IT Analyst",
    company_name: "SMIT",
    icon: smit,
    iconBg: "#E6DEDD",
    date: "Jul 2020 - Dec 2020",
    points: [
      "Started out as a System analyst intern. Worked on System Analysis for the existing CMS. Implemented new changes with developers.",
      "Describing Use-Cases to implement new features to an existing Web Application.",
      "Created a prototype for a new Content Management System.",
      "Created tickets for developers to work on. Reviewed the changes in close collaboration with developers and designer.",
    ],
  },
  {
    title: "Product Owner/Analyst",
    company_name: "Acty Digital",
    icon: acty,
    iconBg: "#383E56",
    date: "Mar 2021 - Aug 2021",
    points: [
      "Main focus was on collaborating with clients and leading their E-commerce (mainly Magento based) projects.",
      "Leading the product in Agile development. Implementing new features to existing projects and leading the new ones. Working with development team, creating development tickets. ",
      "Created solution proposals, budget preparation and reviews.",
      "Writing documentation and Use Cases for Business software connections with E-commerce sites.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jul 2021 - Present",
    points: [
      "Started developing and designing website on Wordpress and Elementor. At the start mainly minor CSS and PHP changes.",
      "Implemented more coding and PHP. Started working on customizing Wordpress themes and creating some custom Wordpress plugins.",
      "Working on React components for Wordpress and React based Web Applications.",
      "Discovered Three.js and React Three Fiber for implementing 3D models into React based Web Applications. Learning to use them regulary on different Websites.",
      "Coding different projects for learning purposes.",
      "Still learning to get better at coding :)",
    ],
  },
];

/* const testimonials = [
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
]; */

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };