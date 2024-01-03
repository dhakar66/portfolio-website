import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

// below three are the import of image from public file  i will have to change or update the necessary part when i put my own images
// import corpcommentImg from "@/public/corpcomment.png";
import fastpizza from "@/public/fastpizza.png";
import wildoasis from "@/public/wildoasis.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Class 10",
    location: "THS Rajpur",
    description:
      "I graduated my class 10 CBSE board from Tibetan Homes School, Rajpur. With 84.3%.",
    icon: React.createElement(LuGraduationCap),
    date: "June - 2018",
  },
  {
    title: "Class 12",
    location: "THS Mussoorie",
    description:
      "I graduated my class 12 CBSE board from Tibetan Homes School, Mussoorie. With 83.3%.",
    icon: React.createElement(LuGraduationCap),
    date: "July - 2020",
  },
  {
    title: "Internship as Full-Stack developer",
    location: "OcataNet Services",
    description:
      "Doing internship under OctaNet Services Pvt Ltd. Duration is for a month.",
    icon: React.createElement(FaReact),
    date: "1st jan - current",
  },
] as const;

export const projectsData = [
  {
    title: "Fast React Pizza",
    description:
      "A pizza ordering application made using React. Used TailWind CSS. Added Redux and advanced React router concept.",
    tags: ["React", "Tailwind", "Redux", "React Router"],
    imageUrl: fastpizza,
  },
  {
    title: "Hotel Potala",
    description:
      "The Hotel Potala is an application to manage everythign about hotel.",
    tags: [
      "React",
      "React Router",
      "Context API",
      "React Query",
      "React Hook Form",
      "Redux",
      "Supabase",
      "styled components",
    ],
    imageUrl: wildoasis,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  // "Prisma",
  "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
  "Sass",
] as const;
