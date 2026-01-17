function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '25px 0',
      marginTop: 'auto',
      boxShadow: '0 -2px 4px rgba(0,0,0,0.1)'
    }}>
      <p style={{ 
        margin: '0',
        fontSize: '1.1em',
        fontWeight: '300'
      }}>
        © 2024 City Lovers Community
      </p>
      <p style={{ 
        margin: '10px 0 0',
        fontSize: '0.9em',
        color: '#bdc3c7'
      }}>
        Made with ❤️ using React
      </p>
    </footer>
  );
}