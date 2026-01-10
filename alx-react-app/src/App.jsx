<<<<<<< HEAD
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
=======
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
>>>>>>> 3298c2aef19ab3564330253bf074454caa721ad7

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      
      {/* Passing data via props to UserProfile */}
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <MainContent />
      <Footer />
    </div>
  );
}

export default App;