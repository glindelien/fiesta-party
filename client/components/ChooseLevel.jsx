import React from 'react';
import levels from '../levels.js';

function ChooseLevel() {
  return (
    <select>
      <option>Choose a level</option>
      {levels.map((level, index) => {
        return (
        <option>{index + 1}</option>
        );
      })}
    </select>
  );
}

export default ChooseLevel;
