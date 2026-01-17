function MainContent() {
  return (
    <main style={{ 
      padding: '30px',
      backgroundColor: '#f0f4f8',
      minHeight: '400px',
      textAlign: 'center'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        fontSize: '2em',
        marginBottom: '20px'
      }}>
        Welcome to Our Community
      </h2>
      <p style={{ 
        fontSize: '1.2em',
        color: '#34495e',
        lineHeight: '1.8',
        maxWidth: '800px',
        margin: '0 auto 30px'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      
      <div style={{ 
        marginTop: '40px'
      }}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Enjoys coding and coffee" 
        />
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Passionate about music and travel" 
        />
      </div>
    </main>
  );
}
