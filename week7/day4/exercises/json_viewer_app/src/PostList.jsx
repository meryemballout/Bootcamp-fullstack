import React from 'react';
import posts from '../posts.json';

const PostList = () => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} style={{ marginBottom: '1.5rem' }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;
