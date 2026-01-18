// src/components/Services.jsx
function Services() {
  return (
    <div style={{ 
      padding: '40px',
      backgroundColor: '#f5f5f5',
      minHeight: '80vh'
    }}>
      <h1 style={{
        fontSize: '2.5em',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        Our Services
      </h1>
      
      <div style={{
        maxWidth: '900px',
        margin: '40px auto'
      }}>
        <ul style={{
          listStyle: 'none',
          padding: 0
        }}>
          <li style={{
            backgroundColor: 'white',
            padding: '25px',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #4CAF50'
          }}>
            <h3 style={{ 
              color: '#4CAF50',
              marginTop: 0,
              fontSize: '1.5em'
            }}>
              Technology Consulting
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6',
              margin: '10px 0 0 0'
            }}>
              Expert guidance on technology strategy, digital transformation, 
              and IT infrastructure optimization.
            </p>
          </li>
          
          <li style={{
            backgroundColor: 'white',
            padding: '25px',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #2196F3'
          }}>
            <h3 style={{ 
              color: '#2196F3',
              marginTop: 0,
              fontSize: '1.5em'
            }}>
              Market Analysis
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6',
              margin: '10px 0 0 0'
            }}>
              Comprehensive market research and competitive analysis to drive 
              informed business decisions.
            </p>
          </li>
          
          <li style={{
            backgroundColor: 'white',
            padding: '25px',
            marginBottom: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #FF9800'
          }}>
            <h3 style={{ 
              color: '#FF9800',
              marginTop: 0,
              fontSize: '1.5em'
            }}>
              Product Development
            </h3>
            <p style={{ 
              color: '#666',
              lineHeight: '1.6',
              margin: '10px 0 0 0'
            }}>
              End-to-end product development from concept to launch, 
              ensuring quality and innovation.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;