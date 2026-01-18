import { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);
  
  return (
    <div>
      {userData.name}
      {userData.email}
    </div>
  );
}