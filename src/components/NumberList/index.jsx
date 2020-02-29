import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const ListItem = (props) => {
  return (
    <li>{props.value}</li>
  )
};

class NumberList extends Component {

  render() {
    const numbers = this.props.numbers;
    const listItems = numbers.map((number) =>
      <ListItem
        key={number.toString()}
        value={number}/>
    );

    return (
      <ul>{listItems}</ul>
    );
  }
}
export default NumberList;
