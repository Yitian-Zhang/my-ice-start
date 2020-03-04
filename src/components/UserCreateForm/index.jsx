import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import axios from 'axios';

@withRouter
class UserCreateForm extends Component {
  // 页面跳转静态属性
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      sex: 'MALE',
      note: ''
    };
  }

  // 表单变更处理函数
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name] : value,
    })
  };

  // 创建用户信息
  handleSubmit = (event) => {
    this.submitUser();
  };

  // post请求提交更新后的user信息
  submitUser() {
    const {username, sex, note} = this.state;
    const { history } = this.props;
    console.log(username + ", " + sex + ", " + note);

    // 直接使用post请求
    axios.post('http://localhost:8080/react-user/create', {
      // id: id,
      userName: username,
      sex: sex, // 这里可以直接根据SexEnum的枚举name来进行参数传递，不需要使用枚举key
      note: note
    }).then(function (response) {
      console.log(response);
      alert(response.data.msgInfo);

      // 添加完成后跳转list页面
      history.push({
        pathname: '/user/list',
      });
    }).catch(function (error) {
        console.log(error);
    });

    // // Send a POST request with another method
    // axios({
    //   method: 'post',
    //   url: '/user/12345',
    //   data: {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    //   }
    // }).then(function (response) {
    //   console.log(response);
    // }).catch(function (error) {
    //   console.log(error);
    // });
  };

  render() {
    const {username, sex, note} = this.state;
    return (
      <React.Fragment>
        <h1>User Create Form</h1>
        <form>
          <table>
            <tr>
              <td>Username:</td>
              <td><input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleChange}/></td>
            </tr>
            <tr>
              <td>sex:</td>
              <td><select
                name="sex"
                value={sex}
                onChange={this.handleChange}>
                <option value="MALE">MALE</option>
                <option value="FEMALE">FEMALE</option>
              </select></td>
            </tr>
            <tr>
              <td>note:</td>
              <td><input
                type="text"
                id="note"
                name="note"
                value={note}
                onChange={this.handleChange}/></td>
            </tr>
            <tr>
              <td><input
                type="button"
                value="CreateUser"
                onClick={this.handleSubmit}/></td>
            </tr>
          </table>
        </form>
      </React.Fragment>
    )
  }
}
export default UserCreateForm;
