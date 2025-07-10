import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import LandingPage from './page/LandingPage';
import LoadingPage from './page/LoadingPage';
import LoginPage from './page/LoginPage';
import MyPage from './page/MyPage';
import NotFoundPage from './page/NotFoundPage';
import RegisterPage from './page/RegisterPage';
import StudyRoomPage from './page/StudyRoomPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/room/:roomId" element={<StudyRoomPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
