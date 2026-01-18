import { useContext } from 'react';
import UserContext from './UserContext'; // Import the context you created

function UserProfile() {
  // Access the userData provided by App.jsx
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;