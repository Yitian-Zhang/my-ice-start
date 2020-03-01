import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TemInput extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleChange = event => {
    console.log(this.props);
    // 这里的方法调用有问题
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit'
    };
    const {temperature, scale} = this.props;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}: </legend>
        <input
          type="text"
          value={temperature}
          onChange={this.handleChange}/>
      </fieldset>
    )
  }
}
export default TemInput;
