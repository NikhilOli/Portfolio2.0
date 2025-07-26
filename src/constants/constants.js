import imageSnap from "../assets/portfolio/imageSnap.png";
import blogweave from "../assets/portfolio/blogWeave.png";
import hospitalms from "../assets/portfolio/hospitalms.png";
import contactms from "../assets/portfolio/contactms.png";
import reduxEcommerce from "../assets/portfolio/reduxEcommerce.png";
import weatherApp from "../assets/portfolio/weatherApp.png";
import eCommerce from "../assets/portfolio/eCommerce.png";
import movieHaven from "../assets/portfolio/movieHaven.png";

export const projects = [
  {
    id: 1,
    title: "Blog Weave",
    description: "Blog Weave is a platform for creating and sharing blog posts.",
    image: blogweave,
    tags: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
    source: 'https://github.com/NikhilOli/BlogWeave',
    visit: "https://blogweave.vercel.app/",
  },
  {
    id: 2,
    title: "HospitalMS",
    description: "A full-stack hospital management system with role-based login for Admins, Doctors, and Users. Admins can assign doctors to users, manage records, and perform CRUD operations in a clean, responsive UI.",
    image: hospitalms,
    tags: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Shadcn UI', 'Role-based Auth'],
    source: 'https://github.com/NikhilOli/hospital-ms',
    visit: "https://hospital-ms-blue.vercel.app/",
  },
  {
    id: 3,
    title: "Image Snap",
    description: "Image Snap is a web application for image manipulation and sharing.",
    image: imageSnap,
    tags: ['React', 'Tailwind', 'API Integration', 'Axios'],
    source: 'https://github.com/NikhilOli/React-Projects/tree/main/pexelsAPI',
    visit: "https://image-snap.vercel.app/",
  },
  {
    id: 4,
    title: "Movie Haven",
    description: "Movie Haven is a modern, responsive movie browsing application built with React. It offers users a sleek interface to explore popular, top-rated, and upcoming movies, providing detailed information about each film.",
    image: movieHaven,
    tags: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion', 'API Integration', 'Responsive Design'],
    source: 'https://github.com/NikhilOli/Typescript-Projects/tree/main/movieApp',
    visit: "https://movie-haven.vercel.app/",
  },
  {
    id: 5,
    title: "Contact Management System",
    description: "A system for efficiently managing and organizing contacts.",
    image: contactms,
    tags: ['React', 'Node.js', 'MongoDB', 'JWT Auth'],
    source: 'https://github.com/NikhilOli/contactMS-mern',
    visit: "https://contactms.vercel.app/",
  },
  {
    id: 6,
    title: "Redux E-commerce",
    description: "An e-commerce platform built with Redux for state management.",
    image: reduxEcommerce,
    tags: ['React', 'Redux', 'Tailwind', 'API Integration'],
    source: 'https://github.com/NikhilOli/Practice/tree/main/redux-toolkit',
    visit: "https://redux-ecommerce-ten.vercel.app/",
  },
  {
    id: 7,
    title: "Weather App",
    description: "A weather application providing real-time weather information.",
    image: weatherApp,
    tags: ['React', 'API Integration', 'Tailwind'],
    source: 'https://github.com/NikhilOli/React-Projects/tree/main/weather-app',
    visit: "https://weatheringai.netlify.app/",
  },
  {
    id: 8,
    title: "E-commerce",
    description: "A full-featured e-commerce platform for online shopping.",
    image: eCommerce,
    tags: ['React', 'API Integration', 'Tailwind'],
    source: 'https://github.com/NikhilOli/React-small-projects/tree/main/productsApi',
    visit: "https://e-commerce-five-plum.vercel.app/",
  },
];

export const TimeLineData = [
  {
    year: "2022",
    text: "Began my journey into web development with HTML, CSS, and JavaScript.",
  },
  {
    year: "2023",
    text: "Built responsive web interfaces using React, Tailwind CSS, and Framer Motion.",
  },
  {
    year: "2023",
    text: "Expanded into backend development with Node.js, Express.js, and MongoDB.",
  },
  {
    year: "2024",
    text: "Mastered modern full-stack development with Next.js, TypeScript, PostgreSQL, and Prisma ORM.",
  },
  {
    year: "2024",
    text: "Integrated secure authentication systems using Clerk and JWT.",
  },
  {
    year: "2025",
    text: "Focused on building scalable, production-ready web applications and deploying via Vercel.",
  },
];



export const data = [
  { number: 10, text: 'Full-Stack Projects Built' },
  { number: 12, text: 'Frameworks & Tools Mastered' },
  { number: 7, text: 'Projects Deployed' },
  { number: 25, text: 'GitHub Repositories' }
];
