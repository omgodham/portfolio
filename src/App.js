
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  return (
    <div className="App">
     {/* home */}
     <Home /> 
     {/* aboutme */}
     <About />
     {/* projects */}
     <Projects />
     {/* contact */}
     <Contact />
    </div>
  );
}

export default App;
