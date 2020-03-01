import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TemInput from "../TemInput";

// BoilingVerdict函数组件
const BoilingVerdict = (props) => {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    return <p>The water would not boil.</p>;
  }
};

// Temperature Calculator类组件
class TemCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  // F计算C
  toCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9;
  };

  // C计算F
  toFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32;
  };

  handleCelsiusChange = (temperature) => {
    this.setState({
      temperature: temperature,
      scale: 'c'
    });
    console.log("update input: " + this.state.temperature);
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({
      temperature: temperature,
      scale: 'f'
    });
    console.log("input is: " + temperature);

  };

  // 根据字符串类型的temperature和转换函数来相互转换F和C的值
  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  render() {
    const {temperature, scale} = this.state;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

    console.log("updated input: " + this.state.temperature);
    console.log("temperature: " + temperature);
    console.log("scale: " + scale);
    console.log("celsius: " + celsius);
    console.log("fahrenheit: " + fahrenheit);

    return (
      <div>
        <TemInput
          temperature={celsius}
          scale='c'
          onTemperatureChange={this.handleCelsiusChange}/>

        <TemInput
          temperature={fahrenheit}
          scale='f'
          onTemperatureChange={this.handleFahrenheitChange}/>

        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>

    )
  }
}
export default TemCalculator;
