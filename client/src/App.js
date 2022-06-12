import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Potluck from './pages/potluck';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/attending'} element={<Potluck />} />
      </Routes>
    </Router>
  );
}

export default App;
