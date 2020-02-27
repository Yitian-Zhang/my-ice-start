import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TicSquare from "../TicSquare";

class TicBoard extends Component {

  constructor(props) {
    super(props);   // JavaScript类的构造方法中，该步骤必须有
    this.state = {  // 初始化组件state
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  // 该方法被Board组件传递给Square组件，在Square组件点击时被调用
  handleClick = (i) => {
    // this.handleClick(i);
    const squares = this.state.squares.slice(); // 创建squares数组的副本
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  };

  // 渲染Square组件
  renderSquare = i => {
    // 使用props进行属性传递
    // return <TicSquare value={i} />

    // 更新后的方法
    return <TicSquare
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />
  };

  // 计算游戏胜者
  calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player:' + (this.state.xIsNext ? 'X': 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default TicBoard;
