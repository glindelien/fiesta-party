import React from 'react';

function Progress({ current, limit }) {

  // let supplies = [
  //   'Tequila',
  //   'Limes',
  //   'Cerveza',
  //   'Piñata',
  //   'Guacamole',
  //   'Tacos',
  //   'Playlist',
  //   'Balloons',
  //   'Confetti',
  //   'Friends'
  // ];

  const supplies = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
      <div id="progressBar">
        {supplies.map((item, index) => {

          if (index === current) {
            return <div id="itemAcquired" key={index}><img id="img" src="/fiesta/pinata.png"></img></div>;
          }

          if (index < current) {
            return <div id="itemAcquired" key={index}><img id="hat" src="logo.png"></img></div>;
          }

          if (index > current && index < 10) {
            return <div id="item" key={index}></div>;
          }

          if (index === 10) {
            return <div id="item" key={index}><img id="img" src="/fiesta/guacamole.png"></img></div>;
          }

          }
        )}
      </div>
  );

}

export default Progress;

// check mark in HTML &#10003;
// refactor to make progressbar its own component
