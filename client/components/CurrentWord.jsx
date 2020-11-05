import React from 'react';
import ChooseLevel from './ChooseLevel.jsx';

function CurrentWord({ word, chooseLevel }) {
  return (
    <div>
      {/* Translate the word below to Spanish and start acquiring your party supplies! */}
      Help the <span id="unicorn">unicorn piñata</span> get to the <span id="guac">guacamole</span> by translating the word below into <span id="spanish">Spanish!</span>
      <br /><br />
      <ChooseLevel chooseLevel={chooseLevel}/>
      <span id="currentWord">{word} = ?</span>
    </div>
  );
}

export default CurrentWord;
