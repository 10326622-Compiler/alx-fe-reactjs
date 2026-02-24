import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Profile from './components/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogPost />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={<Profile />}>
              <Route index element={<ProfileDetails />} />
              <Route path='settings' element={<ProfileSettings />} />
            </Route>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;