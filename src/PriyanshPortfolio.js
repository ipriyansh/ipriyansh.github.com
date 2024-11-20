import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code, Award } from 'lucide-react';

const PriyanshPortfolio = () => {
  const [activeSection, setActiveSection] = useState('bio');

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
      url: 'https://www.linkedin.com/in/priyansh-sourav-8136a816b/',
      icon: <Linkedin size={24} />,
    },
    {
      name: 'Contact',
      url: 'mailto:priyansh5065@gmail.com',
      icon: <Mail size={24} />,
    }
  ];

  const sections = {
    bio: `Priyansh Sourav is a dedicated Data Engineer with a strong foundation in data processing, 
          ETL pipeline development, and cloud-based solutions, currently working at Accenture. 
          With proficiency in Python, SQL, and Google Cloud Platform (BigQuery), he has driven 
          significant improvements in data handling and workflow efficiency.`,
    skills: [
      'Python', 
      'SQL', 
      'Google Cloud Platform', 
      'BigQuery', 
      'ETL Pipelines', 
      'Data Processing',
      'DevOps',
      'Continuous Integration',
      'Agile Methodologies'
    ],
    experience: [
      {
        company: 'Accenture',
        location: 'Kolkata, India',
        role: 'Data Engineer',
        duration: 'Dec 2021 - Present',
        highlights: [
          'Developed complex ETL processes using Python and BigQuery, increasing efficiency by 40%',
          'Processed and analyzed 1TB of data using GCP BigQuery, improving data processing efficiency',
          'Collaborated with stakeholders to identify business process improvement opportunities',
          'Implemented agile methodologies to streamline project workflows and enhance cross-functional team productivity',
          'Designed and optimized BigQuery datasets for large-scale data storage and analysis',
          'Automated manual data preparation for 10 million records, reducing processing time by 80%',
          'Refactored legacy code to improve readability and maintainability',
          'Managed end-to-end data processes for two complex dashboards',
          'Developed and maintained ETL pipelines for transforming raw data into structured datasets',
          'Implemented advanced SQL queries to analyze customer data and identify key trends'
        ]
      },
      {
        company: 'Accenture',
        location: 'Pune, India',
        role: 'DevOps Engineer',
        duration: 'Dec 2019 - Dec 2021',
        highlights: [
          'Monitored automated build and continuous software integration processes',
          'Collaborated with team to analyze system solutions based on client requirements',
          'Decreased test environment downtime by 50% through proactive monitoring and troubleshooting'
        ]
      }
    ]
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'bio':
        return <p className="text-gray-300">{sections.bio}</p>;
      case 'skills':
        return (
          <ul className="grid grid-cols-2 gap-2">
            {sections.skills.map(skill => (
              <li key={skill} className="bg-gray-800 p-2 rounded text-center">
                {skill}
              </li>
            ))}
          </ul>
        );
      case 'experience':
        return sections.experience.map(exp => (
          <div key={`${exp.company}-${exp.role}`} className="bg-gray-800 p-4 rounded mb-4">
            <h3 className="text-xl font-bold text-red-600">{exp.company} - {exp.location}</h3>
            <div className="flex justify-between">
              <p className="text-gray-300 italic">{exp.role}</p>
              <p className="text-gray-400 text-sm">{exp.duration}</p>
            </div>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {exp.highlights.map(highlight => (
                <li key={highlight} className="text-gray-400 text-sm">{highlight}</li>
              ))}
            </ul>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-gray-800 rounded-lg shadow-2xl p-8">
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img 
            src="/api/placeholder/200/200" 
            alt="Priyansh Sourav" 
            className="rounded-full border-4 border-red-600 w-48 h-48 mb-4 md:mr-8"
          />
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-red-600">Priyansh Sourav</h1>
            <h2 className="text-xl text-gray-400">Data Engineer</h2>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-center space-x-4 mb-6">
            {['bio', 'skills', 'experience'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded transition ${
                  activeSection === section 
                    ? 'bg-red-600 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-gray-700 p-6 rounded">
            {renderSection()}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          {socialLinks.map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-400 transition"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriyanshPortfolio;
