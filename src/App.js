import './App.css';
import BasePage from './BasePage';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
      <BasePage>
        <Routes>
          <Route index element={<About />} />
          <Route path="/writing" element={<div>Writing</div>} />
          <Route path="/current-projects" element={<div>Current Projects</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </BasePage>
    </BrowserRouter>
  );
}

export default App;
