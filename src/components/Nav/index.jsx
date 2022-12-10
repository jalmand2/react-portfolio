import React from 'react';
import '../styles/app.css';


const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
    return (
        <nav class='header navbar navbar-expand-lg' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div class="container-fluid">
                <h1 class= "name" style={{ marginLeft: '10px', color: '#252323ff', fontFamily: 'La Belle Aurore' }}>Jessica Almand</h1>
                <div style={{justifyContent: 'flex-end'}}>
                    <div class="navbar-nav">
                        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'flex-end', marginRight: '5rem' }}>
                            <li class= "navBorder" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showAbout}>About</li>
                            <li class= "navBorder" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showProjects}>Projects</li>
                            <li class= "navBorder" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showContact}>Contact</li>
                            <li class= "navBorder" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showResume}>Resume</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>   );
};

export default Nav;