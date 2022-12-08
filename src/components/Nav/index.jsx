import React from 'react';
import '../styles/app.css';


const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
    return (
        <nav class='header navbar navbar-expand-lg' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div class="container-fluid">
                <h1 style={{ marginLeft: '10px', color: '#252323ff', fontFamily: 'La Belle Aurore' }}>Jessica Almand</h1>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse" style={{justifyContent: 'flex-end'}}>
                    <div class="navbar-nav">
                        <ul style={{ listStyle: 'none', display: 'flex', alignItems: 'flex-end', marginRight: '5rem' }}>
                            <li class="nav-item nav-link" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showAbout}>About</li>
                            <li class="nav-item nav-link" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showProjects}>Projects</li>
                            <li class="nav-item nav-link" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showContact}>Contact</li>
                            <li class="nav-item nav-link" style={{ marginLeft: '10px', color: '#252323ff' }} onClick={showResume}>Resume</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>   );
};

export default Nav;