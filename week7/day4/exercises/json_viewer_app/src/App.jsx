import React from 'react';
import PostList from './PostList';
import data from './posts.json';

const App = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '0 1rem' }}>
      <h1>Liste des Posts</h1>
      <PostList posts={data} />
    </div>
  );
};

export default App;
