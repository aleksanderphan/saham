import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './pages/NavigationBar';
import Home from './pages/Home';
import ListSaham from './pages/ListSaham';
import Prediction from './pages/Prediction';
import Account from './pages/Account';
import PredictSaham from './pages/PredictSaham';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListSaham />} />
          <Route path='/prediction' element={<Prediction />} />
          <Route path='/account' element={<Account />} />
          <Route path='/new-page/:ticker' element={<PredictSaham />} />
        </Routes>
        <NavigationBar />
      </BrowserRouter>
    </>
  );
}

export default App;
