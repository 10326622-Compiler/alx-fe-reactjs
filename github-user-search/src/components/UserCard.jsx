import PropTypes from 'prop-types';

/**
 * UserCard Component
 * Displays GitHub user information in a card format
 */
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img 
        src={user.avatar_url} 
        alt={`${user.login}'s avatar`}
        className="user-avatar"
      />
      <div className="user-info">
        <h3 className="user-name">{user.name || user.login}</h3>
        <p className="user-username">@{user.login}</p>
        {user.bio && <p className="user-bio">{user.bio}</p>}
        <a 
          href={user.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="user-profile-link"
        >
          View Profile
        </a>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default UserCard;