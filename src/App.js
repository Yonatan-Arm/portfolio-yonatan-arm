
import './assets/style/global.scss';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';


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
      </main>

      
    </div>
  );
}

export default App;
