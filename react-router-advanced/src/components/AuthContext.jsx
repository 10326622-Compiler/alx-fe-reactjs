import { createContext, useContext, useState } from 'react';

// ─── AuthContext ───────────────────────────────────────────────────────────────
// Provides a simple authentication state to the entire app.
// Any component can call useAuth() to get/set the logged-in status.
// This simulates real auth (JWT, session, etc.) without a backend.
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // false = logged out, true = logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook — cleaner than importing useContext + AuthContext everywhere
export const useAuth = () => useContext(AuthContext);