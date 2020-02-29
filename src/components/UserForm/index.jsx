import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      sex: 'male',
      isStudent: true,
      note: "this is a note"
    }
  }

  handleChange = (event) => {
    // const {name, value} = event.target;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    const name = event.target.name;

    // 需要表单中的输入项有name属性，并与state保持一致
    // alert(name + ", "+ value);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    const {username, sex, isStudent, note} = this.state;
    alert(username + "," + sex + "," + isStudent + "," + note);
  };


  render() {
    return (
      <form>
        <table>
          <tr>
            <td>用户名：</td>
            <td><input
              type="text"
              name="username"
              id="username"
              value={this.state.username}
              onChange={this.handleChange}/></td>
          </tr>
          <tr>
            <td>性别：</td>
            <td><select
              name="sex"
              value={this.state.sex}
              onChange={this.handleChange}>
              <option value="male">男</option>
              <option value="female">女</option>
            </select></td>
          </tr>
          <tr>
            <td>是否为学生：</td>
            <td><input
              type="checkbox"
              name="isStudent"
              id="isStudent"
              checked={this.state.isStudent}
              onChange={this.handleChange}/></td>
          </tr>
          <tr>
            <td>备注：</td>
            <td><input
              type="text"
              name="note"
              id="note"
              value={this.state.note}
              onChange={this.handleChange}/></td>
          </tr>
          <tr>
            <td><input type="button" value="提交" onClick={this.handleSubmit}/></td>
          </tr>
        </table>

      </form>
    )
  }
}

export default UserForm;
