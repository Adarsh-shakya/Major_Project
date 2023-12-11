import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TrendingBook from './Components/Pages/TrendingBook';
import Navbar from './Components/Nevbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Classic from './Components/Pages/Classic';
import Kids from './Components/Pages/Kids';
import Thrillera from './Components/Pages/Thrillera';
import Textbook from './Components/Pages/Textbook';
import Viewer from './Components/Viewer/Viewer';
import Auth from './Components/Pages/Auth/Auth';
import AddBook from './Components/Pages/AddBook/AddBook';
import Test from './Components/Pages/Test';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<TrendingBook />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/thrillers" element={<Thrillera />} />
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/viewer/:link" element={<Viewer />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/addbook" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
