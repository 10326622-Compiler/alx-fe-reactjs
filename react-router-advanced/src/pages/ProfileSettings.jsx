import { useState } from 'react';

// ─── ProfileSettings ───────────────────────────────────────────────────────────
// Rendered as a CHILD route inside Profile's <Outlet /> when path is /profile/settings
// Demonstrates that nested routes can have their own local state and UI.
const ProfileSettings = () => {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    newsletter: true,
  });

  const handleToggle = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    setSaved(false);
  };

  return (
    <div className='nested-page'>
      <h3>⚙️ Profile Settings</h3>
      <p className='nested-desc'>
        This content is a <strong>nested child route</strong> rendered inside
        Profile's <code>{'<Outlet />'}</code>. The URL is{' '}
        <code>/profile/settings</code>.
      </p>

      {saved && <div className='save-banner'>✅ Settings saved successfully!</div>}

      <div className='settings-list'>
        {Object.entries(settings).map(([key, value]) => (
          <div key={key} className='setting-row'>
            <div className='setting-info'>
              <span className='setting-label'>
                {key === 'notifications' && '🔔 '}
                {key === 'darkMode' && '🌙 '}
                {key === 'newsletter' && '📧 '}
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </span>
            </div>
            <button
              className={`toggle-btn ${value ? 'on' : 'off'}`}
              onClick={() => handleToggle(key)}
            >
              {value ? 'ON' : 'OFF'}
            </button>
          </div>
        ))}
      </div>

      <button className='save-btn' onClick={() => setSaved(true)}>
        Save Settings
      </button>
    </div>
  );
};

export default ProfileSettings;