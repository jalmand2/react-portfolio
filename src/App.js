import React, {useState} from 'react';

import '../src/components/styles/app.css';

import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <div class="root bg-image" style={{ backgroundColor: '#252323ff' }}>
      <Nav
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)} />
      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Portfolio />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : (
        <About />
      )}
      <footer className='text-center text-lg-left'>
                <div className='text-center p-3'>
                <a style={{color: 'white'}} href="https://github.com/jalmand2"><iconify-icon icon="ri:github-fill" width="100" height="100"></iconify-icon></a>
                <a style={{color: 'white'}} href="https://www.linkedin.com/in/jessicaalmand/"><iconify-icon icon="mdi:linkedin" width="100" height="100"></iconify-icon></a>
                <a style={{color: 'white'}} href="https://www.facebook.com/jessica.almand/"><iconify-icon icon="ic:baseline-facebook" width="100" height="100"></iconify-icon></a>
                </div>
              </footer>
    </div>
                
                
);
}

export default App;
