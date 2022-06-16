import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/home';
import Potluck from './pages/potluck';
import Edit from './pages/edit';
import './App.css'

function App() {
  const [submitted, setSubmitted] = useState(false);

  const updateSubmitted = () => {
    setSubmitted(!submitted);
  };
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/attending'} element={<Potluck submitted={submitted} updateSubmitted={updateSubmitted}/>} />
        <Route path={'/edit'} element={<Edit submitted={submitted} updateSubmitted={updateSubmitted}/>} />
      </Routes>
    </Router>
  );
}

export default App;
