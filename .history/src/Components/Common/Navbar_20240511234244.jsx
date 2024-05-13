import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'; // Adjust the path as necessary
import { auth } from '../../config/firebase'; // Ensure this is correctly imported
import { signOut } from 'firebase/auth';

const Nav = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSignOut = async () => {
    try {
      await signOut(auth);  // Firebase sign out
      navigate('/login');   // Redirect to login after sign out
    } catch (error) {
      console.error('Sign out failed', error);
    }
  };




  rf

  const Navbar = () => {
    return (
        <div className='flex justify-between items-center px-12 py-2 bg-gray-100 sticky top-0 z-20 shadow'>
            <div className='flex'>
                <img src='https://pngedits.com/public/uploads/preview/instagram-logo-png-image-download-11617068196c1gb8cm06w.png' alt='logo
                ' className='w-28' />
            </div>
                <Search />
            <div className='flex items-center justify-between gap-x-3'>
                <button className='text-white bg-blue-600 hover:bg-green-600 transform transition duration-500 ease-in-out hover:scale-110 font-bold px-2 py-0 shadow rounded text-[18px]'><Link to="/profile/edit">Edit Profile</Link></button>
                <button className='text-white bg-violet-900 hover:bg-yellow-500 transform transition duration-500 ease-in-out hover:scale-110 font-bold px-2 py-0 shadow rounded text-[18px]'><Link to="/post/create">Create Post</Link></button>
            </div>
            <button onClick={handleSignOut} className="hover:text-blue-300 transition duration-200">Sign Out</button>
        </div>
    );
}

export default Navbar;



