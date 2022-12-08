import React from 'react';

const Resume = () => {
    return (
        <div class="container about">
        <div class="p-5 my-4 bg-light rounded-3 innerbox" style={{backgroundImage: "url(/images/background.jpg)", backgroundSize: 'cover'}}>
            <h1>Resume</h1>
            
            <p class="lead">Download my <a href="https://docs.google.com/document/d/1qBjxV3FcT0bMTI6ZRg1_ECFtkwx25wnC/edit?usp=sharing&ouid=108866049119222675329&rtpof=true&sd=true">Resume</a></p>
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