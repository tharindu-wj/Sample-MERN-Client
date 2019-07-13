import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post'
import AddPost from './AddPost'


class Posts extends Component {
  state = {
    posts: []
  }

  async componentDidMount() {

    try {
      const response = await axios.get('/api/v1/posts');
      const posts = response.data;

      this.setState({
        posts
      })
    } catch (err) {
      console.log('Post error', err)
    }

  }


  render() {
    return (
      <div className="recipe-list">
        <div className="row">
          <AddPost />
        </div>
        <h1>Post List</h1>
        <div className="row">

          {
            this.state.posts.map((post) => {
              return <Post post={post} key={post._id} />
            })
          }
        </div>
      </div>
    );
  }
}

export default Posts;