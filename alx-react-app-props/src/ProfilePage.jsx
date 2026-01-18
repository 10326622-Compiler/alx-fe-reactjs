// src/ProfilePage.jsx
import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  // Step 3: No longer receiving userData as a prop
  // This component is now cleaner and doesn't need to know about userData
  return <UserInfo />;
}

export default ProfilePage;