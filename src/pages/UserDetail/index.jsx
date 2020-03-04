import React, {Component} from 'react';
import ReactDom from 'react-dom';
import request from 'ice';
import UserDetailTable from "../../components/UserDetailForm";
import axios from 'axios';

class UserDetail extends Component {



  render() {
    const {id, username, sex, note} = this.state;

    return (
      <div>
        <h1>User Detail</h1>
        <UserDetailTable
          id={id}
          username={username}
          sex={sex}
          note={note}/>
      </div>
    )
  }
}
export default UserDetail;
