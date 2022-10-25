import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Create from './pages/Create';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/create" element={<Create />} />
    <Route path="/mypage" element={<MyPage />} />
  </Routes>
  );
}

export default App;