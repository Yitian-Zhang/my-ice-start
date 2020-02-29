import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class DocBlog extends Component {

  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );

    const content = this.props.posts.map((post) =>
      <div key={post.id}>
        <label>{post.title}</label>
        <p>{post.content}</p>
      </div>
    );

    return (
      <div>
        {sidebar}
        {content}
      </div>
    );
  }
}

export default DocBlog;
