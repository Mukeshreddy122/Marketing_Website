import "./App.css";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/Experience";
import Home from "./Sections/Home";
import Skills from "./Sections/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Experience />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
