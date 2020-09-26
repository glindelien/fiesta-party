import React from 'react';
import levels from '../levels.js';

function ChooseLevel({ chooseLevel }) {
  return (
    <select onChange={chooseLevel}>
      <option>Choose a level!</option>
      {levels.map((level, index) => {
        return (
        <option value={index + 1}>{index + 1}</option>
        );
      })}
    </select>
  );
}

export default ChooseLevel;
