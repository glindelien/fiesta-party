import React from 'react';

function CurrentWord({ word }) {
  return (
    <div>
      Translate the word to Spanish and start acquiring your party supplies!
      <br/><br/>
      <span id="currentWord">{word}</span>
    </div>
  );
}

export default CurrentWord;
