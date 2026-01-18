// src/components/Home.jsx
function Home() {
  return (
    <div style={{ 
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      minHeight: '80vh'
    }}>
      <h1 style={{
        fontSize: '3em',
        color: '#333',
        marginBottom: '20px'
      }}>
        Welcome to Our Company
      </h1>
      <p style={{
        fontSize: '1.3em',
        color: '#666',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        We are dedicated to delivering excellence in all our services.
      </p>
      <div style={{
        marginTop: '40px',
        padding: '30px',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '40px auto'
      }}>
        <h2 style={{ color: '#4CAF50' }}>Why Choose Us?</h2>
        <p style={{ color: '#555', lineHeight: '1.6' }}>
          With decades of experience and a commitment to innovation, 
          we provide solutions that drive success and exceed expectations.
        </p>
      </div>
    </div>
  );
}

export default Home;