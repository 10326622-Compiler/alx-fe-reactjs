import { useQuery } from "react-query";
import { useState } from "react";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error(`Network error: ${response.status} ${response.statusText}`);
  }
  return response.json();
};

const PostsComponent = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [visibleCount, setVisibleCount] = useState(10);

  const {
    data: posts,
    isLoading,
    isFetching,
    isError,
    error,
    refetch,
    dataUpdatedAt,
  } = useQuery(
    ["posts"],
    fetchPosts,
    {
      staleTime: 30000,
      // cacheTime: how long unused data stays in memory after component unmounts.
      // Returning to PostsComponent within 5 minutes loads from cache instantly.
      cacheTime: 300000,
      // refetchOnWindowFocus: prevents automatic re-fetch when switching browser tabs.
      refetchOnWindowFocus: false,
      // keepPreviousData: keeps old data visible while new data is being fetched,
      // preventing a loading spinner flash during background refetches.
      keepPreviousData: true,
      onSuccess: (data) => {
        console.log(`Fetched ${data.length} posts from API`);
      },
      onError: (err) => {
        console.error("Fetch failed:", err.message);
      },
    }
  );

  const lastUpdated = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString()
    : null;

  if (isLoading) {
    return (
      <div className="state-container">
        <div className="spinner" />
        <p>Fetching posts from API...</p>
        <p className="hint">First load fetches from network. Revisiting loads from cache!</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="state-container error-state">
        <p className="error-icon">❌</p>
        <p className="error-title">Failed to fetch posts</p>
        <p className="error-detail">{error.message}</p>
        <button className="refetch-btn" onClick={() => refetch()}>
          Try Again
        </button>
      </div>
    );
  }

  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <div className="posts-container">
      <div className="toolbar">
        <div className="toolbar-left">
          <h2>Posts</h2>
          <span className="post-count">{posts.length} total</span>
          {isFetching && <span className="fetching-badge">Refreshing...</span>}
        </div>
        <div className="toolbar-right">
          {lastUpdated && (
            <span className="last-updated">Last fetched: {lastUpdated}</span>
          )}
          <button className="refetch-btn" onClick={() => refetch()}>
            Refetch Now
          </button>
        </div>
      </div>

      <div className="cache-banner">
        <strong>Cache Demo:</strong> Click Home in the nav, then Posts again.
        Data loads instantly from React Query cache — zero network requests!
      </div>

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
            {selectedPost?.id === post.id && (
              <p className="post-body">{post.body}</p>
            )}
          </div>
        ))}
      </div>

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