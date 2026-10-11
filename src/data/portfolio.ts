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
    title: 'Software Student Intern - Backend Engineering',
    organization: 'Oracle, CrowdTwist',
    period: 'Jul. 2026 - Present',
  },
};

export const techStack = [
  'Swift',
  'Java',
  'TypeScript',
  'SQL',
  'PHP',
  'Spring Boot',
  'React',
  'Node.js',
  '.NET',
  'Docker',
  'Oracle Cloud',
];

export const experience: ExperienceEntry[] = [
  {
    period: 'Jul. 2026 - Present',
    title: 'Software Student Intern - Backend Engineering',
    organization: 'Oracle, CrowdTwist',
    location: 'Zapopan, Jalisco',
    description:
      'Developing and maintaining backend services for CrowdTwist, an enterprise loyalty platform supporting rewards, points, campaigns, and customer engagement. Migrating legacy PHP functionality into Java services while fixing runtime bugs and preserving production behavior. Building REST APIs, scheduled jobs, and database services, improving API performance, and maintaining unit, integration, and automated service tests. Built an AI-assisted workflow to automate Xdebug setup in ephemeral PHP containers, reducing a fragile manual process from about 30 minutes to about 5 minutes and making debugging practical for daily team use.',
    technologies: ['Java', 'PHP', 'REST APIs', 'Oracle Database', 'MySQL', 'Oracle Cache', 'Docker', 'JUnit', 'Xdebug'],
  },
  {
    period: 'Oct. 2025 - Jul. 2026',
    title: 'Backend Developer',
    organization: 'Mapcel',
    location: 'Zapopan, Jalisco',
    description:
      'Built RESTful APIs and scalable backend services for 15+ enterprise clients across telecom, BPM, and logistics, with robust error handling and fast database access. Improved response times through SQL query caching and database optimization across three service domains. Integrated services with WhatsApp chatbot workflows, increasing operational reporting rates by 75%.',
    technologies: ['.NET 10', 'REST APIs', 'SQL', 'C#', 'Business Process Management'],
  },
  {
    period: 'Sep. 2025 - Dec. 2025',
    title: 'Data Visualization App',
    organization: 'Jalisco Como Vamos NGO',
    location: 'Zapopan, Jalisco',
    description:
      'Transformed 2,400+ responses across 250 surveys into a normalized PostgreSQL database and built a React mobile experience with dynamic visualizations and filtering for analytical insights. Designed streamlined data exploration flows, keeping key export workflows within seven user interactions.',
    technologies: ['React Native', 'PostgreSQL', 'Power Query', 'Mobile UI'],
  },
  {
    period: 'Feb. 2025 - May 2025',
    title: 'Task Automation Lead Developer',
    organization: 'Mexicanos Primero A.C.',
    location: 'Zapopan, Jalisco',
    description:
      'Migrated 90% of manual workflows into a secure web platform impacting 3,000+ schools, with authentication and role-based access control to protect data integrity. Designed a scalable SQL database with response times under 100 ms for school operations.',
    technologies: ['React', 'Authentication', 'RBAC', 'SQL'],
  },
];

export const leadership: ExperienceEntry[] = [
  {
    period: 'Jul. 2026 - Aug. 2026',
    title: 'Volunteer Team Lead - School Supply Donation Initiative',
    organization: 'Oracle',
    location: '',
    description:
      'Led and coordinated 40 volunteers to purchase, assemble, and distribute 85 backpacks with school supplies for children across three care homes. Organized volunteer responsibilities, procurement, and delivery logistics to complete the initiative within one month.',
    technologies: ['Team Leadership', 'Volunteer Coordination', 'Procurement', 'Delivery Logistics'],
  },
];

export const projects: ProjectEntry[] = [
  {
    name: 'Talos Task Manager',
    period: 'Feb. 2026 - Jun. 2026',
    description:
      'Full-stack task manager with a Java Spring Boot REST API, React frontend, and Oracle Autonomous Database, supporting task, sprint, assignment, and Telegram bot workflows for 50+ users across 5+ teams. Deployed Dockerized backend services on Oracle Cloud Infrastructure, maintaining 99% uptime.',
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
