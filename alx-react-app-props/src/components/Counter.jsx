import { useState } from 'react';

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      maxWidth: '400px',
      margin: '20px auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h2 style={{
        color: '#333',
        marginBottom: '20px'
      }}>
        Counter Application
      </h2>
      
      <p style={{
        fontSize: '3em',
        fontWeight: 'bold',
        color: '#2c3e50',
        margin: '20px 0'
      }}>
        Current Count: {count}
      </p>

      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            padding: '12px 24px',
            fontSize: '1em',
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Increment
        </button>

        <button 
          onClick={() => setCount(count - 1)}
          style={{
            padding: '12px 24px',
            fontSize: '1em',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Decrement
        </button>

        <button 
          onClick={() => setCount(0)}
          style={{
            padding: '12px 24px',
            fontSize: '1em',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Reset
        </button>
      </div>

      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        fontSize: '0.9em',
        color: '#666'
      }}>
        <p style={{ margin: '5px 0' }}>✅ Click <strong>Increment</strong> to add 1</p>
        <p style={{ margin: '5px 0' }}>✅ Click <strong>Decrement</strong> to subtract 1</p>
        <p style={{ margin: '5px 0' }}>✅ Click <strong>Reset</strong> to return to 0</p>
      </div>
    </div>
  );
}

export default Counter;