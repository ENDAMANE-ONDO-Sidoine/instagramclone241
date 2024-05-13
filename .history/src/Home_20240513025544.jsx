import React from 'react';
import Navbar from './Components/Common/Navbar';
import PostList from './Components/Post/PostList';

const Home = ({ user }) => {
  return (
    <div>
      <div  className='min-h-screen bg-gradient-to-r from-green-400 via-yellow-500 to-blue-500 animate-gradient-x'>
        <Navbar user={user} />
        <main className="flex flex-col bg-slate-200 p-10  mx-auto w-[45%] items-center mt-4">
            <PostList />  
            {children}          
        </main>
      </div>
    </div>
  );
};

export default Home;
