import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicBoard from "../TicBoard";

class TicGame extends Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <TicBoard />
        </div>
        <div className="game-info">
          <div>{/* status*/}</div>
          <ol></ol>
        </div>
      </div>
    );
  }

}
export default TicGame;
