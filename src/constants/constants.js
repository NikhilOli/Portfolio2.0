import imageSnap from "../assets/portfolio/imageSnap.png";
import blogweave from "../assets/portfolio/blogWeave.png";
import contactms from "../assets/portfolio/contactms.png";
import reduxEcommerce from "../assets/portfolio/reduxEcommerce.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import onn from "../assets/portfolio/onn.png";
import eCommerce from "../assets/portfolio/eCommerce.png";
import movieVerse from "../assets/portfolio/movieVerse.png";

export const projects = [
  {
    id: 1,
    title: "Image Snap",
    description: "Image Snap is a web application for image manipulation and sharing.",
    image: imageSnap,
    tags: ['React', 'Tailwind', 'API Integration', 'Axios'],
    source: 'https://github.com/NikhilOli/React-Projects/tree/main/pexelsAPI',
    visit: "https://image-snap.vercel.app/",
  },
  {
    id: 2,
    title: "Blog Weave",
    description: "Blog Weave is a platform for creating and sharing blog posts.",
    image: blogweave,
    tags: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
    source: 'https://github.com/NikhilOli/BlogWeave',
    visit: "https://blogweave.vercel.app/",
  },
  {
    id: 8,
    title: "Movie Haven",
    description: "Movie Haven is a modern, responsive movie browsing application built with React. It offers users a sleek interface to explore popular, top-rated, and upcoming movies, providing detailed information about each film.",
    image: movieVerse,
    tags: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'API Integration', 'Responsive Design'],
    source: 'https://github.com/NikhilOli/Typescript-Projects/tree/main/movieApp',
    visit: "https://movie-haven.vercel.app/",
  },
  {
    id: 9,
    title: "Task Planner",
    description: "Task Planner is a sophisticated todo application with drag-and-drop functionality, built using the MERN stack. It offers a seamless user experience for managing tasks across different status columns.",
    image: todoApp,
    tags: ['React', 'Typescript', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Drag and Drop'],
    source: 'https://github.com/NikhilOli/Typescript-Projects/tree/main/todo-app',
    visit: "https://task-planner.vercel.app/",
  },
  {
    id: 3,
    title: "Contact Management System",
    description: "A system for efficiently managing and organizing contacts.",
    image: contactms,
    tags: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
    source: 'https://github.com/NikhilOli/contactMS-mern',
    visit: "https://contactms.vercel.app/",
  },
  {
    id: 4,
    title: "Redux E-commerce",
    description: "An e-commerce platform built with Redux for state management.",
    image: reduxEcommerce,
    tags: ['React', 'Redux', 'Tailwind', 'API Integration'],
    source: 'https://github.com/NikhilOli/Practice/tree/main/redux-toolkit',
    visit: "https://redux-ecommerce-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Weather App",
    description: "A weather application providing real-time weather information.",
    image: weatherApp,
    tags: ['React', 'API Integration', 'Tailwind'],
    source: 'https://github.com/NikhilOli/React-Projects/tree/main/weather-app',
    visit: "https://weatheringai.netlify.app/",
  },
  {
    id: 6,
    title: "Project ONN",
    description: "Project ONN is a web application for showcasing provided services.",
    image: onn,
    tags: ['React', 'Tailwind'],
    source: 'https://github.com/NikhilOli/React-Projects/tree/main/onn-website',
    visit: "https://react-projects-coral.vercel.app/",
  },
  {
    id: 7,
    title: "E-commerce",
    description: "A full-featured e-commerce platform for online shopping.",
    image: eCommerce,
    tags: ['React', 'API Integration', 'Tailwind'],
    source: 'https://github.com/NikhilOli/React-small-projects/tree/main/productsApi',
    visit: "https://e-commerce-five-plum.vercel.app/",
  },
];

export const TimeLineData = [
  { year: 2022, text: 'Started learning Web Development' },
  { year: 2023, text: 'Dived into Software Development and started building foundational skills' },
  { year: 2023, text: 'Mastered Frontend development with React and other modern technologies' },
  { year: 2023, text: 'Built and deployed multiple frontend projects, showcasing my skills' },
  { year: 2024, text: 'Expanded my knowledge to Backend development, completing several full-stack projects' },
];


export const data = [
  { number: 7, text: 'Web Projects Completed' },
  { number: 9, text: 'Technologies Learned' },
  { number: 350, text: 'Hours of Coding' },
  { number: 15, text: 'GitHub Repositories' }
];