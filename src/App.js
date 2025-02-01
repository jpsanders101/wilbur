import './App.css';
import BasePage from './BasePage';
import About from './About';
import Writing from './Writing';
import Contact from "./Contact";
import CurrentProjects from "./CurrentProjects";
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <BasePage>
        <Routes>
          <Route index element={<About />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/current-projects" element={<CurrentProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BasePage>
    </BrowserRouter>
  );
}

export default App;
