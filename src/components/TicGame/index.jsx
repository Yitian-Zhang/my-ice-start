import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TicBoard from "../TicBoard";

class TicGame extends Component {

  // 构造方法:
  // history数组保存每走一步棋时的棋盘整体情况，其中每个元素都是一个3x3的棋盘数组，初始化为null
  // xIsNext状态表示当前步是否该X下，用于控制X和O下棋的交替过程
  // stepNumber用于记录走棋的step数字
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  // 该方法被当做props依次传递给Board和Square组件，并在Square组件被点击时调用
  handleClick = (i) => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice(); // 创建squares数组的副本
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
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

  // 根据step标识来重置stepNumber状态，并判断当时下棋者
  jumpTo = (step) => {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    // 对history数组进行map处理，来渲染moves下棋过程中的状态列表
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button className="stepButton" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    // 下棋时的status判断
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player:' + (this.state.xIsNext ? 'X': 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          {/* 为了实现history的功能，将Board中的状态提升到了Game组件中，然后将更新后的状态使用props传递给Board组件，此时Board为受控组件 */}
          <TicBoard
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}/>
        </div>
        <div className="game-info">
          {/* status显示当前步骤的改谁下，并显示最后的winner */}
          <div className="status">{status}</div>
          {/* 用于记录下棋过程中所有的步骤过程，moves是一个button的数组 */}
          <ol className="moves">{moves}</ol>
        </div>
      </div>
    );
  }

}
export default TicGame;
