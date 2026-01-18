// src/UserInfo.jsx
import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  // Step 4: No longer receiving or passing userData as a prop
  // This eliminates the "middleman" prop drilling
  return <UserDetails />;
}

export default UserInfo;