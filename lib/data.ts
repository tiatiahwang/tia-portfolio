import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import exampleImg from '@/public/example.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp',
    location: 'Seoul, South Korea',
    description:
      'I graduated after 6 months of studying. I found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2022',
  },
  {
    title: 'Front-End Developer',
    location: 'Seoul, South Korea',
    description:
      'I worked as a front-end developer for 5 months in e-commerce company.',
    icon: React.createElement(CgWorkAlt),
    date: '2022.07 - 2022.11',
  },
  {
    title: 'Front-End Developer',
    location: 'San Jose, CA',
    description:
      "I'm now studying more about Next.js and React. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'CHCHATS',
    description:
      'Designed and fully developed community site.',
    tags: ['React', 'Next.js', 'Tailwind', 'Prisma'],
    imageUrl: exampleImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Tailwind',
      'Redux',
    ],
    imageUrl: exampleImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: exampleImg,
  },
] as const;

export const skillsData = [
  'React',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Framer Motion',
  'Redux',
  'Node.js',
  'Git',
  'Prisma',
  'Express',
] as const;
