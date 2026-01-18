import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif'
      }}>
        <Header />
        <Counter />
        <ProfilePage />
        <UserProfile />
        <MainContent />
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;