import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated Degree",
    location: "Jalandhar, Punjab",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2017",
  },
  {
    title: "Front-End Developer",
    location: "Noida, UP",
    description:
      "I worked as a front-end developer for 6 months. I also upskilled from HTML/CSS to React.",
    icon: React.createElement(CgWorkAlt),
    date: " Aug 2017 - Jan 2018",
  },
  {
    title: "Front-End Developer",
    location: "Noida, UP",
    description:
    "I worked as a front-end developer for 1 year 10 months. I upskilled more in React.",
    icon: React.createElement(FaReact),
    date: "Feb 2018 - Dec 2019",
  },
  {
    title: "Full-Stack Developer",
    location: "Gurgaon, HR",
    description:
      "I'm now a full-stack developer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and all the databases. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Jul 2020 - Mar 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Noida, UP",
    description:
      "Working as full-stack developer. Upskilled myself with react native and deployment of codes. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Jul 2023 - present",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
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
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
] as const;
