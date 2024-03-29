import React from 'react';
import Logo from '../images/JA Logo.png';
import '../Header/header.css';


const Header = () => {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //       top: 0,
    //       behavior: 'smooth'
    //     });
    //   }
    return (
            <div class="header ">
                    <img class="logo" src={Logo} alt="logo"></img>
                <div>
                    <a href="https://github.com/jalmand2"><iconify-icon icon="ri:github-fill" width="50" height="100"></iconify-icon></a>
                    <a href="https://www.linkedin.com/in/jessicaalmand/"><iconify-icon icon="mdi:linkedin" width="50" height="100"></iconify-icon></a>
                    <a href="https://www.facebook.com/jessica.almand/"><iconify-icon icon="ic:baseline-facebook" width="50" height="100"></iconify-icon></a>
                    <a href="mailto:jlalmand27@gmail.com" target='new'><iconify-icon icon="ic:round-email" width="50" height="100"></iconify-icon></a>
                </div>
            </div>
    );
}

export default Header;