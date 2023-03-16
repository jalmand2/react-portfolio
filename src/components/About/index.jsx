import React from 'react';
import '../About/about.css';
import DarkBack from '../images/background.jpg';
import ProfilePic from '../images/profile.JPG';

const About = () => {
    return (
        <div class="introDiv">
            <div class="about-pic p-5" style={{ backgroundImage: 'url(' + DarkBack + ')' }}>
                <div class="row bio" style={{ textAlign: 'center' }}>
                    <h1 class="col title" style={{ alignContent: 'center' }}>Hi, I'm Jessica. Welcome to my portfolio!</h1>
                </div>

            </div>
            <div class="container">
                <div class="row bio-para" style={{ paddingTop: 30 }}>
                    <h1 class="text-box">A Little About Me</h1>
                    <img class="col-6 profile-pic" src={ProfilePic} alt="profile" style={{ padding: 0, boxShadow: '5px 5px 5px 5px black', alignContent: 'center' }}></img>
                    <p class="text-box">Hi, my name is Jessica. I currently reside in Cocoa, Florida but consider myself to be from Colorado. As other military brats understand, where you’re from is never an easy question to answer when you grew up moving around a lot. Out of college, I planned to pursue a career in Occupational Therapy with a background in psychology. I shifted gears after completing my degree, applied for a job in software development with no experience and finally felt like I found the career for me. I love this field, I feel like it’s a great field that embraces my military-lifestyle-fueled way of life in that every day as a developer is a different day. I aim to develop clean and easy-to-use applications and strive to sharpen my skills to the best of my ability.</p>
                </div>
            </div>
            <div class="row">
                <h1 style={{ color: 'white', textAlign: 'center' }}>My Skills</h1>
            </div>
            <div id="skills" class="content-section-b " style={{ borderRadius: '10px', marginBottom: '100px', marginTop: '100px' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 card text-center navBorder skills-cards">
                            <iconify-icon class="rotate" icon="mdi:react" width="100" height="100"></iconify-icon>
                            <h3>React.js</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon class="rotate" icon="mdi:language-javascript" width="100" height="100"></iconify-icon>
                            <h3>JavaScript</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon class="rotate" icon="mdi:language-html5" width="100" height="100"></iconify-icon>
                            <h3>HTML5</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon class="rotate" icon="tabler:brand-css3" width="100" height="100"></iconify-icon>
                            <h3>CSS3</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon class="rotate" icon="mdi:git" width="100" height="100"></iconify-icon>
                            <h3>Git</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon class="rotate" icon="mdi:npm" width="100" height="100"></iconify-icon>
                            <h3>Npm</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon class="rotate" icon="mdi:bootstrap" width="100" height="100"></iconify-icon>
                            <h3>Bootstrap</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon icon="bxl:heroku" width="100" height="100"></iconify-icon>
                            <h3>Heroku</h3>
                        </div>
                        <div class="col-sm-4 card text-center">                            <iconify-icon icon="tabler:brand-mysql" width="100" height="100"></iconify-icon>
                            <h3>MySQL</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;