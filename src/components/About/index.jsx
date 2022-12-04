import React from 'react';
import '../styles/app.css'

const About = () => {
    return (
        <div class='about' style={{width: '18rem', class:'card', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{class: 'card-title'}}>About Me</h1>
        <p class="card-body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    );
};

export default About;