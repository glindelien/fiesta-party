import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <div>
          <h1>Fiesta Party!</h1>
        </div>
        <div className="input"></div>
        <div className="progress"></div>
      </div>
    );
  }
}

export default App;
