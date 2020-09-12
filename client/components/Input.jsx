import React from 'react';

function Input({ answer, handleInputChange }) {
  return (
    <div>
      <input type="text"
             name="userAnswer"
             value={answer}
             onChange={handleInputChange}>
      </input>
    </div>
  )
}

export default Input;
