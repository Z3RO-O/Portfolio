import one from "./assets/svg/projects/stegano.svg";
import two from "./assets/svg/projects/cool-e.svg";
import three from "./assets/svg/projects/isdf.svg";
import four from "./assets/svg/projects/stock_market.svg";
import five from "./assets/svg/projects/phishing_illustration.svg";

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
		jobtitle: "Frontend Developer",
		where: "Blue Bricks",
		date: "2023",
	},
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
		projectName: "COOL-E",
		projectDesc:
			"This project is for Indian railways where you can Book a Coolie Online.",
		tags: ["HTML", "CSS", "JavaScript"],
		code: "https://github.com/Z3RO-O/E-COOLIE.git",
		demo: "https://cool-e.netlify.app/",
		image: two,
	},
	{
		id: 3,
		projectName: "ISDF Club Website",
		projectDesc:
			"Club Website for Information and Digital Forensics Club of AIT",
		tags: ["HTML", "CSS", "JS"],
		code: "https://github.com/Z3RO-O/ISDF-Websitehttps://github.com/Z3RO-O/ISDF-Website",
		demo: "https://z3ro-o.github.io/ISDF-Website/",
		image: three,
	},
	{
		id: 4,
		projectName: "Stock Market App",
		projectDesc:
			"This is a Stock Market Live Chart viewing website built in Bajaj HackRX 4.0 Hackathon",
		tags: ["React", "TailwindCSS", "React-Charts"],
		code: "https://github.com/Z3RO-O/Stock-Charts",
		demo: "https://stock-charts.vercel.app/",
		image: four,
	},
	{
		id: 5,
		projectName: "Phishing Pages",
		projectDesc:
			" The primary goal of this project is to provide a visual representation of how phishing attacks can be executed and to educate users on how to identify and protect themselves against such threats.",
		tags: ["PHP", "CSS"],
		code: "https://github.com/Z3RO-O/Phishing_page/tree/main",
		demo: "https://github.com/Z3RO-O/Phishing_page/tree/main",
		image: five,
	},
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
