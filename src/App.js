import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/style/global.scss";
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;


