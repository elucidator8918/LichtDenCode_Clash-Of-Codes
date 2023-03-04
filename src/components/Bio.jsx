import React, { useState } from 'react';

function Bio() {
  const [textareaValue, setTextareaValue] = useState('');
  const [capitalizedValue, setCapitalizedValue] = useState('');

  function handleTextareaChange(event) {
    setTextareaValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`Submitting textarea: ${textareaValue}`);
    // Here you can add code to submit or validate the textarea data
  }

  function handleCapitalize() {
    setCapitalizedValue(textareaValue.toUpperCase());
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="textarea">Enter text:</label>
        <textarea id="textarea" value={textareaValue} onChange={handleTextareaChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleCapitalize}>Show Sentiment</button>
      {capitalizedValue && <p>{capitalizedValue}</p>}
    </div>
  );
}
export default Bio