import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import PostsComponent from './components/PostsComponent';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
      cacheTime: 300000,
      retry: 2,
    },
  },
});

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <header className="app-header">
          <h1>⚡ React Query Demo</h1>
          <p className="app-subtitle">
            Data fetching, caching &amp; updating with JSONPlaceholder API
          </p>
          <nav className="app-nav">
            <button
              className={showPosts ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setShowPosts(true)}
            >
              📄 Posts
            </button>
            <button
              className={!showPosts ? 'nav-btn active' : 'nav-btn'}
              onClick={() => setShowPosts(false)}
            >
              🏠 Home
            </button>
          </nav>
        </header>

        <main>
          {showPosts ? (
            <PostsComponent />
          ) : (
            <div className="home-placeholder">
              <div className="home-card">
                <h2>🏠 Home Page</h2>
                <p>
                  You navigated away from Posts. React Query has <strong>cached</strong> the
                  fetched data. Click <strong>Posts</strong> again — data loads instantly from cache!
                </p>
                <p className="cache-note">
                  Cache stays alive for <strong>5 minutes</strong> (cacheTime).
                  After that, the next visit will re-fetch from the network.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;