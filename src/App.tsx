import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import RegistrationPage from './pages/RegistrationPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { AboutEventPage }  from './pages/AboutEventPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <CustomCursor />
        <Header />
        <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 animate-gradient"></div>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/aboutevent" element={<AboutEventPage />} />
          </Routes>
        </main>
        <div className="h-[2px] bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-500 animate-gradient"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App