export type ExperienceEntry = {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  technologies: string[];
};

export type Project = {
  id: string;
  name: string;
  period?: string;
  description: string;
  technologies: string[];
  href?: string;
  details?: ProjectDetails;
};

export type ProjectDetails = {
  role?: string;
  architectureItems: ProjectListItem[];
  importantDecisions: ProjectListItem[];
  challenges: ProjectListItem[];
  stack: ProjectStackGroup[];
  results: ProjectResultItem[];
};

export type ContactEntry = {
  label: string;
  value: string;
  href: string;
};

export type ProjectListItem = {
  title: string;
  description: string;
};

export type ProjectStackGroup = {
  label: string;
  items: string[];
};

export type ProjectResultItem = {
  value: string;
  label: string;
  description?: string;
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

export const projects: Project[] = [
  {
    id: 'talos-task-manager',
    name: 'Talos Task Manager',
    period: 'Feb. 2026 - Jun. 2026',
    description:
      'Full-stack task manager with a Java REST API, React frontend, Telegram bot interface, and Oracle Cloud deployment for active team collaboration.',
    technologies: ['Spring Boot', 'React', 'Oracle Autonomous Database', 'Docker', 'Telegram API'],
    href: '/projects/talos-task-manager',
    details: {
      role: 'Backend developer',
      architectureItems: [
        {
          title: 'API first backend',
          description:
            'Spring Boot exposes the core task, user, and collaboration flows through REST endpoints that can support both the web client and the Telegram interface.',
        },
        {
          title: 'React workspace',
          description:
            'The frontend keeps task planning, filtering, and team context in a focused interface designed for day-to-day project tracking.',
        },
        {
          title: 'Cloud deployment path',
          description:
            'Docker packages the services consistently, while Oracle Autonomous Database stores the relational project and task data.',
        },
        {
          title: 'Monolith layered architecture',
          description:
            'Single deployable application with clear separation of concerns for easy development and deployment.',
        },
      ],
      importantDecisions: [
        {
          title: 'Keep collaboration channels lightweight',
          description:
            'Telegram is used as a fast interaction layer for reminders and updates instead of forcing every action through the main web app.',
        },
        {
          title: 'Use a relational model for work tracking',
          description:
            'Tasks, users, status changes, and team assignments are structured as durable records so future reporting and audit features remain possible.',
        },
        {
          title: 'Separate product workflows from integrations',
          description:
            'The bot integration sits outside the core task rules, which keeps the product logic easier to test and extend.',
        },
      ],
      challenges: [
        {
          title: 'Keeping bot commands predictable',
          description:
            'The command design needed to be short enough for chat while still mapping cleanly to task states and project context.',
        },
        {
          title: 'Coordinating multiple clients',
          description:
            'The API has to protect consistency when tasks are updated from both the browser and Telegram.',
        },
      ],
      stack: [
        {
          label: 'Backend',
          items: ['Spring Boot', 'Java', 'REST APIs', 'Oracle Autonomous Database'],
        },
        {
          label: 'Frontend',
          items: ['React', 'TypeScript', 'Responsive UI'],
        },
        {
          label: 'Operations',
          items: ['Docker', 'Oracle Cloud', 'Environment configuration'],
        },
        {
          label: 'Integrations',
          items: ['Telegram API', 'Bot commands', 'Notifications'],
        },
      ],
      results: [
        {
          value: 'Design',
          label: 'User interfaces',
          description: 'A web workspace and Telegram bot both connect to the same product workflow.',
        },
        {
          value: 'Backend',
          label: 'Shared API',
          description: 'One backend owns the task rules and keeps clients consistent.',
        },
        {
          value: 'Cloud',
          label: 'Deployment ready',
          description: 'The app is structured for repeatable container-based deployment.',
        },
      ],
    },
  },
  {
    id: 'object-detection-system',
    name: 'Object Detection System',
    period: 'Aug. 2024 - Dec. 2024',
    description:
      'IoT-powered truck prototype with stop sign detection, obstacle avoidance, real-time image recognition, and an iOS dashboard for live telemetry.',
    technologies: ['Raspberry Pi', 'OpenCV', 'SwiftUI', 'Firebase', 'IoT'],
    href: '/projects/object-detection-system',
    details: {
      role: 'Mobile and computer vision developer',
      architectureItems: [
        {
          title: 'Raspberry Pi control layer',
          description:
            'The prototype runs camera capture, detection logic, and hardware signals close to the vehicle so safety reactions do not depend on the dashboard.',
        },
        {
          title: 'Computer vision pipeline',
          description:
            'OpenCV processes frames to identify stop signs and relevant obstacles in real time for autonomous driving behavior.',
        },
        {
          title: 'iOS telemetry dashboard',
          description:
            'SwiftUI presents vehicle state, detection feedback, and live telemetry in a compact mobile dashboard connected through Firebase.',
        },
      ],
      importantDecisions: [
        {
          title: 'Run detection on-device',
          description:
            'Keeping recognition near the camera reduced latency and made the prototype more resilient when network conditions changed.',
        },
        {
          title: 'Separate telemetry from movement control',
          description:
            'The mobile app observes and visualizes state, while the Raspberry Pi keeps direct responsibility for vehicle behavior.',
        },
        {
          title: 'Use Firebase for fast synchronization',
          description:
            'Firebase provided a practical path for moving prototype telemetry into the dashboard without building custom realtime infrastructure.',
        },
      ],
      challenges: [
        {
          title: 'Balancing detection accuracy and frame rate',
          description:
            'Image processing had to remain responsive on constrained hardware while still detecting signs and obstacles reliably.',
        },
        {
          title: 'Designing clear telemetry',
          description:
            'The dashboard needed to surface only the signals that helped test and debug the prototype during runs.',
        },
      ],
      stack: [
        {
          label: 'Hardware',
          items: ['Raspberry Pi', 'Camera module', 'Vehicle prototype'],
        },
        {
          label: 'Vision',
          items: ['OpenCV', 'Frame processing', 'Object detection'],
        },
        {
          label: 'Mobile',
          items: ['SwiftUI', 'iOS dashboard', 'Live telemetry'],
        },
        {
          label: 'Data',
          items: ['Firebase', 'Realtime updates', 'Prototype state'],
        },
      ],
      results: [
        {
          value: 'Real time',
          label: 'Detection loop',
          description: 'The prototype reacted to visual input while the vehicle was running.',
        },
        {
          value: 'iOS',
          label: 'Telemetry dashboard',
          description: 'A mobile interface made testing and debugging easier during prototype sessions.',
        },
        {
          value: 'IoT',
          label: 'Integrated system',
          description: 'Hardware, vision, cloud data, and mobile UI worked as one prototype.',
        },
      ],
    },
  },
  {
    id: 'crypto-alerts',
    name: 'Crypto Alerts',
    period: 'Jun. 2026',
    description:
      'A web-based crypto portfolio tracking tool with market data integration, custom price alerts, Telegram notifications, and a React dashboard for portfolio analysis.',
    technologies: ['React', 'Prisma', 'NestJS', 'PostgreSQL', 'Node Cron', 'Open API', 'CI/CD', 'Render'],
  },
];

export function getProject(id: string): Project {
  const project = projects.find((entry) => entry.id === id);

  if (!project) {
    throw new Error(`Project not found: ${id}`);
  }

  return project;
}

export function getProjectDetails(id: string): ProjectDetails {
  const { details } = getProject(id);

  if (!details) {
    throw new Error(`Project details not found: ${id}`);
  }

  return details;
}

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
