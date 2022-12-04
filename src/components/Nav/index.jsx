import React from 'react';

const Nav = ({ showAbout, showProjects, showContact, showResume }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
             <h1>Jessica Almand</h1>
             <ul style={{listStyle: 'none', display: 'flex', marginRight: '5rem' }}>
        <li style={{marginLeft: '10px'}} onClick={showAbout}>About</li>
        <li style={{marginLeft: '10px'}} onClick={showProjects}>Projects</li>
        <li style={{marginLeft: '10px'}} onClick={showContact}>Contact</li>
        <li style={{marginLeft: '10px'}} onClick={showResume}>Resume</li>
        </ul>
        </div>
    );
};

export default Nav;