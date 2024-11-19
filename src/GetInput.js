/*import React, { useState } from 'react';

function GetInput() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Input value:', inputValue);
    // Do something with the inputValue, e.g., send it to an API
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label htmlFor="myInput">Enter text:</label>
        <input
            type="text"
            id="myInput"
            value={inputValue}
            onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        </form>
        
    </div>
  );
}

export default GetInput;*/


import React, { useState } from 'react';

function GetInput({ onInput }) { // Added prop for communication
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    onInput(event.target.value); // Notify App.js of the change
  };

  return (
    <div>
        <label htmlFor="myInput">Enter text:</label>
        <input type="text" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}
export default GetInput;