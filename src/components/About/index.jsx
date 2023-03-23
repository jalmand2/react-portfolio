import React from 'react';
import '../About/about.css';
import DarkBack from '../images/background.jpg';
import ProfilePic from '../images/profile.jpg';

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
           
            <div style={{ borderRadius: '10px', marginBottom: '100px', marginTop: '100px' }}>
            <div class="row">
                <h1 class="text-box" style={{ color: 'rgb(52, 43, 30)', textAlign: 'center' }}>My Skills</h1>
            </div>
                <div class="container skills">
                    <div class="row skills-row">
                        <div class="col card text-center">
                            <iconify-icon class="rotate" icon="mdi:react" width="130" height="100"></iconify-icon>
                            <h4>React</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="mdi:language-javascript" width="130" height="100"></iconify-icon>
                            <h4>JavaScript</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="mdi:language-html5" width="130" height="100"></iconify-icon>
                            <h4>HTML</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="tabler:brand-css3" width="130" height="100"></iconify-icon>
                            <h4>CSS</h4>
                        </div>
                        </div>
                        <div class="row skills-row">
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="mdi:git" width="130" height="100"></iconify-icon>
                            <h4>Git</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="simple-icons:mongodb" width="130" height="100"></iconify-icon>
                            <h4>MongoDB</h4>
                        </div>
                        
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="mdi:graphql" width="130" height="100"></iconify-icon>
                            <h4>GraphQL</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon class="rotate" icon="mdi:bootstrap" width="130" height="100"></iconify-icon>
                            <h4>Bootstrap</h4>
                        </div>
                        </div>
                        <div class="row skills-row">
                        <div class="col card text-center">                            <iconify-icon icon="bxl:heroku" width="130" height="100"></iconify-icon>
                            <h4>Heroku</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon icon="tabler:brand-mysql" width="130" height="100"></iconify-icon>
                            <h4>MySQL</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon icon="simple-icons:express" width="130" height="100"></iconify-icon>
                            <h4>Express</h4>
                        </div>
                        <div class="col card text-center">                            <iconify-icon icon="la:node-js" width="130" height="100"></iconify-icon>
                            <h4>Node</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       

    );
};

export default About;