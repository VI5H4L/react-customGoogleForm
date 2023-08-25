import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    // https://docs.google.com/forms/d/e/1FAIpQLScaurLLbR9ofpyT542Bqzzh9Z9IADOLbxBa2tRe7QnBW5kg5Q/viewform?usp=pp_url&entry.1707951946=vishal-name&entry.1862124703=vishal-email
    event.preventDefault();

    const queryParams = new URLSearchParams({
      'entry.1707951946': formData.name,
      'entry.1862124703': formData.email
    });

    const url = `https://docs.google.com/forms/d/e/1FAIpQLScaurLLbR9ofpyT542Bqzzh9Z9IADOLbxBa2tRe7QnBW5kg5Q/formResponse?${queryParams}`;

    try {
      const response = await axios.get(url);
    } catch (error) {
      
    }
    finally{
      setFormData({
        name: '',
        email: ''
      });
    }
  };

  return (
    <div className="App">
      <h1>Contact Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        /><br /><br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        /><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
