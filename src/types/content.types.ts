export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface Project {
  id: number;
  projectName: string;
  projectDesc: string;
  tags: string[];
  code: string;
  demo: string;
  image: string;
}

export interface WorkExperience {
  jobtitle: string;
  where: string;
  date: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface IntroData {
  title: string;
  animated: {
    first: string;
    second: string;
    third: string;
  };
  description: string[];
  your_img_url: string;
}

export interface ContactConfig {
  YOUR_EMAIL: string;
  YOUR_PHONE: string;
  description: string;
  description2: string;
  YOUR_SERVICE_ID: string;
  YOUR_TEMPLATE_ID: string;
  YOUR_USER_ID: string;
}

export interface SocialProfiles {
  github?: string;
  instagram?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface DataAbout {
  title: string;
  aboutme: string[];
}
