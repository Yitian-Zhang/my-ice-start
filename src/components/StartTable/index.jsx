import React, {Component} from 'react';
import StartApp from "../StartApp";

// table header组件（简单组件定义）
const TableHeader = () => {
  return (
    <thead>
    <tr>
      <th>Name</th>
      <th>Job</th>
    </tr>
    </thead>
  )
};

// Table Body组件（简单组件定义）
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={()=> props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  });
  return (<tbody>{rows}</tbody>)
};

class StartTable extends Component {

  render() {
    const {characterData, removeCharacter} = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}

export default StartTable;
