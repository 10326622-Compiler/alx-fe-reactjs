// src/App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // User data to be shared via Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header Component */}
      <Header />
      
      {/* Counter Component */}
      <Counter />
      
      {/* Context Provider wraps components that need user data */}
      <UserContext.Provider value={userData}>
        <ProfilePage />
        <UserProfile />
      </UserContext.Provider>
      
      {/* Main Content Component */}
      <MainContent />
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;