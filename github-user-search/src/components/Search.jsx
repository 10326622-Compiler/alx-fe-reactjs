import { useState } from 'react';
import { advancedSearchUsers } from '../services/githubService';


const Search = () => {
  // ---------- form state --------------------------------------------------
  const [username, setUsername]   = useState('');
  const [location, setLocation]   = useState('');
  const [minRepos, setMinRepos]   = useState('');

  // ---------- result state ------------------------------------------------
  const [users, setUsers]         = useState([]);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);
  const [page, setPage]           = useState(1);
  const [hasMore, setHasMore]     = useState(false);

  
  const fetchUsers = async (pageToFetch, append = false) => {
    setLoading(true);
    setError(null);

    try {
      const data = await advancedSearchUsers({
        username,
        location,
        minRepos,
        page: pageToFetch,
      });

      // Append to existing list OR replace it
      setUsers(prev => append ? [...prev, ...data.items] : data.items);

      // GitHub returns 10 per page; if we got a full page there might be more
      setHasMore(data.items.length === 10);
      setPage(pageToFetch);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // ---------- handlers ----------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    // Need at least one filter to make a meaningful query
    if (!username.trim() && !location.trim() && !minRepos) return;

    // Fresh search: reset everything
    setUsers([]);
    setPage(1);
    setHasMore(false);
    fetchUsers(1, false);
  };

  const handleLoadMore = () => {
    fetchUsers(page + 1, true);   // append next page
  };

  // ---------- render ------------------------------------------------------

  const renderResults = () => {
    // 1. Loading (only show full-screen loader on first page; "Load More" has its own inline indicator)
    if (loading && users.length === 0) {
      return (
        <p className="text-center text-blue-600 font-medium py-8 text-lg">
          Loading...
        </p>
      );
    }

    // 2. Error
    if (error) {
      return (
        <p className="text-center text-red-500 font-medium py-8 text-lg">
          Looks like we cant find the user
        </p>
      );
    }

    // 3. Results grid
    if (users.length > 0) {
      return (
        <div>
          {/* Result count badge */}
          <p className="text-sm text-gray-400 mb-4">
            Showing {users.length} result{users.length !== 1 ? 's' : ''}
          </p>

          {/* User cards */}
          <div className="flex flex-col gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
              >
                {/* Avatar */}
                <img
                  src={user.avatar_url}
                  alt={`${user.login}'s avatar`}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-200 flex-shrink-0"
                />

                {/* Info column */}
                <div className="flex flex-col gap-1 text-left flex-1 min-w-0">
                  {/* Name / login */}
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {user.name || user.login}
                  </h3>
                  <p className="text-sm text-gray-500">@{user.login}</p>

                  {/* Location */}
                  {user.location && (
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <span>📍</span> {user.location}
                    </p>
                  )}

                  {/* Public repo count – always present on search results */}
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <span>📦</span> {user.public_repos ?? '—'} public repo{(user.public_repos !== 1) ? 's' : ''}
                  </p>

                  {/* Profile link */}
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 text-sm font-semibold mt-1 underline decoration-0 hover:underline transition-colors"
                  >
                    View Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Load More button / inline loading indicator */}
          {(hasMore || loading) && (
            <div className="mt-6 text-center">
              {loading ? (
                <p className="text-blue-600 font-medium">Loading...</p>
              ) : (
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
                >
                  Load More
                </button>
              )}
            </div>
          )}
        </div>
      );
    }

    // 4. Default – nothing searched yet
    return (
      <p className="text-center text-gray-400 py-12 text-lg">
        Enter a GitHub username to get started
      </p>
    );
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* -------- Search form ----------------------------------------------- */}
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 flex flex-col gap-4"
      >
        {/* Row 1 – username (full width) */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-600" htmlFor="username">
            GitHub Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="e.g. octocat"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
          />
        </div>

        {/* Row 2 – location + minRepos side by side on sm+, stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g. San Francisco"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600" htmlFor="minRepos">
              Min Repositories
            </label>
            <input
              id="minRepos"
              type="number"
              min="0"
              placeholder="e.g. 5"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
            />
          </div>
        </div>

        {/* Submit button – full width */}
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all"
        >
          Search
        </button>
      </form>

      {/* -------- Results--------------------------------------------------- */}
      <div className="mt-6">
        {renderResults()}
      </div>
    </div>
  );
};

export default Search;