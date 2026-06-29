export type ExperienceEntry = {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  technologies: string[];
};

export type ProjectEntry = {
  name: string;
  period?: string;
  description: string;
  technologies: string[];
  href?: string;
};

export type ContactEntry = {
  label: string;
  value: string;
  href: string;
};

export const profile = {
  name: 'Bernardo Santiago Marín',
  eyebrow: 'Portfolio / 2026',
  role: 'Backend Developer',
  location: 'Jalisco, Mexico',
  availability: 'Available for work',
  summary:
    'Computer Science student building reliable backend systems, data products, and full-stack tools for teams that need clear workflows and dependable software.',
  current: {
    title: 'Backend Developer',
    organization: 'Mapcel',
    period: 'Oct. 2025 - Present',
  },
};

export const techStack = [
  'Swift',
  'Java',
  'TypeScript',
  'SQL',
  'Spring Boot',
  'React',
  'Node.js',
  '.NET',
  'Docker',
  'Oracle Cloud',
];

export const experience: ExperienceEntry[] = [
  {
    period: 'Oct. 2025 - Present',
    title: 'Backend Developer',
    organization: 'Mapcel',
    location: 'Zapopan, Jalisco',
    description:
      'Building RESTful APIs and scalable backend services for enterprise clients across telecom, BPM, and logistics, with a focus on robust error handling and fast database access.',
    technologies: ['.NET 10', 'REST APIs', 'SQL', 'C#', 'Business Process Management'],
  },
  {
    period: 'Sep. 2025 - Dec. 2025',
    title: 'Data Visualization App',
    organization: 'Jalisco Como Vamos NGO',
    location: 'Zapopan, Jalisco',
    description:
      'Transformed survey data into a normalized PostgreSQL database and built a React mobile experience for analytical insights and interactive visualizations.',
    technologies: ['React Native', 'PostgreSQL', 'Power Query', 'Mobile UI'],
  },
  {
    period: 'Feb. 2025 - May 2025',
    title: 'Task Automation Lead Developer',
    organization: 'Mexicanos Primeros A.C.',
    location: 'Zapopan, Jalisco',
    description:
      'Migrated manual workflows into a secure web platform with authentication, role-based access control, and a scalable SQL database for school operations.',
    technologies: ['React', 'Authentication', 'RBAC', 'SQL'],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'Talos Task Manager',
    period: 'Feb. 2026 - Jun. 2026',
    description:
      'Full-stack task manager with a Java REST API, React frontend, Telegram bot interface, and Oracle Cloud deployment for active team collaboration.',
    technologies: ['Spring Boot', 'React', 'Oracle Autonomous Database', 'Docker', 'Telegram API'],
    href: '/projects/talos-task-manager',
  },
  {
    name: 'Object Detection System',
    period: 'Aug. 2024 - Dec. 2024',
    description:
      'IoT-powered truck prototype with stop sign detection, obstacle avoidance, real-time image recognition, and an iOS dashboard for live telemetry.',
    technologies: ['Raspberry Pi', 'OpenCV', 'SwiftUI', 'Firebase', 'IoT'],
    href: '/projects/object-detection-system',
  },
  {
    name: 'Crypto Alerts',
    period: 'Jun. 2026',
    description: 'Web-based crypto portfolio management tool with personalized notification events via Telegram and email.',
    technologies: ['React', 'Prisma', 'NestJS', 'Node Cron', 'Open API', 'CI/CD']
  },
];

export const contact: ContactEntry[] = [
  {
    label: 'Email',
    value: 'bernardo@harborlabs.dev',
    href: 'mailto:bernardo@harborlabs.dev',
  },
  {
    label: 'Phone',
    value: '+52 33 1333 6369',
    href: 'tel:+523313336369',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bernardo-sm',
    href: 'https://linkedin.com/in/bernardo-sm',
  },
  {
    label: 'GitHub',
    value: 'github.com/bernardosantiago44',
    href: 'https://github.com/bernardosantiago44',
  },
];
