import { useQuery } from "react-query";
import { useState } from "react";

// ─── API Fetch Function ────────────────────────────────────────────────────────
// This is a plain async function — React Query calls it internally.
// It receives no arguments here; React Query manages when it is called.
// Throwing an error is the correct pattern — React Query catches it and
// sets the `isError` / `error` flags on the query automatically.
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error(`Network error: ${response.status} ${response.statusText}`);
  }
  return response.json(); // returns array of 100 post objects
};

const PostsComponent = () => {
  // ─── Local UI State ─────────────────────────────────────────────────────────
  const [selectedPost, setSelectedPost] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  // ─── useQuery Hook ──────────────────────────────────────────────────────────
  // useQuery(queryKey, fetchFn, options)
  //
  // queryKey: ["posts"] — a unique identifier for this query in the cache.
  //   React Query uses this key to:
  //   - Store and retrieve cached data
  //   - Deduplicate requests (if two components use the same key simultaneously,
  //     only ONE network request fires)
  //   - Invalidate and refetch specific data
  //
  // Destructured return values:
  //   data        → the resolved value from fetchPosts (array of posts)
  //   isLoading   → true only on the VERY FIRST fetch (no cached data yet)
  //   isFetching  → true whenever a network request is in-flight
  //                 (includes background refetches — cache is still shown during these)
  //   isError     → true if fetchPosts threw an error after all retries
  //   error       → the Error object that was thrown
  //   refetch     → function to manually trigger a fresh network request
  //   dataUpdatedAt → timestamp (ms) of when data was last fetched — used to show "last updated"
  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
    dataUpdatedAt,
  } = useQuery(
    ["posts"],       // query key — cache is stored under this key
    fetchPosts,      // the fetcher function
    {
      staleTime: 30000,  // override: data fresh for 30s (matches App.jsx default)
      // onSuccess and onError callbacks for side-effects (e.g., toasts/analytics)
      onSuccess: (data) => {
        console.log(`✅ Fetched ${data.length} posts from API`);
      },
      onError: (err) => {
        console.error("❌ Fetch failed:", err.message);
      },
    }
  );

  // ─── Derived: format last-updated timestamp ──────────────────────────────
  const lastUpdated = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString()
    : null;

  // ─── Render: Loading State ───────────────────────────────────────────────
  // isLoading is ONLY true when there is no cached data AND a fetch is in progress.
  // If we return to this component from cache, isLoading stays false — instant render.
  if (isLoading) {
    return (
      <div className="state-container">
        <div className="spinner" />
        <p>Fetching posts from API…</p>
        <p className="hint">First load fetches from network. Revisiting loads from cache!</p>
      </div>
    );
  }

  // ─── Render: Error State ─────────────────────────────────────────────────
  if (isError) {
    return (
      <div className="state-container error-state">
        <p className="error-icon">❌</p>
        <p className="error-title">Failed to fetch posts</p>
        <p className="error-detail">{error.message}</p>
        <button className="refetch-btn" onClick={() => refetch()}>
          🔄 Try Again
        </button>
      </div>
    );
  }

  // ─── Render: Data State ──────────────────────────────────────────────────
  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <div className="posts-container">

      {/* ── Toolbar ── */}
      <div className="toolbar">
        <div className="toolbar-left">
          <h2>📄 Posts</h2>
          <span className="post-count">{posts.length} total</span>
          {/* isFetching is true during background refetches — shows subtle indicator
              without hiding existing data (unlike isLoading which blanks the screen) */}
          {isFetching && <span className="fetching-badge">🔄 Refreshing…</span>}
        </div>

        <div className="toolbar-right">
          {lastUpdated && (
            <span className="last-updated">Last fetched: {lastUpdated}</span>
          )}
          {/* Manual refetch — proves React Query can update data on-demand */}
          <button className="refetch-btn" onClick={() => refetch()}>
            🔄 Refetch Now
          </button>
        </div>
      </div>

      {/* ── Cache Info Banner ── */}
      <div className="cache-banner">
        <strong>🧠 Cache Demo:</strong> Click <em>Home</em> in the nav, then <em>Posts</em> again.
        Data loads <strong>instantly</strong> from React Query's cache — zero network requests!
      </div>

      {/* ── Post List ── */}
      <div className="posts-grid">
        {visiblePosts.map((post) => (
          <div
            key={post.id}
            className={`post-card ${selectedPost?.id === post.id ? "selected" : ""}`}
            onClick={() =>
              setSelectedPost(selectedPost?.id === post.id ? null : post)
            }
          >
            <div className="post-header">
              <span className="post-id">#{post.id}</span>
              <span className="post-user">User {post.userId}</span>
            </div>
            <h3 className="post-title">{post.title}</h3>

            {/* Expand body on click — purely local state, no network call */}
            {selectedPost?.id === post.id && (
              <p className="post-body">{post.body}</p>
            )}
          </div>
        ))}
      </div>

      {/* ── Load More ── */}
      {visibleCount < posts.length && (
        <div className="load-more-wrapper">
          <button
            className="load-more-btn"
            onClick={() => setVisibleCount((c) => c + 10)}
          >
            Load More ({posts.length - visibleCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default PostsComponent;