import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage, db } from '../../config/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../../Acontexts/AuthContext';

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const currentUser = useAuth(); 

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file || !currentUser) return;

    const fileRef = ref(storage, `posts/${file.name}`);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(snapshot.ref);

    await addDoc(collection(db, 'posts'), {
      photoURL,
      caption,
      userId: currentUser.uid, 
      timestamp: serverTimestamp(),
      likes: 0,
      comments: 0,
      likedBy: []
    });

    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="text" value={caption} onChange={handleCaptionChange} placeholder="Enter a caption..." />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
