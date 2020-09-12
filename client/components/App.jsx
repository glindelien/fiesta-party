import React from 'react';
import Input from './Input.jsx';
import Progress from './Progress.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 1,
      currentWord: 0,
      englishWords: ['party'],
      spanishWords: ['fiesta'],
    };

    this.makeProgress = this.makeProgress.bind(this);
    this.reverseProgress = this.reverseProgress.bind(this);

  }

  makeProgress() {

  }

  reverseProgress() {

  }

  render() {
    return (
      <div className="main">
        <div className="header">
          <h1>Fiesta Party!</h1>
        </div>
        <div className="input">
          <Input />
        </div>
        <div className="progress">
          <Progress />
        </div>
      </div>
    );
  }
}

export default App;
