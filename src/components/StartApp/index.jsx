import React, {Component} from 'react';
import ReactDom from 'react-dom';
import StartTable from '../StartTable';
import './index.css';
import StartForm from "../StartForm";

class StartApp extends Component {

  // 定义state
  state = {
    characters: [
      // {
      //   name: 'Yitian',
      //   job: 'Janitor',
      // },
      // {
      //   name: 'Mac',
      //   job: 'Bouncer',
      // },
      // {
      //   name: 'Dee',
      //   job: 'Aspring actress',
      // },
      // {
      //   name: 'Dennis',
      //   job: 'Bartender',
      // },
    ],
  };

  // 根据index删除更新state中的内容
  removeCharacter = index => {
    const {characters} = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    })
  };

  // 提交时间处理
  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  };

  render() {
    const {characters} = this.state;

    return (
      <div className="App">
        {/*使用props处理表格数据显示*/}
        <StartTable
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />

        {/*使用state更新表格数据*/}
        <h3>Add new character: </h3>
        <StartForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default StartApp;
