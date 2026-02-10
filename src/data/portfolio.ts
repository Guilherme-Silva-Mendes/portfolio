import type { ComponentType } from 'react';
import {
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiGit,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiRedis,
  SiN8N,
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const personalInfo = {
  name: 'Guilherme Mendes',
  role: 'Backend Developer',
  taglines: [
    'Building robust APIs',
    'Designing scalable systems',
    'Crafting efficient databases',
    'Automating everything',
  ],
  bio: `I'm a passionate Backend Developer with expertise in building scalable,
        high-performance server-side applications. I love solving complex problems
        and creating efficient systems that power great user experiences.`,
  email: 'contato.guilhermesilvamendes@gmail.com',
  github: 'https://github.com/Guilherme-Silva-Mendes',
  linkedin: 'https://www.linkedin.com/in/guilherme-mendes-a35414244/',
};

export const skills: Skill[] = [
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
];

export const projects: Project[] = [
  {
    title: 'Authentication Software',
    description:
      'Complete authentication system with Two-Factor Authentication (2FA) and email verification for secure user access.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/Guilherme-Silva-Mendes/authentication-software',
  },
  {
    title: 'Webhooks Event',
    description:
      'Event-driven webhook system for real-time event processing and notification delivery.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'React', 'Ant Design'],
    github: 'https://github.com/Guilherme-Silva-Mendes/Webhook-Events',
  },
];

export const experiences: Experience[] = [
  {
    company: 'Corporate Software Company',
    role: 'Founder',
    period: '2026 - Present',
    description: [
      'Leading a company focused on corporate software development and SaaS',
      'Strategic planning and business development',
      'Creating solutions with automation and AI',
    ],
  },
  {
    company: 'Software Company',
    role: 'Team Leader / Manager',
    period: 'Oct 2025 - Present',
    description: [
      'Led the company\'s biggest project: Wappfy (WhatsApp API)',
      'Managing development team and project deliverables',
      'Architecting scalable backend solutions',
    ],
  },
  {
    company: 'Software Company',
    role: 'Developer',
    period: '2024 - Oct 2025',
    description: [
      'Developed software solutions for clients',
      'Built backend systems and APIs',
      'Collaborated with team on project delivery',
    ],
  },
  {
    company: 'Infrastructure Company',
    role: 'Technical Support',
    period: '2023',
    description: [
      'Provided technical support for infrastructure solutions',
      'Handled client communication and problem resolution',
      'Diagnosed and solved technical issues efficiently',
    ],
  },
];

export const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];
