import React from 'react';
import ChooseLevel from './ChooseLevel.jsx';

function CurrentWord({ word, chooseLevel }) {
  return (
    <div>
      {/* Translate the word below to Spanish and start acquiring your party supplies! */}
      Help the unicorn piñata get to the guacamole by translating the word below into Spanish!
      <br /><br />
      <ChooseLevel chooseLevel={chooseLevel}/>
      <span id="currentWord">{word} = ?</span>
    </div>
  );
}

export default CurrentWord;
