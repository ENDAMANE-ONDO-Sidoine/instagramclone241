import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EditProfile from './components/Profile/EditProfile';
import CreatePost from './components/Post/CreatePost';
import Navbar from './components/Common/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/post/create" element={<CreatePost />} />
      </Routes>
    </>
  );
}

export default App;
