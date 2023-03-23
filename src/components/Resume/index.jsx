import React from 'react';
import '../Resume/resume.css';
import ResumePDF from '../images/Jessica Almand Resume.pdf';
import Union from '../images/unionstation.jpg';

const Resume = () => {
    return (
        <div class="container">
        <div class="p-5 my-4 bg-light rounded-3" style={{backgroundImage: 'url('+Union+')', backgroundSize: 'cover'}}>
            <h1 style={{color: 'white'}}>Resume</h1>
            <p style={{color: 'white'}}>Download my resume <a href={ResumePDF} download= "MyResumePDF" rel="noreferrer" target='_blank'><iconify-icon class= "resume" icon="material-symbols:download-rounded"></iconify-icon></a></p>
            <div class="row align-items-start">
        <div class="col" style={{color: 'white'}}>
        <h3>Technical Languages:</h3>
        <ul>
        <li> HTML5</li>
         <li>CSS3</li>
         <li>JavaScript ES6+</li> 
         <li>Markdown</li> 
         <li>Node.js</li>
         <li>jQuery</li>
         <li>Git</li>
         <li>Express</li>
         <li>MySQL</li>
         <li>Sequelize</li>
         <li>Handlebars.js </li>
         <li>Bootstrap CSS</li>
         <li>Tailwind CSS</li>
         <li>React.js</li>
        </ul>
        </div>
        <div class="col" style={{color: 'white'}}>
        <h3>Applications:</h3>
        <ul>
            <li>VS Code</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>DBeaver</li>
            <li>Insomnia</li>
            <li>MongoDB Compass</li>

        </ul>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Resume;