import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Create from './pages/Create';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/create" element={<Create />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;