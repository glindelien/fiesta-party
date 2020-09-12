import React from 'react';
import CurrentWord from './CurrentWord.jsx';
import Input from './Input.jsx';
import Progress from './Progress.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      currentWord: 0,
      englishWords: [
        'party',
        'hello',
        'goodbye',
        'dog',
        'cat',
        'food',
        'taco',
        'beer',
        'music',
        'code'
      ],
      spanishWords: {
        party: ['fiesta'],
        hello: ['hola'],
        goodbye: ['adios', 'adiós'],
        dog: ['perro', 'perra'],
        cat: ['gato', 'gata'],
        food: ['comida'],
        taco: ['taco'],
        beer: ['cerveza'],
        music: ['música', 'musica'],
        code: ['código', 'codigo']
      },
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.makeProgress = this.makeProgress.bind(this);
    this.reverseProgress = this.reverseProgress.bind(this);

  }

  checkAnswer() {

  }

  makeProgress() {

  }

  reverseProgress() {

  }

  render() {
    return (
      <div className="main">
        <div className="header">
          Fiesta Party!
        </div>
        <div className="currentWord">
          <CurrentWord word={this.state.englishWords[this.state.currentWord]}/>
        </div>
        <div className="input">
          <Input />
        </div>
        <div className="progress">
          <Progress progress={this.state.progress}
                    limit={this.state.englishWords.length}/>
        </div>
      </div>
    );
  }
}

export default App;
