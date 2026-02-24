import { Link } from 'react-router-dom';

// Mock blog post data — in a real app this would come from an API
const POSTS = [
  { id: 1, title: 'Getting Started with React Router', category: 'React', date: 'Jan 10, 2024', excerpt: 'Learn how to set up React Router v6 in your project and create your first routes.' },
  { id: 2, title: 'Understanding useParams Hook', category: 'Hooks', date: 'Jan 18, 2024', excerpt: 'Deep dive into the useParams hook for reading dynamic URL parameters.' },
  { id: 3, title: 'Nested Routes Explained', category: 'React', date: 'Feb 2, 2024', excerpt: 'How to build complex layouts using nested routes and the Outlet component.' },
  { id: 4, title: 'Protected Routes & Authentication', category: 'Security', date: 'Feb 14, 2024', excerpt: 'Implement route guards to protect pages that require user authentication.' },
  { id: 5, title: 'React Query vs useEffect', category: 'Data Fetching', date: 'Mar 1, 2024', excerpt: 'Compare React Query and traditional useEffect patterns for data fetching.' },
  { id: 6, title: 'Building a Full-Stack React App', category: 'Full Stack', date: 'Mar 20, 2024', excerpt: 'A practical guide to connecting your React frontend to a Node.js backend.' },
];

const Blog = () => {
  return (
    <div className='page blog-page'>
      <div className='blog-header'>
        <h2>📝 Blog</h2>
        <p>
          Each post links to <code>/blog/:postId</code> — a{' '}
          <strong>dynamic route</strong>. React Router extracts the{' '}
          <code>postId</code> param and the post page uses{' '}
          <code>useParams()</code> to read it.
        </p>
      </div>

      <div className='posts-list'>
        {POSTS.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className='post-card'>
            <div className='post-meta'>
              <span className='post-category'>{post.category}</span>
              <span className='post-date'>{post.date}</span>
            </div>
            <h3 className='post-title'>{post.title}</h3>
            <p className='post-excerpt'>{post.excerpt}</p>
            <span className='post-read'>Read more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
export { POSTS };