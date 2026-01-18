// src/components/Contact.jsx
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

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
        Contact Us
      </h1>
      
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <p style={{
          textAlign: 'center',
          color: '#666',
          marginBottom: '30px',
          fontSize: '1.1em'
        }}>
          We'd love to hear from you! Fill out the form below and we'll get back to you soon.
        </p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="6"
            style={{ 
              display: 'block',
              width: '100%',
              padding: '12px',
              margin: '10px 0',
              border: '2px solid #ddd',
              borderRadius: '5px',
              fontSize: '16px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }}
          />
          <button 
            type="submit"
            style={{
              backgroundColor: '#4CAF50',
              color: 'white',
              padding: '15px 30px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer',
              width: '100%',
              marginTop: '10px',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
// qhwghghafhf
export default Contact;