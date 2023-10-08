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
          <Route path="" element={<Introduction />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
