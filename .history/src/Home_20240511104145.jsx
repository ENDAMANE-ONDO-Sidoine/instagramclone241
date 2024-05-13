import React from 'react';
import Navbar from './Common/Navbar'; 
import PostList from '../'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-4">
        <h1 className="text-xl font-bold text-center">Welcome to My Instagram Clone!</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Home;
