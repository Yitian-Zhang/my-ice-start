import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import LoginControl from '../../components/LoginControl';
import NumberList from "../../components/NumberList";
import UserForm from '../../components/UserForm';
import DocBlog from "../../components/DocBlog";

class CommonApp extends Component {
  render() {
    const posts = [
      {id:1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id:2, title: 'Installation', content: 'You can install React from npm.'}
    ];

    return (
      <div>
        {/*条件组件的使用*/}
        <h1>条件组件</h1>
        <LoginControl />
        <hr/>
        <h1>列表 & Key</h1>
        <label>数字列表</label>
        <NumberList numbers={[1, 2, 3, 4, 5]}/>
        <hr/>
        <label>Blog列表</label>
        <DocBlog posts={posts}/>
        <hr/>
        <h1>React表单</h1>
        <UserForm />
        <hr/>
      </div>
    );
  }
}
export default CommonApp;
