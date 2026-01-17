import React from 'react';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;