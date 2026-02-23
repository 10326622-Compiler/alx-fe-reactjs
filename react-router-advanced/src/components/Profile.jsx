import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// ─── Profile ───────────────────────────────────────────────────────────────────
// This is the PARENT layout for nested routes.
//
// Nested route structure (defined in App.jsx):
//   /profile                → renders <ProfileDetails /> inside <Outlet />
//   /profile/settings       → renders <ProfileSettings /> inside <Outlet />
//
// <Outlet /> is the placeholder where React Router renders the matched child route.
// The rest of this component (header, tabs) stays visible on all sub-routes.
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

      {/* Tab navigation between nested child routes */}
      <div className='profile-tabs'>
        {/* 'end' makes Details tab only active on exact /profile */}
        <NavLink to='/profile' end className={tabClass}>📋 Details</NavLink>
        <NavLink to='/profile/settings' className={tabClass}>⚙️ Settings</NavLink>
      </div>

      {/* Child route renders here — ProfileDetails or ProfileSettings */}
      <div className='profile-content'>
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;