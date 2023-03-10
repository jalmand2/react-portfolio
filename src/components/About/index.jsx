import React from 'react';
import '../styles/app.css';
import DarkBack from '../images/darkback.jpg';
import ProfilePic from '../images/profile.jpg';

const About = () => {
    return (
        <div class="container">
            <div class="p-5 my-4 bg-light rounded-3 innerbox" style={{ backgroundImage: 'url(' + DarkBack + ')', backgroundSize: 'cover' }}>
                <div class="row">
                    <h1>About Me</h1>
                </div>
                <div className="row">
                    <img src={ProfilePic} alt="profile" style={{ border: 'solid', borderColor: 'black', boxShadow: '5px 5px 5px 1px black' }}></img>
                </div>
                <div class="row">
                    <p class="lead">Hi! My name is Jessica Almand and I am an aspiring full-stack web developer. I am currently in training through the University of Central Florida where I am enrolled in the Full-Stack Web Development Coding Bootcamp. My anticipated graduation is set for December of 2022. I received my Bachelor of Science in Psychology in May of 2022 at Colorado State University. </p>
                </div>
            </div>
            <div id="skills" class="content-section-b navBorder" style={{ borderRadius: '10px', marginBottom: '100px', marginTop: '100px' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="mdi:react" width="100" height="100"></iconify-icon>
                            <h3>React.js</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="mdi:language-javascript" width="100" height="100"></iconify-icon>
                            <h3>JavaScript</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="mdi:language-html5" width="100" height="100"></iconify-icon>
                            <h3>HTML5</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="tabler:brand-css3" width="100" height="100"></iconify-icon>
                            <h3>CSS3</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="mdi:git" width="100" height="100"></iconify-icon>
                            <h3>Git</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="mdi:npm" width="100" height="100"></iconify-icon>
                            <h3>Npm</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon class="rotate" icon="mdi:bootstrap" width="100" height="100"></iconify-icon>
                            <h3>Bootstrap</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon icon="bxl:heroku" width="100" height="100"></iconify-icon>
                            <h3>Heroku</h3>
                        </div>
                        <div class="col-sm-4 wow fadeInDown text-center animated animated" style={{ visibility: "visible" }}>
                            <iconify-icon icon="tabler:brand-mysql" width="100" height="100"></iconify-icon>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;