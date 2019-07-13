import React, { Component } from 'react';
import axios from 'axios';

class AddPost extends Component {
  state = {
    formControls: {
      title: '',
      body: '',
    }
  }

  changeHandler = event => {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      formControls: {
        ...this.state.formControls,
        [name]: value
      }
    });
  }

  fileHandler = event => {
    console.log(event.target.files)
  }


  submitHandler = async event => {
    event.preventDefault();
    const { title, body } = this.state.formControls;
    const post = {
      title,
      body,
      author: 1,
      category: 2
    }

    try {
      const response = await axios.post('/api/v1/posts', post);
      console.log(response.data);
    } catch (err) {
      console.log('Post error', err)
    }

  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>

        <input type="text"
          name="title"
          value={this.state.formControls.title}
          onChange={this.changeHandler}
        />

        <textarea name="body"
          value={this.state.formControls.body}
          onChange={this.changeHandler}></textarea>

        <input type="submit" value="Add" />

      </form>
    );
  }

}


export default AddPost;