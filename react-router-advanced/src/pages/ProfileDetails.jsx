// ─── ProfileDetails ────────────────────────────────────────────────────────────
// Rendered as a CHILD route inside Profile's <Outlet /> when path is /profile
// This is the default index child — shown when no deeper path is matched.
const ProfileDetails = () => {
  return (
    <div className='nested-page'>
      <h3>👤 Profile Details</h3>
      <p className='nested-desc'>
        This content is rendered inside the <code>{'<Outlet />'}</code> of the
        Profile component. The URL is <code>/profile</code>.
      </p>

      <div className='details-grid'>
        <div className='detail-item'>
          <span className='detail-label'>Full Name</span>
          <span className='detail-value'>John Doe</span>
        </div>
        <div className='detail-item'>
          <span className='detail-label'>Username</span>
          <span className='detail-value'>@johndoe</span>
        </div>
        <div className='detail-item'>
          <span className='detail-label'>Email</span>
          <span className='detail-value'>john.doe@example.com</span>
        </div>
        <div className='detail-item'>
          <span className='detail-label'>Location</span>
          <span className='detail-value'>San Francisco, CA</span>
        </div>
        <div className='detail-item'>
          <span className='detail-label'>Member Since</span>
          <span className='detail-value'>January 2024</span>
        </div>
        <div className='detail-item'>
          <span className='detail-label'>Role</span>
          <span className='detail-value'>Developer</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;