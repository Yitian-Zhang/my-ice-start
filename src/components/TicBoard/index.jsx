import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TicSquare from "../TicSquare";

class TicBoard extends Component {

  // constructor(props) {
  //   super(props);   // JavaScript类的构造方法中，该步骤必须有
  //   this.state = {  // 初始化组件state
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   }
  // }

  // 渲染Square组件
  renderSquare = i => {
    return <TicSquare
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
  };

  render() {
    return (
      <div>
        {/*<div className="status">{status}</div>*/}
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
