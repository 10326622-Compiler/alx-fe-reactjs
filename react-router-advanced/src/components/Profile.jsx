import { Routes, Route, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import ProfileDetails from '../pages/ProfileDetails';
import ProfileSettings from '../pages/ProfileSettings';

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const tabClass = ({ isActive }) =>
    isActive ? 'profile-tab active' : 'profile-tab';

  return (
    <div className='page profile-page'>
      <div className='profile-header'>
        <div className='profile-avatar'>👤</div>
        <div className='profile-info'>
          <h2>John Doe</h2>
          <p>john.doe@example.com</p>
          <span className='profile-badge'>✅ Authenticated User</span>
        </div>
        <button
          className='auth-btn logout'
          onClick={() => { logout(); navigate('/'); }}
        >
          Log Out
        </button>
      </div>

      <div className='profile-tabs'>
        <NavLink to='/profile' end className={tabClass}>📋 Details</NavLink>
        <NavLink to='/profile/settings' className={tabClass}>⚙️ Settings</NavLink>
      </div>

      <div className='profile-content'>
        <Routes>
          <Route index element={<ProfileDetails />} />
          <Route path='settings' element={<ProfileSettings />} />
        </Routes>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;