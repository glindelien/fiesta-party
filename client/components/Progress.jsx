import React from 'react';

function Progress({ progress, limit }) {
  let supplies = [
    'Tequila',
    'Limes',
    'Cerveza',
    'Piñata',
    'Guacamole',
    'Tacos',
    'Playlist',
    'Party Favors',
    'Confetti',
    'Friends'
  ];
  return (
    <div>
      <div>
        Fiesta Supplies Acquired: {progress}/{limit}
      </div>
      <div id="progressBar">
        {supplies.map((item) =>
          <div id="item" key={item}>{item}</div>
        )}
      </div>
    </div>
  );
}

export default Progress;

// check mark in HTML &#10003;
