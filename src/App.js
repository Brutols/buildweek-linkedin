
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import ProtectedRoutes from './middleware/ProtectedRoutes';
import ProfilePage from './pages/ProfilePage';

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route element={<ProtectedRoutes/>}>
        <Route path='/:id' element={<ProfilePage/>}/>
      </Route>

      <Route path='*' element={""} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
