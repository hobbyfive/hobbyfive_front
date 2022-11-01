import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Join from './pages/Join';
import Create from './pages/Create';
import MyPage from './pages/MyPage';
import ModalTemp from './pages/ModalTemp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/join" element={<Join />} />
      <Route path="/create" element={<Create />} />
      <Route path="/tmpmodal" element={<ModalTemp />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
