import React from 'react';

const Post = ({post}) => (
  <div className="post-block col-sm-4">
  <h1>{post.title}</h1>
  <span>{post.body}</span>
  </div>
);

export default Post;