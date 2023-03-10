import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './pages';
import Test from './pages/Test';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/test' element={<Test />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
