
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />


      <Route path='*' element={""} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
