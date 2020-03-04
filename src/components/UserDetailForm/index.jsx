import React, {Component} from 'react';
import axios from 'axios';
import {request} from "../../../.ice";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

@withRouter
class UserDetailForm extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      username: '',
      sex: '',
      note: ''
    };
  }

  componentDidMount() {
    // 使用window.fetch方法进行get请求，测试后可用
    // this.fetchUser(1);
    // alert(this.props.match.params.id);

    // 使用axios进行get和post请求，目前再用
    let id = this.props.location.state.id;
    console.log("DetailForm id: " + id);
    this.getUserByAxios(id);

    // 使用ice中request进行get请求，目前暂不可用
    // this.getUserByIce(1);
  }

  // react文档中提供的ajax方式，使用的是浏览器内置的window.fetch
  fetchUser(id) {
    fetch("http://localhost:8080/react-user/detail?id=" + id)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);

          const user = result.data;
          this.setState({
            id: user.id,
            username: user.userName,
            sex: user.sex,
            note: user.note
          })
        },
        // 注意：需要在此处处理错误,而不是使用 catch() 去捕获错误. 因为使用catch去捕获异常会掩盖掉组件本身可能产生的bug.
        (error) => {
          console.log(error);
        }
      )
  }

  // 使用axios来进行get请求
  // 使用前需要安装axios：npm install axios --save，并进行import
  async getUserByAxios(id) {
    try {
      const response = await axios.get("http://localhost:8080/react-user/detail?id=" + id);
      console.log(response);
      const user = response.data.data;

      this.setState({
        id: user.id,
        username: user.userName,
        sex: user.sex,
        note: user.note
      })
    } catch (error) {
      console.error(error);
    }
  }

  // ice中的请求封装了axios，暂时有点问题
  // 使用前需要安装axios: npm install ice --save，并进行import
  async getUserByIce(id) {
    try {
      // get请求
      const result = await request.get('http://localhost:8080/react-user/detail?id=' + id);
      console.log(result);
    } catch (error) {
      alert(error)
    }
  }

  // 表单变更处理函数
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name] : value,
    })
  };

  // 更新用户信息函数
  handleSubmit = (event) => {
    this.submitUser();
  };

  // post请求提交更新后的user信息
  submitUser() {
    const {id, username, sex, note} = this.state;
    console.log(id + ", " + username + ", " + sex + ", " + note);

    // 直接使用post请求
    axios.post('http://localhost:8080/react-user/update', {
      id: id,
      userName: username,
      // sex: sex === 'MALE' ? 1 : 2, // 1: 男，2: 女
      sex: sex, // 这里可以直接根据SexEnum的枚举name来进行参数传递，不需要使用枚举key
      note: note
    })
      .then(function (response) {
        console.log(response);
        alert(response.data.msgInfo);
        // 更新列表state
        const user = response.data.data;
        this.setState({
          id: user.id,
          username: user.userName,
          sex: sex,
          note: note
        });

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const {id, username, sex, note} = this.state;

    return (
      <React.Fragment>
        <h1>User Detail Form</h1>
        <form>
          <table>
            <tr>
              <td>Id:</td>
              <td><input
                type="text"
                id="id"
                name="id"
                value={id}
                disabled="true"
                onChange={this.handleChange}/></td>
            </tr>
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
                value="UpdateUser"
                onClick={this.handleSubmit}/></td>
            </tr>
          </table>
        </form>
      </React.Fragment>
    )
  }
}
export default UserDetailForm;
