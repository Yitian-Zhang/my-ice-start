import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DocClock from "../../components/DocClock";

// 该组件是为了理解React中props，state以及生命周期方法而创建的
class ClockApp extends Component {
  render() {
    return (
      <div>
        <DocClock clockNumber={1}/>
        <DocClock clockNumber={2}/>
        <DocClock clockNumber={3}/>
      </div>
    );
  }
}

export default ClockApp;
