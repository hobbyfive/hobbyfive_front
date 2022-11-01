import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import SignUp from './pages/SignUp';
import Create from './pages/Create';
import MyPage from './pages/MyPage';
import LoginButton from './pages/LoginButton';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/create" element={<Create />} />
    <Route path="/mypage" element={<MyPage />} /> 
    <Route path="/loginbutton" element={<LoginButton />} />
  </Routes>
  );
}

export default App;