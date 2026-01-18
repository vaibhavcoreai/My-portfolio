// Detailed project data structure
export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  duration: string;
  role: string;
  link?: string;
  github?: string;
}

// Learning Journey - Data Science & ML Learning Path
export const learningJourneyData: ProjectData[] = [
  {
    id: 'Foundations',
    title: 'Foundations',
    category: 'Python · SQL · Statistics',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'To develop a solid understanding of Python programming, SQL-based data handling, and statistical thinking essential for data-driven problem solving.',
    challenge: 'Healthcare providers needed a robust system to analyze vast amounts of patient data and medical imaging to predict potential health complications before they become critical. Traditional methods were time-consuming and prone to human error.',
    solution: '1. Learning Python syntax, data structures, and basic scripting, 2. Understanding SQL queries for data extraction and manipulation , 3. Studying descriptive statistics, probability, and data interpretation 4. Practicing through small exercises and problem sets',
    results: [
      'Gained confidence in writing clean Python code',
      'Understood how data is stored, queried, and analyzed',
      'Built a strong base for advanced analytics and machine learning',
    ],
    technologies: ['Python', 'SQL', 'Statistics', 'Jupyter Notebook', 'Problem Solving', 'Math',],
    duration: 'Ongoing · Year 1',
    role: 'Core Programming & Data Fundamentals'
  },
  {
    id: 'Data-Analysis-&-Visualization',
    title: 'Data Analysis & Visualization',
    category: 'Exploratory Data Analysis',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'An exploration into understanding data through analysis and visual storytelling.',
    challenge: 'To learn how to analyze datasets, uncover patterns, and communicate insights visually.',
    solution: '1. Working with structured datasets using Pandas, 2.Cleaning and preprocessing real-world data 3. Creating basic visualizations to identify trends and relationships 4. Interpreting results rather than just plotting data',
    results: [
      'Learned how to explore datasets systematically',
      'Improved ability to draw insights from raw data',
      'Developed clarity in presenting findings visually',
    ],
    technologies: ['Pandas', 'NumPy', 'Matplotlib', 'Data Cleaning', 'EDA',],
    duration: 'Upcoming · Early Learning Phase',
    role: 'Exploratory Data Analysis (EDA)'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning',
    category: 'Machine learning concepts and models',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A beginner-level introduction to machine learning concepts and models.',
    challenge: 'To understand how machines learn from data and apply simple models to real problems.',
    solution: '1.Learning core ML concepts like features, labels, and model evaluation 2.Implementing simple models such as Linear Regression 3. Understanding overfitting, underfitting, and model performance 4.Experimenting with small datasets to build intuition',
    results: [
      'Built a conceptual understanding of machine learning workflows',
      'Implemented first ML models with guidance and practice',
      'Prepared groundwork for advanced ML and AI topics',
    ],
    technologies: ['Python', 'Scikit-learn', 'Linear Regression', 'Model Evaluation'],
    duration: 'Planned · Foundation Stage',
    role: 'Supervised Learning Basics'
  }
];

// Actual Built Projects - Real applications and websites
export const actualProjectsData: ProjectData[] = [
  {
    id: 'writer-app',
    title: 'Writer',
    category: 'Full-stack Development',
    year: '2026',
    image: '/writer-project.png',
    description: 'A sanctuary for your thoughts. Distraction-free writing platform for modern storytellers, featuring real-time sync, focus mode, and a public library for readers.',
    challenge: 'To create an elegant, minimalist writing platform that eliminates distractions while providing powerful features for both writers (content creation, chapter management, publishing) and readers (discovery, engagement, responsive reading experience). The challenge was balancing simplicity with functionality while ensuring real-time data synchronization and security.',
    solution: '1. Built distraction-free editor with TipTap for seamless rich-text experience 2. Implemented Firebase Authentication (Google OAuth & Email/Password) for secure access 3. Utilized Cloud Firestore for real-time data sync without page refreshes 4. Designed focus mode and smart auto-save to prevent content loss 5. Created public library with advanced filtering and discovery features 6. Implemented granular Firestore security rules for data privacy 7. Deployed on Vercel with Firebase Hosting for optimal performance',
    results: [
      'Successfully deployed production-ready writing platform',
      'Implemented real-time collaboration features with Cloud Firestore',
      'Created seamless authentication flow with Firebase Auth',
      'Built responsive design optimized for all devices',
      'Achieved smooth UX with carefully crafted micro-interactions'
    ],
    technologies: ['React 19', 'Vite 7', 'Tailwind CSS 4', 'TipTap', 'React Router 7', 'Firebase Auth', 'Cloud Firestore', 'Vercel', 'TypeScript'],
    duration: 'Completed · January 2026',
    role: 'Full-stack Development · UI/UX Design · Firebase Integration',
    link: 'https://forwriters.vercel.app/',
    github: 'https://github.com/vaibhavcoreai/writer'
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Front-end Development',
    year: '2026',
    image: 'https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A personal portfolio created to document my learning journey and growth in technology.',
    challenge: 'To design and build a professional online presence that showcases my skills, projects, and learning progress.',
    solution: '1.Designing a clean and minimal UI 2.Building the website using modern frontend tools 3.Learning component-based architecture in React 4.Iterating based on design, performance, and usability',
    results: [
      'Built and deployed my first professional portfolio',
      'Improved understanding of frontend development',
      'Learned advanced animations with Framer Motion',
      'Created a platform to document future projects and achievements'
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Vite', 'Git & GitHub'],
    duration: 'Active · Self-Initiated Project',
    role: 'Frontend Development & Personal Branding'
  }
];

// Combined data for routing (backward compatibility)
export const projectsData: ProjectData[] = [...learningJourneyData, ...actualProjectsData];
