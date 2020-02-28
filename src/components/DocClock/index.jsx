import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DocClock extends Component {

  /*
    DocClock组件中各个方法的调用顺序：
    1. 当Clock被传给ReactDOM.render方法时，React会调用Clock组件的constructor方法。对其中设置的state值进行初始化
    2. 之后React会调用组件的render方法，确定该组件需要渲染的元素。然后React更新DOM来匹配Clock组件的渲染输出。
    3. 当Clock组件的输出被插入到DOM中后，React会调用componentDidMount方法。在这个方法中，Clock组件向浏览器请求设置一个计时器
       来每秒调用一次组件的tick方法。
    4. 浏览器每秒都会调用依次tick方法。在该方法中通过setState方法来对state进行更新。由于setState方法的调用，React能够
       知道state已经发生了改变，然后就会重新调用render方法来确定页面上需要显示的内容（这里是局部更新）。进而React更新DOM。
    5. 一旦Clock组件从DOM中移除，React就会调用componentWillUnmount方法来进行计时器的清除。
   */

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  // 组件挂载方法: 该方法在组件已经被渲染到DOM后运行
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  // 组件卸载方法：该方法在组件将要被DOM卸载前进行
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  };

  render() {
    return (
      <div>
        <h1>Hello Clock: {this.props.clockNumber}</h1>
        <label>Now is: {this.state.date.toLocaleTimeString()}</label>
      </div>
    );
  }
}

export default DocClock;
