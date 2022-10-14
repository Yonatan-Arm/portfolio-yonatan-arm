
import './assets/style/global.scss';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <header>
      <Navbar />
      </header>
      <main>
      <Hero />
      <About />
      <Skills /> 
      <Education />
      <Projects />
      </main>

      
    </div>
  );
}

export default App;
