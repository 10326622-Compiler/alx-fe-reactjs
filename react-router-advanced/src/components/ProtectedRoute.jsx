import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

// ─── ProtectedRoute ────────────────────────────────────────────────────────────
// This component acts as a gatekeeper for any route that requires login.
//
// How it works:
//   - <Outlet /> renders the matched child route if the user IS authenticated
//   - <Navigate to="/login" /> redirects to the login page if NOT authenticated
//     `replace` replaces the history entry so the user can't hit "Back"
//     to return to the protected page after being redirected.
//
// Usage in App.jsx:
//   <Route element={<ProtectedRoute />}>
//     <Route path="/profile" element={<Profile />} />
//   </Route>
const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};

export default ProtectedRoute;