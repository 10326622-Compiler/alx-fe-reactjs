import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

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