// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />
      
      {/* Add the Counter component */}
      <Counter />
      
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;