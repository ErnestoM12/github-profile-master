import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router basename={import.meta.env.MODE === 'production' ? '/github-profile-master' : '/'}>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
