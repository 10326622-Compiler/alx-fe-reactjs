// src/components/Footer.jsx
function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '30px 20px',
      marginTop: 'auto',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h3 style={{ 
          marginTop: 0,
          color: '#4CAF50'
        }}>
          Our Company
        </h3>
        <p style={{ 
          margin: '10px 0',
          color: '#ccc'
        }}>
          Excellence in Service Since 1990
        </p>
        <div style={{
          marginTop: '20px',
          paddingTop: '20px',
          borderTop: '1px solid #555'
        }}>
          <p style={{ margin: '5px 0', fontSize: '0.9em' }}>
            © 2024 Our Company. All rights reserved.
          </p>
          <p style={{ margin: '5px 0', fontSize: '0.9em', color: '#999' }}>
            📧 contact@ourcompany.com | 📞 (555) 123-4567
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;