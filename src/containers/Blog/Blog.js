import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

  getPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => {
    //     console.log(response);
    //   })

    this.getPosts();
  }

  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
