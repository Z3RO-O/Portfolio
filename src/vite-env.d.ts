/// <reference types="vite/client" />

interface ContactFormData {
  email: string;
  name: string;
  message: string;
  loading: boolean;
  alertmessage: string;
}

interface NavLinkCompatProps extends Omit<NavLinkProps, 'className'> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

interface SectionHeadingProps {
  title: string;
  tag: string;
}

type SkillItem = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

type SkillsByCategory = {
  frontend: SkillItem[];
  backend: SkillItem[];
  tools: SkillItem[];
  os: SkillItem[];
};

type SkillNode = {
  name: string;
  icon: React.ReactNode;
  position: [number, number, number];
  color: string;
};