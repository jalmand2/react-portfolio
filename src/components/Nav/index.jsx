import React from 'react';

const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
             <h1>Jessica Almand</h1>
             <ul style={{listStyle: 'none', display: 'flex', }}>
        <li onClick={showAbout}>About</li>
        <li onClick={showProjects}>Projects</li>
        <li onClick={showContact}>Contact</li>
        <li onClick={showResume}>Resume</li>
        </ul>
        </div>
    );
};

export default Nav;