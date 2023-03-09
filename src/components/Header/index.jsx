import React from 'react';
import '../styles/app.css';


const Header = () => {
    return (
        <div class='header navbar navbar-expand-lg' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div class="container-fluid">
                <h1 class="name" style={{ marginLeft: '10px', color: '#252323ff', fontFamily: 'La Belle Aurore' }}>Jessica Almand</h1>
                <div style={{ justifyContent: 'flex-end' }}>
                    <a style={{ color: 'white' }} href="https://github.com/jalmand2"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                    <a style={{ color: 'white' }} href="https://www.linkedin.com/in/jessicaalmand/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                    <a style={{ color: 'white' }} href="https://www.facebook.com/jessica.almand/"><iconify-icon icon="ic:baseline-facebook" width="100" height="100"></iconify-icon></a>
                </div>
            </div>
        </div>
    );
};

export default Header;