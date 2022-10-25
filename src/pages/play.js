import React from 'react';
import './play.css';

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.state = {game:""}
    
    this.letsPlay = this.letsPlay.bind(this)
    this.onClickGame = this.onClickGame.bind(this)
    this.loadGame = this.loadGame.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
  }
  
  onClickBack() {
    this.setState({game:""})
  }
  
  loadGame() {
      return (
        <div>
            <h1>{this.state.game} Game</h1>
            <div className="games" onClick={this.onClickBack}><button>Back</button></div>
        </div>
      )
  }
  
  onClickGame(e) {
      this.setState({game:e.target.innerHTML})
  }
  
  letsPlay() {
    return (
        <div>
            <h1>Let's Play!</h1>
            <div className="games" onClick={this.onClickGame}><button>Numbers</button></div>
            <div className="games" onClick={this.onClickGame}><button>Letters</button></div>
            <div className="games" onClick={this.onClickGame}><button>Colors</button></div>
            <div className="games" onClick={this.onClickGame}><button>Shapes</button></div>
        </div>
    );
  }
  
  render() {
    return (
        <div>
        {this.state.game.length > 0 ? this.loadGame() : this.letsPlay()}
        </div>
    );
  }
}

export default Play;