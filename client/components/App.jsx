import React from 'react';
import CurrentWord from './CurrentWord.jsx';
import Input from './Input.jsx';
import Progress from './Progress.jsx';
import Confetti from './Confetti.jsx';
import Levels from '../levels.js';

// Revisit heirarchy of components
// Stub out new design for SoC and reusable components
// Refactor to cleaner React design

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // current level of gameplay
      level: 0,
      // index of current word to translate
      currentWord: 0,
      // words to translate for this level
      englishWords: [],
      // translations for this level
      spanishWords: {},
      // value for user input field
      userAnswer: '',
      // current completion status for this level
      complete: false,
      // text to display for button
      buttonText: 'Next Level'
    };

    // bind methods to correct context
    this.chooseLevel = this.chooseLevel.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.playAgain = this.playAgain.bind(this);

  }

  // choose a level to play
  chooseLevel(e) {
    const value = e.target.value;
    const levelIndex = value - 1;
    this.setState({
      level: levelIndex,
      currentWord: 0,
      englishWords: Levels[levelIndex].englishWords,
      spanishWords: Levels[levelIndex].spanishWords,
      userAnswer: '',
      complete: false,
      buttonText: levelIndex < Levels.length - 1 ? 'Next Level' : 'Start Over'
    });
  }

  // update userAnswer in state when user types into input field
  handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
    this.checkAnswer(value);
  }

  checkAnswer(answer) {
    // English word we're currently translating
    let current = this.state.englishWords[this.state.currentWord];
    // Array of all correct translations
    let translations = this.state.spanishWords[current];
    // modify user answer so it is not case sensitive & ignores accents
    answer = answer.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    // set timeout if it's the last level
    let timeout = 200;
    if (this.state.currentWord === this.state.englishWords.length - 1) {
      timeout = 400;
    }

    // If translations array includes the user's answer, progress to next word
    if (translations.includes(answer)) {
      setTimeout(() => {
        this.setState({
          // increment progress to next word
          currentWord: this.state.currentWord + 1,
          // reset input field to blank string
          userAnswer: '',
          // check if the current level is completed (check if it's Fiesta time!)
          complete: this.state.currentWord + 1 === this.state.englishWords.length
        });
      }, timeout);
    }
  }

  playAgain() {
    if (this.state.level + 1 === Levels.length - 1) {
      this.setState({
        complete: false,
        currentWord: 0,
        level: this.state.level + 1,
        englishWords: Levels[this.state.level + 1].englishWords,
        spanishWords: Levels[this.state.level + 1].spanishWords,
        buttonText: 'Start Over'
      });
    } else {
      this.setState({
        complete: false,
        currentWord: 0,
        level: 0,
        englishWords: Levels[0].englishWords,
        spanishWords: Levels[0].spanishWords,
        buttonText: 'Next Level'
      });
    }
  }

  componentDidMount() {
    this.setState({
      englishWords: Levels[this.state.level].englishWords,
      spanishWords: Levels[this.state.level].spanishWords
    });
  }

  render() {

    // if level is complete, render Fiesta page
    if (this.state.complete) {
      return (
        <div className="main">
          <Confetti />

          {/* logo image */}
          {/* refactor: make component */}
          <img src="logo.png"></img>

          {/* header */}
          {/* refactor: make component */}
          <div className="header">It's Fiesta Time!</div>

          {/* play again button */}
          {/* refactor: make component */}
          <div id="playAgain"
            onClick={this.playAgain}>
            {this.state.buttonText}
          </div>

          {/* fiesta images */}
          {/* refactor: make component */}
          <img className="fiestaImg" id="balloons" src="/fiesta/balloons.png"></img>
          <img className="fiestaImg" id="cerveza" src="/fiesta/cerveza.png"></img>
          <img className="fiestaImg" id="guacamole" src="/fiesta/guacamole.png"></img>
          <img className="fiestaImg" id="limes" src="/fiesta/limes.png"></img>
          <img className="fiestaImg" id="music" src="/fiesta/music.png"></img>
          <img className="fiestaImg" id="pinata" src="/fiesta/pinata.png"></img>
          <img className="fiestaImg" id="taco" src="/fiesta/taco.png"></img>
          <img className="fiestaImg" id="tequila" src="/fiesta/tequila.png"></img>

        </div>
      );

      // if level is NOT complete, render current word challenge
    } else {
      return (
        <div className="main">

          {/* sombrero image */}
          {/* refactor: make component */}
          <img src="logo.png"></img>

          {/* header */}
          {/* refactor: make component */}
          <div className="header">Fiesta Party!</div>

          {/* current word to translate */}
          {/* refactor: move div into component */}
          <div className="currentWord">
            <CurrentWord word={this.state.englishWords[this.state.currentWord]}
                         chooseLevel={this.chooseLevel} />
          </div>

          {/* input field */}
          {/* refactor: move div into component */}
          <div className="input">
            <Input answer={this.state.userAnswer}
              handleInputChange={this.handleInputChange} />
          </div>

          {/* progress */}
          {/* refactor: move div into component */}
          <div className="progress">
            <Progress current={this.state.currentWord}
              limit={this.state.englishWords.length} />
          </div>

        </div>
      );
    }
  }

};

export default App;
