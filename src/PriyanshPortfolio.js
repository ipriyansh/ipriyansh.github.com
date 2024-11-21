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
    bio: `Priyansh Sourav is a dedicated Data Engineer with a strong foundation in data processing, 
          ETL pipeline development, and cloud-based solutions, currently working at Accenture. 
          With proficiency in Python, SQL, and Google Cloud Platform (BigQuery), he has driven 
          significant improvements in data handling and workflow efficiency.`,
    skills: [
      'Python', 
      'SQL', 
      'R',
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
        return (
          <p className="text-gray-300 leading-relaxed animate-fade-in">
            {sections.bio}
          </p>
        );
      case 'skills':
        return (
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sections.skills.map((skill, index) => (
              <li 
                key={skill}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-lg shadow-lg 
                          transform hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center text-gray-300 font-medium">
                  {skill}
                </div>
              </li>
            ))}
          </ul>
        );
      case 'experience':
        return sections.experience.map((exp, index) => (
          <div 
            key={`${exp.company}-${exp.role}`}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg mb-6 
                      transform hover:scale-[1.02] transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 
                              bg-clip-text text-transparent">{exp.company}</h3>
                <p className="text-gray-400">{exp.location}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 font-medium">{exp.role}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li 
                  key={highlight} 
                  className="text-gray-400 flex items-start space-x-2"
                  style={{ animationDelay: `${(index * 200) + (i * 100)}ms` }}
                >
                  <span className="text-red-500 mt-1">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                    text-white flex items-center justify-center p-4 md:p-8">
      <div 
        className={`max-w-4xl w-full bg-gradient-to-br from-gray-800 to-gray-900 
                   rounded-xl shadow-2xl p-6 md:p-8 transform transition-all duration-1000 
                   ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div 
            onClick={handleImageClick}
            className={`relative group cursor-pointer transform transition-all duration-500 
                      hover:scale-105 ${isRotating ? 'rotate-360' : ''}`}
          >
            <div className="absolute -inset-0.5  
                          rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
            <img 
              src="preview.jpg" 
              alt="Priyansh Sourav" 
              className="relative rounded-full w-48 h-48 mb-4 md:mr-8 object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 
                          bg-clip-text text-transparent mb-2">
              Priyansh Sourav
            </h1>
            <h2 className="text-xl text-gray-400 mb-4">Data Engineer</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-400 transform hover:scale-110 
                           transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            {['bio', 'skills', 'experience'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2 rounded-lg transition-all duration-300 transform 
                          hover:scale-105 ${
                  activeSection === section 
                    ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg">
            {renderSection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriyanshPortfolio;
