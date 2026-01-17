function UserProfile(props) {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '20px', 
      margin: '15px',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: 'blue',
        marginTop: '0',
        fontSize: '1.8em',
        borderBottom: '2px solid blue',
        paddingBottom: '10px'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        fontSize: '1.1em',
        margin: '10px 0'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#333',
          fontSize: '1.2em'
        }}>
          {props.age}
        </span>
      </p>
      <p style={{ 
        fontSize: '1em',
        lineHeight: '1.6',
        color: '#555',
        fontStyle: 'italic'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}
