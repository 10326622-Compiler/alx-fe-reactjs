// src/UserContext.js
import React from 'react';

// Step 1: Create a Context for user data
// This will allow us to share user data across components without prop drilling
const UserContext = React.createContext();

// Export the context so other components can use it
export default UserContext;