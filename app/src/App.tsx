import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Resume from './pages/Resume';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow"
        >
          <Routes>
            <Route path="/" element={<Resume />} />
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
