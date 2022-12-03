import Nav from './Nav';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function App() {
  const [pageIndex, setPageIndex] = useState(0);

  return {
    <div className="App">
    <Nav 
    showAbout={() => setPageIndex(0)}
    showProjects={() => setPageIndex(1)}
    showContact={() => setPageIndex(2)}
    showResume={() => setPageIndex(3)}
    />
    {pageIndex === 0 ? (
      <About />
    ) : pageIndex === 1 ? (
      <Portfolio />
    ) : pageIndex === 2 ? (
      <Contact />
    ) : pageIndex === 3 ? (
      <Resume />
    )}
    </div>
  };
}

export default App;
