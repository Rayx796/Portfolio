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
  creative,
  pizza,
  segundos,
  wunderlust,
  wunderlust1,
  applemock,
  threejs,
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
    title: "Video Editor",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    title: "Video Editor",
    company_name: "En Segundos",
    icon: segundos,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing footage Selection and Organization.",
      "Applying 3d effects and 2d effects in the editing process",
      "Helping with scripts and video idea brainstorming",
      "Participating in video reviews and providing constructive feedback to other editors.",
    ],
  },
  {
    title: "Web Developer - Cofounder",
    company_name: "Pizzabyte",
    icon: pizza,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Cofounder of first team in FIRST Robotics Competition in Central America",
      "Developed First Webstite with Blogs capabilities trought Sanity CMS",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other members of the team.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Wunderlust",
    icon: wunderlust1,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "Developing and maintaining web applications using Svelte and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Wunderlust",
    description:
      "Landing website for local agency with modern inmplementation like contact throught meetings and 3d elements within it [DEMO VERSION].",
    tags: [
      {
        name: "svelte",
        color: "orange-text-gradient",
      },
      {
        name: " css",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: wunderlust,
    source_code_link: "https://wunderlustde.netlify.app",
  },
  {
    name: "Creative desing",
    description:
      "Web application for agencies with interactive desings and effects",
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
    image: creative,
    source_code_link: "https://creativedesings.netlify.app",
  },
  {
    name: "Apple mock Website",
    description:
      "A passion project to immitate a landing ecommerce web application with Apple",
    tags: [
      {
        name: "svelte",
        color: "orange-text-gradient",
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
    image: applemock,
    source_code_link: "https://applemockstore.netlify.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
