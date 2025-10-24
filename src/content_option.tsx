import {
  stegano as one,
  cool_e as two,
  isdf as three,
  stock_market as four,
  phishing_illustration as five,
} from '@/assets/assets';

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

export const logotext: string = 'VAIBHAV';

export const meta: Meta = {
  title: 'Vaibhav Singh',
  description:
    "I'm Vaibhav Singh | A Programmer, Web devloper,currently working in Trialshopy",
};

export const introdata: IntroData = {
  title: "I'm Vaibhav Singh",
  animated: {
    first: 'I love Coding',
    second: 'I code cool websites',
    third: 'I develop Problems to solve them',
  },
  description: [
    'A web developer | An Ethical hacking enthusiast',
    'A Programmer on a mission to make the world a better place',
  ],
  your_img_url: 'https://images.unsplash.com/photo-1514790193030-c89d266d5a9d',
};

export const dataabout: DataAbout = {
  title: 'abit about myself',
  aboutme: [
    'A Programmer | A Developer | A Techie who wants to be an Ethical Hacker',
    'I believe that : )',
    '" Computers can tell more about ourselves than what we can ! "',
  ],
};

export const worktimeline: WorkExperience[] = [
  {
    jobtitle: 'Associate Engineer',
    where: 'Sage',
    date: '2025',
  },
  {
    jobtitle: 'Member of Technical Staff 1',
    where: 'Fyle',
    date: '2025',
  },
  {
    jobtitle: 'Engineering Intern (Frontend)',
    where: 'Fyle',
    date: '2024-25',
  },
  {
    jobtitle: 'Jr. Frontend Developer',
    where: 'Prism AI',
    date: '2024',
  },
  {
    jobtitle: 'Frontend Developer',
    where: 'Blue Bricks',
    date: '2023',
  },
  {
    jobtitle: 'Web Developer',
    where: 'Trialshopy',
    date: '2023',
  },
];

export const services: Service[] = [
  {
    title: 'Website Development',
    description:
      'Building dynamic and responsive websites. A Good Website is both a good UI/UX and the functionality it offers.',
  },
  {
    title: 'Ethical Hacking & CTFs',
    description:
      'As an aspiring Cybersecurity Enthusiast, I have been passionately exploring the world of ethical hacking and actively engaging in Capture The Flag (CTF) events to enhance my skills and knowledge in cybersecurity challenges.',
  },
  {
    title: 'UI & UX Design',
    description:
      'Focus on creating intuitive and user-friendly interfaces that enhance user experiences. Specialize in crafting visually appealing designs.',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    projectName: 'LSB Steganography',
    projectDesc:
      'This project aims to build a Website which can do steganography in all type of files.',
    tags: ['React', 'Tailwind CSS', 'Flask'],
    code: 'https://github.com/Z3RO-O/LSB-Steganography',
    demo: 'https://github.com/Z3RO-O/LSB-Steganography',
    image: one,
  },
  {
    id: 2,
    projectName: 'COOL-E',
    projectDesc:
      'This project is for Indian railways where you can Book a Coolie Online.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/Z3RO-O/E-COOLIE.git',
    demo: 'https://cool-e.netlify.app/',
    image: two,
  },
  {
    id: 3,
    projectName: 'ISDF Club Website',
    projectDesc:
      'Club Website for Information and Digital Forensics Club of AIT',
    tags: ['HTML', 'CSS', 'JS'],
    code: 'https://github.com/Z3RO-O/ISDF-Websitehttps://github.com/Z3RO-O/ISDF-Website',
    demo: 'https://z3ro-o.github.io/ISDF-Website/',
    image: three,
  },
  {
    id: 4,
    projectName: 'Stock Market App',
    projectDesc:
      'This is a Stock Market Live Chart viewing website built in Bajaj HackRX 4.0 Hackathon',
    tags: ['React', 'TailwindCSS', 'React-Charts'],
    code: 'https://github.com/Z3RO-O/Stock-Charts',
    demo: 'https://stock-charts.vercel.app/',
    image: four,
  },
  {
    id: 5,
    projectName: 'Phishing Pages',
    projectDesc:
      ' The primary goal of this project is to provide a visual representation of how phishing attacks can be executed and to educate users on how to identify and protect themselves against such threats.',
    tags: ['PHP', 'CSS'],
    code: 'https://github.com/Z3RO-O/Phishing_page/tree/main',
    demo: 'https://github.com/Z3RO-O/Phishing_page/tree/main',
    image: five,
  },
];

export const contactConfig: ContactConfig = {
  YOUR_EMAIL: 'vvaibhavsingh.0@gmail.com',
  YOUR_FONE: '+91 7839271574',
  description:
    "If you have a project that you need help with, or if you just want to chat about hacking, I'd love to hear from you.",
  description2: 'You can reach me by email or by phone.',
  YOUR_SERVICE_ID: 'service_pklek2g',
  YOUR_TEMPLATE_ID: 'template_1q4071q',
  YOUR_USER_ID: '9IO0HwB_rw11nrq2B',
};

export const socialprofils: SocialProfiles = {
  github: 'https://github.com/Z3RO-O',
  instagram: 'https://www.instagram.com/vvaibhav_s/',
  linkedin: 'https://www.linkedin.com/in/vvaibhavsingh/',
  twitter: 'https://twitter.com/vaibhavsngh0',
};
