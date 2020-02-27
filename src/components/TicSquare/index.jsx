import React, {Component} from 'react';
import ReactDom from 'react-dom';

class TicSquare extends Component{

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }

  // handleClick = () => {
  //   this.setState({
  //     value: 'X'
  //   })
  // };

  render() {
    return (
      // onclick是props中传入的Board中的方法，这里可以在子组件中调用父组件传入的方法
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    )
  }
}

export default TicSquare;
