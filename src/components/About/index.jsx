import React from 'react';
import '../styles/app.css';

const About = () => {
    return (
        <div class="container about">
            <div class="p-5 my-4 bg-light rounded-3 innerbox" style={{backgroundImage: "url(/images/background.jpg)", backgroundSize: 'cover'}}>
                <h1>About Me</h1>
                <img src="/images/profile.jpg" alt="profile" class="img-thumbnail"></img>
                <p class="lead">Hi! My name is Jessica Almand and I am an aspiring full-stack web developer. I am currently in training through the University of Central Florida where I am enrolled in the Full-Stack Web Development Coding Bootcamp. My anticipated graduation is set for December of 2022. I received my Bachelor of Science in Psychology in May of 2022 at Colorado State University. </p>
            </div>
        </div>
        
    );
};

export default About;