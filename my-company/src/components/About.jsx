// src/components/About.jsx
function About() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#fff',
      minHeight: '80vh'
    }}>
      <h1 style={{
        fontSize: '2.5em',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        About Us
      </h1>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: '1.8'
      }}>
        <p style={{
          fontSize: '1.2em',
          color: '#555',
          marginBottom: '30px'
        }}>
          Our company has been providing top-notch services since 1990. 
          We specialize in various fields including technology, marketing, and consultancy.
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '40px'
        }}>
          <div style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '2px solid #4CAF50'
          }}>
            <h3 style={{ color: '#4CAF50' }}>Our Mission</h3>
            <p style={{ color: '#666' }}>
              To deliver innovative solutions that empower businesses to thrive in the digital age.
            </p>
          </div>
          
          <div style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '2px solid #2196F3'
          }}>
            <h3 style={{ color: '#2196F3' }}>Our Vision</h3>
            <p style={{ color: '#666' }}>
              To be the leading provider of comprehensive business solutions worldwide.
            </p>
          </div>
          
          <div style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            border: '2px solid #FF9800'
          }}>
            <h3 style={{ color: '#FF9800' }}>Our Values</h3>
            <p style={{ color: '#666' }}>
              Integrity, excellence, innovation, and customer satisfaction drive everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;