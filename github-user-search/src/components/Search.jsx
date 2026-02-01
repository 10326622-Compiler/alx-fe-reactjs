import { useState } from 'react';
import { fetchUserData } from '../services/githubService';
import UserCard from './UserCard';

/**
 * Search Component
 *
 * Responsibilities:
 *  - Render a form with a text input for the GitHub username.
 *  - On submit, call fetchUserData and track three states:
 *      loading  – true while the network request is in flight
 *      error    – truthy when the request fails (user not found, network error, …)
 *      user     – the resolved user object on success, or null otherwise
 *  - Conditionally render one of three views:
 *      1. "Loading …"              while loading === true
 *      2. "Looks like we cant find the user"  while error is set
 *      3. <UserCard />             when a user object is available
 */
const Search = () => {
  // --- form state -----------------------------------------------------------
  const [username, setUsername] = useState('');

  // --- API-result state -----------------------------------------------------
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  // --- handlers -------------------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Do nothing if the input is empty / whitespace
    const trimmed = username.trim();
    if (!trimmed) return;

    // Reset previous results before firing the new request
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUserData(trimmed);
      setUser(userData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // --- render ---------------------------------------------------------------
  const renderResults = () => {
    if (loading) {
      return <p className="loading-text">Loading...</p>;
    }

    if (error) {
      return <p className="error-text">Looks like we cant find the user</p>;
    }

    if (user) {
      return <UserCard user={user} />;
    }

    // Default: nothing has been searched yet
    return (
      <p className="placeholder-text">
        Enter a GitHub username to get started
      </p>
    );
  };

  return (
    <div className="search-container">
      {/* ---- Form (Step 1) ------------------------------------------------ */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* ---- Conditional results (Step 3) --------------------------------- */}
      <div className="results-container">
        {renderResults()}
      </div>
    </div>
  );
};

export default Search;