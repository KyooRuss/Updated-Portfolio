const repo = (name) => `https://github.com/KyooRuss/${name}`

// Newest first. Edit freely — each row shows name, description, tech, and links to GitHub.
export const projects = [
  {
    name: 'ScaNEU',
    description:
      'RFID-based vehicle access control for the NEU gate. A Raspberry Pi runs the access rules and a live dashboard, while Arduinos control the readers, barriers, and sensors.',
    tech: ['Python', 'Flask', 'Socket.IO', 'SQLite', 'Raspberry Pi', 'Arduino'],
    github: repo('IOT-ScaNEU'),
  },
  {
    name: 'PMS Financial Assistance',
    description:
      'Web system for managing financial assistance projects for water districts. Offices submit requirements and documents, admins review compliance, and every change is logged.',
    tech: ['Laravel', 'PHP', 'Tailwind CSS', 'Alpine.js'],
    github: repo('PMS-Financial-Assistance'),
  },
  {
    name: 'OrgFinder',
    description:
      'Helps students discover and join campus organizations: browse orgs and events, send membership requests, chat with orgs, and get announcements, on web and mobile.',
    tech: ['Laravel', 'Sanctum', 'React Native', 'Expo'],
    github: repo('Capstone2-OrgFinder'),
  },
  {
    name: 'FLM System',
    description:
      'Employees file leave requests and admins approve them. Includes JWT login, audit logs, PDF reports, and a documented REST API.',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    github: repo('FLM-System'),
  },
  {
    name: 'Parking Management',
    description:
      'Mobile app for parking operations: scan vehicle QR codes, view vehicle details, and confirm parking, with an admin web dashboard.',
    tech: ['React Native', 'Expo', 'TypeScript', 'Firebase'],
    github: repo('Parking-Management'),
  },
]
