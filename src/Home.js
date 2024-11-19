import GetInput from "./GetInput";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate 

function Home() {
    const [inputValue, setInputValue] = useState(''); // State in App.js
    const [showPerson, setShowPerson] = useState(false);
    const navigate = useNavigate(); // Get the navigate function
  
    const handleInputFromChild = (value) => {
      setInputValue(value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/personListPage', { state: { inputValue } }); // Navigate with state
    };
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <GetInput onInput={handleInputFromChild} /> {/* Pass function as prop */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }export default  Home;