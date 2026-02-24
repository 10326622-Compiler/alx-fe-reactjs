import { useParams, Link, useNavigate } from 'react-router-dom';
import { POSTS } from './Blog';

// ─── BlogPost ──────────────────────────────────────────────────────────────────
// This component demonstrates DYNAMIC ROUTING.
//
// The route is defined as: /blog/:id
// `:id` is a URL parameter — it can be any value (1, 2, "hello", etc.)
//
// useParams() reads the current URL and returns an object of all params.
// So for the URL /blog/3 → useParams() returns { id: "3" }
//
// This single component handles ALL blog post URLs — no separate component
// needed per post. The content changes based on the URL parameter.
const BlogPost = () => {
  const { id } = useParams(); // reads `:id` from the URL
  const navigate = useNavigate();

  // Find the matching post — id from URL is always a string, so parse it
  const post = POSTS.find((p) => p.id === parseInt(id));

  // Handle invalid id (e.g., /blog/999 or /blog/abc)
  if (!post) {
    return (
      <div className='page'>
        <div className='not-found'>
          <h2>❌ Post Not Found</h2>
          <p>
            No post exists with ID: <code>{id}</code>
          </p>
          <Link to='/blog' className='back-btn'>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  // Determine prev/next post for navigation
  const currentIndex = POSTS.findIndex((p) => p.id === post.id);
  const prevPost = POSTS[currentIndex - 1];
  const nextPost = POSTS[currentIndex + 1];

  // Extended body content for the post detail view
  const bodyContent = [
    `This is the full content of "${post.title}". In a real application, this would be fetched from an API using the id parameter extracted from the URL.`,
    `The URL for this post is /blog/${post.id}. React Router matched the route pattern /blog/:id and made the value "${post.id}" available via the useParams() hook.`,
    `Dynamic routing means this single BlogPost component handles any valid post ID. You could navigate to /blog/1, /blog/2, or /blog/100 and the same component renders — just with different data each time.`,
  ];

  return (
    <div className='page blog-post-page'>
      <button className='back-btn' onClick={() => navigate('/blog')}>
        ← Back to Blog
      </button>

      {/* Dynamic Route Info Banner */}
      <div className='dynamic-banner'>
        <strong>🔗 Dynamic Route Demo:</strong> URL is <code>/blog/{id}</code>.{' '}
        The value <code>{id}</code> was extracted using{' '}
        <code>useParams()</code>.
      </div>

      <article className='post-article'>
        <div className='article-meta'>
          <span className='post-category'>{post.category}</span>
          <span className='post-date'>{post.date}</span>
        </div>
        <h1>{post.title}</h1>
        <p className='article-excerpt'>{post.excerpt}</p>
        <hr className='article-divider' />
        {bodyContent.map((para, i) => (
          <p key={i} className='article-body'>{para}</p>
        ))}
      </article>

      {/* Prev / Next Navigation */}
      <div className='post-nav'>
        {prevPost ? (
          <Link to={`/blog/${prevPost.id}`} className='post-nav-btn prev'>
            ← {prevPost.title}
          </Link>
        ) : <span />}
        {nextPost && (
          <Link to={`/blog/${nextPost.id}`} className='post-nav-btn next'>
            {nextPost.title} →
          </Link>
        )}
      </div>
    </div>
  );
};

export default BlogPost;