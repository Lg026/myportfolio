import React from 'react';
import introStyles from '../styles/intro.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

export const Introduction = () => {
  const techStack = [
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'npm', icon: faNpm },
    { name: 'MongoDB', icon: faDatabase },
    { name: 'Restful APIs', icon: faServer }
  ];

  return (
    <>
      <h1 className={introStyles.title}>Hello, I'm Luis</h1>
      <p className={introStyles.p}>a junior web developer with a passion for creating interactive websites. I'm a self taught programmer, and I've spent countless hours honing my skills in React, HTML, CSS, and JavaScript. The challenge of turning a concept into a functioning website and the problem solving that comes with it is something I love. I'm always eager to learn and grow, and I'm excited to bring my dedication and enthusiasm to my next role.</p>
      <h2 className={introStyles.title2}>Technologies I know</h2>
      <div className={introStyles.container}>
        <div className={introStyles.techNames}>
          {techStack.map((tech, index) => (
            <div key={index} className={introStyles.techItem}>
              {tech.name}
            </div>
          ))}
        </div>
        <div className={introStyles.techIcons}>
          {techStack.map((tech, index) => (
            <div key={index} className={introStyles.techItem}>
              <FontAwesomeIcon icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Introduction



