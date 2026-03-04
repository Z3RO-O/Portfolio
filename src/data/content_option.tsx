// React Icons imports for skills
import { RiFirebaseFill } from 'react-icons/ri';
import { VscVscode } from 'react-icons/vsc';
import {
  FaReact,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaWindows,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiAngular,
  SiRedux,
  SiPostman,
  SiGooglecloud,
  SiUbuntu,
  SiApple,
  SiFlask,
  SiFastapi,
  SiNestjs,
  SiKalilinux,
} from 'react-icons/si';

import type {
  SkillCategory,
  Project,
  WorkExperience,
  Service,
  IntroData,
  ContactConfig,
  SocialProfiles,
  Meta,
  DataAbout,
} from '@/types/content.types';

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      {
        name: 'Angular',
        icon: <SiAngular />,
        color: '#DD0031',
      },
      {
        name: 'Next.js',
        icon: <SiNextdotjs />,
        color: '#fff',
      },
      {
        name: 'React',
        icon: <FaReact />,
        color: '#61DAFB',
      },
      {
        name: 'Redux',
        icon: <SiRedux />,
        color: '#764ABC',
      },
      {
        name: 'TypeScript',
        icon: <SiTypescript />,
        color: '#3178C6',
      },
      {
        name: 'JavaScript',
        icon: <FaJsSquare />,
        color: '#F7DF1E',
      },
      {
        name: 'Tailwind CSS',
        icon: <SiTailwindcss />,
        color: '#06B6D4',
      },
    ],
  },
  {
    category: 'Backend',
    items: [
      {
        name: 'Django',
        icon: <SiDjango />,
        color: '#092E20',
      },
      {
        name: 'FastAPI',
        icon: <SiFastapi />,
        color: '#009688',
      },
      {
        name: 'Flask',
        icon: <SiFlask />,
        color: '#fff',
      },
      {
        name: 'NestJS',
        icon: <SiNestjs />,
        color: '#E0234E',
      },
      {
        name: 'Express',
        icon: <SiExpress />,
        color: '#fff',
      },
    ],
  },
  {
    category: 'Databases',
    items: [
      {
        name: 'MongoDB',
        icon: <SiMongodb />,
        color: '#47A248',
      },
      {
        name: 'PostgreSQL',
        icon: <SiPostgresql />,
        color: '#336791',
      },
      {
        name: 'MySQL',
        icon: <SiMysql />,
        color: '#4479A1',
      },
      {
        name: 'Firebase',
        icon: <RiFirebaseFill />,
        color: '#FFCA28',
      },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      {
        name: 'GitHub',
        icon: <FaGithub />,
        color: '#fff',
      },
      {
        name: 'Git',
        icon: <FaGitAlt />,
        color: '#F05032',
      },
      {
        name: 'VS Code',
        icon: <VscVscode />,
        color: '#007ACC',
      },
      {
        name: 'Docker',
        icon: <FaDocker />,
        color: '#2496ED',
      },
      {
        name: 'Postman',
        icon: <SiPostman />,
        color: '#FF6C37',
      },
      {
        name: 'Google Cloud',
        icon: <SiGooglecloud />,
        color: '#4285F4',
      },
    ],
  },
  {
    category: 'Operating Systems',
    items: [
      {
        name: 'Windows',
        icon: <FaWindows />,
        color: '#0078D6',
      },
      {
        name: 'macOS',
        icon: <SiApple />,
        color: '#999999',
      },
      {
        name: 'Kali Linux',
        icon: <SiKalilinux />,
        color: '#1788D2',
      },
      {
        name: 'Ubuntu',
        icon: <SiUbuntu />,
        color: '#E95420',
      },
    ],
  },
];
