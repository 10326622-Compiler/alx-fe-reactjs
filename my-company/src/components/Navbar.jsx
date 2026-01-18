// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '15px 30px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <ul style={{
        listStyle: 'none',
        display: 'flex',
        gap: '30px',
        margin: 0,
        padding: 0,
        justifyContent: 'center'
      }}>
        <li>
          <Link 
            to="/" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4CAF50'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4CAF50'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/services" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4CAF50'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            to="/contact" 
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: 'bold',
              transition: 'color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.color = '#4CAF50'}
            onMouseLeave={(e) => e.target.style.color = 'white'}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;