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
    < div >
    <Nav
      showAbout={() => setPageIndex(0)}
      showProjects={() => setPageIndex(1)}
      showContact={() => setPageIndex(2)}
      showResume={() => setPageIndex(3)}
    />
  {
    pageIndex === 0 ? (
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
    </div >
);
}

export default App;
