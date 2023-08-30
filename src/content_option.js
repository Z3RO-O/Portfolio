import one from "./assets/svg/projects/one.svg";
import two from "./assets/svg/projects/two.svg";
import three from "./assets/svg/projects/three.svg";
import four from "./assets/svg/projects/four.svg";
import five from "./assets/svg/projects/five.svg";
import six from "./assets/svg/projects/six.svg";
import seven from "./assets/svg/projects/seven.svg";
import eight from "./assets/svg/projects/eight.svg";

const logotext = "VAIBHAV";
const meta = {
  title: "Vaibhav Singh",
  description:
    "I’m Vaibhav Singh | A Programmer, Web devloper,currently working in Trialshopy",
};

const introdata = {
  title: "I’m Vaibhav Singh",
  animated: {
    first: "I love Coding",
    second: "I code cool websites",
    third: "I develop Problems to solve them",
  },
  description: [
    "A web developer | An Ethical hacking enthusiast",
    "A Programmer on a mission to make the world a better place",
  ],
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about myself",
  aboutme: [
    "A Programmer | A Developer | A Techie who wants to be an Ethical Hacker",
    "I believe that : )",
    '" Computers can tell more about ourselves than what we can ! "',
  ],
};
const worktimeline = [
  {
    jobtitle: "Web Developer",
    where: "Trialshopy",
    date: "2023",
  },
  {
    jobtitle: "Ninja Entrepreneur",
    where: "Coding Ninjas",
    date: "2022",
  },
  // {
  //   jobtitle: "Designer of week",
  //   where: "ALquds",
  //   date: "2019",
  // },
];

const skills = [
  {
    name: "C++",
    value: 80,
  },
  {
    name: "Java",
    value: 75,
  },
  {
    name: "Python",
    value: 70,
  },
  {
    name: "Javascript",
    value: 75,
  },
  {
    name: "React",
    value: 70,
  },
  {
    name: "Tailwind CSS",
    value: 90,
  },
  {
    name: "Django",
    value: 50,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Focus on creating intuitive and user-friendly interfaces that enhance user experiences. Specialize in crafting visually appealing designs.",
  },
  {
    title: "Website Development",
    description:
      "Building dynamic and responsive websites. A Good Website is both a good UI/UX and the functionality it offers.",
  },
  {
    title: "Ethical Hacking & CTFs",
    description:
      "As an aspiring Cybersecurity Enthusiast, I have been passionately exploring the world of ethical hacking and actively engaging in Capture The Flag (CTF) events to enhance my skills and knowledge in cybersecurity challenges.",
  },
];

const projects = [
  {
    id: 1,
    projectName: "LSB Steganography",
    projectDesc:
      "This project aims to build a Website which can do steganography in all type of files.",
    tags: ["React", "Tailwind CSS", "Flask"],
    code: "https://github.com/Z3RO-O/LSB-Steganography",
    demo: "https://github.com/Z3RO-O/LSB-Steganography",
    image: one,
  },
  {
    id: 2,
    projectName: "Railway Tracking",
    projectDesc:
      "This project is a railway tracking system that allows users to obtain relevant information about train timing.",
    tags: ["Django", "Tailwind CSS"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: two,
  },
  {
    id: 3,
    projectName: "Weather App",
    projectDesc:
      "Weather forecast systems and applications predict weather conditions based on multiple parameters.",
    tags: ["Django", "CSS", "Material Ui"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: three,
  },
  {
    id: 4,
    projectName: "Android Patient Tracker",
    projectDesc:
      "This project involves the development of an Android application for viewing and managing patient data.",
    tags: ["Flutter", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: four,
  },
  {
    id: 5,
    projectName: "E-Commerce App",
    projectDesc: "A Simple E-commerce application",
    tags: ["React Native", "Firebase"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: five,
  },
  {
    id: 6,
    projectName: "Uber Lite",
    projectDesc: "Uber clone",
    tags: ["Flutter"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: six,
  },
  {
    id: 7,
    projectName: "Stock Market App",
    projectDesc: "A simple stock market API app",
    tags: ["React", "Redux", "Bootstrap"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: seven,
  },
  {
    id: 8,
    projectName: "Car Pooling System",
    projectDesc:
      "The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution",
    tags: ["Flutter", "React"],
    code: "https://github.com/hhhrrrttt222111/developer-portfolio",
    demo: "https://github.com/hhhrrrttt222111/developer-portfolio",
    image: eight,
  },
  // {
  //   img: "https://picsum.photos/400/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/300/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
];

const contactConfig = {
  YOUR_EMAIL: "vvaibhavsingh.0@gmail.com",
  YOUR_FONE: "+91 7839271574",
  description:
    "If you have a project that you need help with, or if you just want to chat about hacking, I'd love to hear from you.",
  description2: "You can reach me by email or by phone.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_pklek2g",
  YOUR_TEMPLATE_ID: "template_1q4071q",
  YOUR_USER_ID: "9IO0HwB_rw11nrq2B",
};

const socialprofils = {
  github: "https://github.com/Z3RO-O",
  instagram: "https://www.instagram.com/vvaibhav_s/",
  linkedin: "https://www.linkedin.com/in/vvaibhavsingh/",
  twitter: "https://twitter.com/vaibhavsngh0",
};
export {
  meta,
  dataabout,
  projects,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
