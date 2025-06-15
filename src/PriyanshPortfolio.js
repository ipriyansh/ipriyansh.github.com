import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Award } from 'lucide-react';

const PriyanshPortfolio = () => {
  const [activeSection, setActiveSection] = useState('bio');
  const [isRotating, setIsRotating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageClick = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ipriyansh',
      icon: <Github size={24} />,
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/priyanshsourav64',
      icon: <Award size={24} />,
    },
    {
      name: 'LeetCode',
      url: 'https://www.leetcode.com/u/ipriyansh/',
      icon: <Code size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/priyansh-sourav/',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Contact',
      url: 'mailto:priyansh5065@gmail.com',
      icon: <Mail size={24} />,
    }
  ];

  const sections = {
    projects: [
      {
        title: 'Real-Time KPI Dashboard',
        description: 'Designed and developed a live dashboard using Power BI and BigQuery that tracks key metrics in real-time for over 50 users. The dashboard drove product decisions and received appreciation from leadership.',
        technologies: ['Power BI', 'BigQuery', 'Python'],
        link: 'https://github.com/ipriyansh/kpi-dashboard'
      },
      {
        title: 'ETL Automation Framework',
        description: 'Built automated ETL pipelines using Python and GCP that reduced data processing time by 80%. Enabled structured dataset delivery for downstream analytics.',
        technologies: ['Python', 'GCP', 'BigQuery'],
        link: 'https://github.com/ipriyansh/etl-automation'
      },
      {
        title: 'Portfolio Website',
        description: 'This personal portfolio is a fully responsive React-based site that showcases my professional experience, skills, and projects.',
        technologies: ['React', 'Tailwind CSS', 'GitHub Pages'],
        link: 'https://ipriyansh.github.io'
      }
    ],
    bio: `Priyansh Sourav is a Business Technology Professional with 5+ years of experience bridging tech and business teams to deliver data-driven solutions. With expertise in Python, SQL, and GCP (BigQuery), he specializes in building scalable ETL pipelines, automating workflows, and creating executive dashboards that drive business decisions. He has consistently delivered stakeholder-aligned data products and led feature prioritization initiatives to streamline strategic insights.`,
    skills: [
      'Python', 'SQL', 'PySpark', 'Google Cloud Platform', 'BigQuery', 'MySQL',
      'ETL Pipelines', 'Power BI', 'Tableau', 'Data Processing', 'DevOps',
      'A/B Testing', 'Data Storytelling', 'Excel', 'Git', 'JIRA', 'Confluence',
      'Agile Methodologies', 'Stakeholder Communication', 'Feature Prioritization'
    ],
    experience: [
      {
        company: 'Accenture',
        location: 'Gurugram, India',
        role: 'Data Engineer',
        duration: 'Dec 2021 - Present',
        highlights: [
          'Built ETL pipelines in Python and BigQuery to process 10M+ records daily',
          'Developed real-time KPI dashboard used by 50+ employees with positive feedback from leadership',
          'Automated data processing tasks, reducing manual prep time by 80%',
          'Created Power BI dashboards for executive reviews enabling strategic decisions',
          'Collaborated with 50+ stakeholders across departments to define and prioritize features',
          'Optimized query performance and reduced cloud computing cost by 30%',
          'Mentored 5 junior engineers and led analysis of 1TB+ datasets to uncover trends for roadmap development'
        ]
      },
      {
        company: 'Accenture',
        location: 'Pune, India',
        role: 'DevOps Engineer',
        duration: 'Dec 2019 - Dec 2021',
        highlights: [
          'Improved deployment pipeline, reducing failure rate by 30%',
          'Implemented monitoring systems to reduce downtime by 50%',
          'Analyzed user behavior to identify system friction and improved query performance by 30%',
          'Supported development of scalable systems to accommodate growing user base'
        ]
      }
    ]
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'bio':
        return <p className="text-gray-300 leading-relaxed animate-fade-in">{sections.bio}</p>;
      case 'skills':
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sections.skills.map((skill, index) => (
              <li key={skill} className="bg-gray-800 p-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in">
                <div className="text-center text-gray-300 font-medium">{skill}</div>
              </li>
            ))}
          </ul>
        );
      case 'experience':
        return sections.experience.map((exp, index) => (
          <div key={`${exp.company}-${exp.role}`} className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-red-500">{exp.company}</h3>
                <p className="text-gray-400">{exp.location}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 font-medium">{exp.role}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li key={highlight} className="text-gray-400 flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ));
      case 'projects':
        return (
          <div className="grid gap-6">
            {sections.projects.map((project, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in">
                <h3 className="text-xl font-bold text-red-500 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-2">{project.description}</p>
                <div className="text-sm text-gray-400 mb-2">Tech Stack: {project.technologies.join(', ')}</div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                  View Project
                </a>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4 md:p-8">
      <div className={`max-w-4xl w-full bg-gray-800 rounded-xl shadow-2xl p-6 md:p-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div onClick={handleImageClick} className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${isRotating ? 'rotate-360' : ''}`}>
            <img src="preview.jpg" alt="Priyansh Sourav" className="relative rounded-full w-48 h-48 mb-4 md:mr-8 object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-red-500 mb-2">Priyansh Sourav</h1>
            <h2 className="text-xl text-gray-400 mb-4">Data Engineer | Product-Oriented Technologist</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transform hover:scale-110 transition-all duration-300" aria-label={link.name}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            {['bio', 'skills', 'experience', 'projects'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${activeSection === section ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriyanshPortfolio;
