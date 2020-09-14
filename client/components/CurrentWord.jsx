import React from 'react';

function CurrentWord({ word }) {
  return (
    <div>
      {/* Translate the word below to Spanish and start acquiring your party supplies! */}
      Help the unicorn piñata get to the guacamole by translating the word below into Spanish!
      <br/><br/>
      <span id="currentWord">{word} = ?</span>
    </div>
  );
}

export default CurrentWord;
