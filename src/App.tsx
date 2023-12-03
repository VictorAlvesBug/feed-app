import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

import { CurrentUserProvider } from 'context/CurrentUserContext';
import Login from 'pages/Login';

function App() {
  return (
    <CurrentUserProvider state={null}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </CurrentUserProvider>
  );
}

export default App;