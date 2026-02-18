export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  image: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface NavLink {
  id: string;
  to: string;
}

export const personalInfo = {
  name: 'Guilherme Mendes',
  role: 'Backend Developer',
  email: 'contato.guilhermesilvamendes@gmail.com',
  location: 'Caruaru-PE, Brazil',
  phone: '+55 (81) 9238-5712',
  github: 'https://github.com/Guilherme-Silva-Mendes',
  linkedin: 'https://www.linkedin.com/in/guilherme-mendes-a35414244/',
  instagram: 'https://instagram.com/',
};

export const skills: Skill[] = [
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Vue.js', icon: 'vuejs' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'n8n', icon: 'n8n' },
];

export const projects: Project[] = [
  {
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800',
    tags: ['TypeScript', 'React', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/Guilherme-Silva-Mendes/authentication-software',
  },
  {
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    tags: ['TypeScript', 'Node.js', 'Redis', 'PostgreSQL', 'React', 'Ant Design'],
    github: 'https://github.com/Guilherme-Silva-Mendes/Webhook-Events',
  },
];

export const navLinks: NavLink[] = [
  { id: 'home', to: 'hero' },
  { id: 'about', to: 'about' },
  { id: 'skills', to: 'skills' },
  { id: 'projects', to: 'projects' },
  { id: 'experience', to: 'experience' },
  { id: 'contact', to: 'contact' },
];
