import React, {Component} from 'react';

class StartForm extends Component {

  // 组件构造函数
  constructor(props) {
    super(props);
    // 初始化state
    this.initialState = {
      name: '',
      job: '',
    };
    this.state = this.initialState;
  }

  // 数据变更事件处理
  handleChange = event => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    })
  };

  // 新数据加入事件处理
  onSubmitForm = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const {name, job} = this.state;

    return (
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}/>
        <label for="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}/>
        <input
          type="button"
          value="Submit"
          onClick={this.onSubmitForm}/>
      </form>
    )
  }
}

export default StartForm;

