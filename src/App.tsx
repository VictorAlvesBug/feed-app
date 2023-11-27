import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';

function App() {
  return (
    // <Home/>
    // <SignUp />

    <
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;