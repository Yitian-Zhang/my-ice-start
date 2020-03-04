import React, {Component} from 'react';
import axios from 'axios';
import {List} from "@alifd/next";
import UserDetailForm from "../UserDetailForm";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
import './index.css';

@withRouter
class UserListTable extends Component {
  // 页面跳转静态配置
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    this.getUserList();
  }

  // 获取用户列表数据
  async getUserList() {
    try {
      const response = await axios.get('http://localhost:8080/react-user/list');
      console.log(response);

      this.setState({
        userList: response.data.data,
      })
    } catch (error) {
      console.error(error);
    }
  }

  // 详情和更新页面
  handleClickDetail = (id) => {
    console.log("ListTable id: " + id);

    // 页面跳转
    const { history } = this.props;
    history.push({
      pathname: '/user/detail',
      state: { id },
    });
  };

  // 删除数据
  handleClickDelete = (id) => {
    this.deleteUser(id);
  };

  // 删除用户
  async deleteUser(id) {
    try {
      const response = await axios.get('http://localhost:8080/react-user/delete?id=' + id);
      console.log(response);
      alert(response.data.msgInfo);

      this.setState({
        userList: response.data.data,
      });

    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const {userList} = this.state;

    return (
      <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>UserName</td>
              <td>Sex</td>
              <td>Note</td>
              <td>Operate</td>
            </tr>
          </thead>
          <tbody>
          {
            userList.map((row, index) => {
              const id = row.id;
              return (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.userName}</td>
                  <td>{row.sex}</td>
                  <td>{row.note}</td>
                  <td>
                    <button
                      className="listButton"
                      onClick={() => this.handleClickDetail(id)}>Detail</button>
                    <button
                      className="listButton"
                      onClick={() => this.handleClickDelete(id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}
export default UserListTable;
