import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pagetwo from './components/Pagetwo';
import Header from './components/Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pagetwo' element={<Pagetwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
