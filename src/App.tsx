import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CTFPage from './pages/CTFPage';
import RegistrationPage from './pages/RegistrationPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import IndustrialVisitPage from './pages/IndustrialVisitPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <CustomCursor />
        <Header />
        <div className="h-[2px] bg-gradient-to-r from-[#004B87] to-[#78BE20] animate-gradient"></div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ctf" element={<CTFPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/industrial-visit" element={<IndustrialVisitPage />} />
          </Routes>
        </main>
        <div className="h-[2px] bg-gradient-to-r from-[#78BE20] to-[#004B87] animate-gradient"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
