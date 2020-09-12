import React from 'react';
import CurrentWord from './CurrentWord.jsx';
import Input from './Input.jsx';
import Progress from './Progress.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      userAnswer: '',
      complete: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);

  }

  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.checkAnswer(value);
  }

  checkAnswer(attempt) {
    // English word we're currently translating
    let current = this.state.englishWords[this.state.currentWord];
    // Array of all correct translations
    let translations = this.state.spanishWords[current];
    // If translations array includes the user's attempt, progress to next word
    if (translations.includes(attempt.toLowerCase())) {
      this.setState({
        currentWord: this.state.currentWord + 1,
        userAnswer: '',
        // check if the current level is completed (check if it's Fiesta time!)
        complete: this.state.currentWord + 1 === this.state.englishWords.length
      });
    }
  }

  render() {
    // If level is complete, render Fiesta page
    if (this.state.complete) {
      return (
        <div className="complete">It's Fiesta Time!</div>
      );
    } else {
    // If level is NOT complete, render current word challenge
      return (
        <div className="main">
          <div className="header">Fiesta Party!</div>
          <div className="currentWord">
            <CurrentWord word={this.state.englishWords[this.state.currentWord]}/>
          </div>
          <div className="input">
            <Input answer={this.state.userAnswer}
                   handleInputChange={this.handleInputChange}/>
          </div>
          <div className="progress">
            <Progress progress={this.state.currentWord}
                      limit={this.state.englishWords.length}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
