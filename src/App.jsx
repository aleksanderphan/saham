import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './pages/NavigationBar';
import ListSaham from './pages/ListSaham';
import Prediction from './pages/PredictionList';
import About from './pages/AboutModal';
import PredictSaham from './process/PredictSaham';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListSaham />} />
          <Route path='/prediction' element={<Prediction />} />
          <Route path='/about' element={<About />} />
          <Route path='/predict/:ticker' element={<PredictSaham />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
