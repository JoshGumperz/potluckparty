import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Potluck from './pages/potluck';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/test'} element={<Potluck />} />
      </Routes>
    </Router>
  );
}

export default App;
