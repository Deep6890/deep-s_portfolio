import {
  SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiReact,
  SiPython, SiJupyter, SiKaggle,
  SiMysql, SiMongodb, SiSupabase,
  SiTensorflow, SiNumpy, SiPandas, SiOpencv, SiCplusplus, SiGit
} from 'react-icons/si'

export const skillsData = {
  heading: 'What I Build With',
  description: [
    'I build full-stack applications and intelligent systems using modern web technologies and data-driven tools.',
    'From frontend interfaces to machine learning pipelines, I focus on clean architecture and practical scalability.'
  ],

  // Technical skills grouped by domain
  techGroups: [
    {
      label: 'Frontend',
      skills: [
        { name: 'HTML',       icon: SiHtml5 },
        { name: 'CSS',        icon: SiCss3 },
        { name: 'Tailwind',   icon: SiTailwindcss },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React',      icon: SiReact },
      ]
    },
    {
      label: 'Data & ML',
      skills: [
        { name: 'Python',       icon: SiPython },
        { name: 'Jupyter',      icon: SiJupyter },
        { name: 'NumPy',        icon: SiNumpy },
        { name: 'Pandas',       icon: SiPandas },
        { name: 'TensorFlow',   icon: SiTensorflow },
        { name: 'Scikit-Learn', icon: SiPython },
        { name: 'OpenCV',       icon: SiOpencv },
        { name: 'Kaggle',       icon: SiKaggle },
      ]
    },
    {
      label: 'Databases',
      skills: [
        { name: 'MySQL',    icon: SiMysql },
        { name: 'MongoDB',  icon: SiMongodb },
        { name: 'Supabase', icon: SiSupabase },
      ]
    },
    {
      label: 'Languages & Tools',
      skills: [
        { name: 'C++',  icon: SiCplusplus },
        { name: 'Java', icon: SiPython },
        { name: 'Git',  icon: SiGit },
      ]
    }
  ],

  // Soft skills — no icons, text-driven
  softSkills: [
    {
      title: 'Team Lead',
      description: 'Led cross-functional teams through hackathons and project sprints. Comfortable owning decisions under pressure.'
    },
    {
      title: 'Workflow Manager',
      description: 'Structures work into clear phases — research, build, test, ship. Keeps projects moving without losing quality.'
    },
    {
      title: 'Problem Decomposition',
      description: 'Breaks complex systems into solvable parts. Thinks in layers — from data input to user output.'
    },
    {
      title: 'Fast Learner',
      description: 'Picked up XGBoost, Supabase, and financial modeling from scratch while building AEGIS-FIN in weeks.'
    },
    {
      title: 'Clear Communicator',
      description: 'Presented technical work on stage at IIIT Dharwad to industry judges. Translates code into plain language.'
    },
    {
      title: 'Self-Directed',
      description: 'Most projects started from curiosity, not coursework. Builds things because the problem is interesting.'
    },
    {
      title: 'Attention to Detail',
      description: 'Cares about the small things — naming, structure, edge cases. The kind of detail that separates working from good.'
    },
    {
      title: 'Resilient Under Pressure',
      description: 'Competed in hackathons with tight deadlines and delivered. Treats bugs as puzzles, not blockers.'
    }
  ]
}
