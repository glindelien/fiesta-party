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
      Fiesta Supplies Acquired: {progress}/{limit}
      <div id="progressBar">
        {supplies.map((item) =>
          <div id="item" key={item}>{item}</div>
        )}
      </div>
    </div>
  );
}

export default Progress;
