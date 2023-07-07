import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import NavigationBar from './pages/NavigationBar';
import ListSaham from './pages/ListSaham';
import AboutScreen from './pages/AboutScreen';
import PredictSaham from './process/PredictSaham';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/prediction' element={<ListSaham />} />
          <Route path='/predict/:ticker' element={<PredictSaham />} />
          <Route path='/about' element={<AboutScreen />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
