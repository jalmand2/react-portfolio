import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';


function App() {
  // const [pageIndex, setPageIndex] = useState(0);

  return (

    <div id="canvas" class="root" style={{backgroundColor: '#8fb181'}}>
        {/* <Fireworks
    options={{
      rocketsPoint: {
        min: 0,
        max: 100
      }
    }}
    style={{
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      background: '#000',
    }}
  />   */}
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
      {/* <Projects />
      <Education />
      <Experience />
      <Contact />
      <ScrollButton /> */}
  
  
      {/* <Nav
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
      )} */}
    

              
    </div>
                  
);
}

export default App;
