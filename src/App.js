import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Projects from './components/Projects'
import Contact from './components/Contact'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/my-portfolio/" element={<Introduction />} />
          <Route path="/my-portfolio/projects" element={<Projects />} />
          <Route path="/my-portfolio/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
