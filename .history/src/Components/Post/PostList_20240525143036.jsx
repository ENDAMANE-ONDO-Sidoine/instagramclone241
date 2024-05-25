import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';
import Post from './Post'; 

const PostList = ({ searchTerm }) => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const postsData = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          timestamp: data.timestamp ? data.timestamp.toDate() : new Date(),
          likedBy: data.likedBy || [],  
          comments: data.comments || []  
        };
      });
      setPosts(postsData.sort((a, b) => b.timestamp - a.timestamp));
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const filtered = posts.filter(post => {
      if (!post.caption) return false; // Vérifiez si la légende est définie
      return post.caption.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPosts(filtered);
  }, [searchTerm, posts]);

  return (
    <div>
      {filteredPosts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          photoURL={post.photoURL}
          caption={post.caption}
          likedBy={post.likedBy}
          userId={post.userId}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default PostList;
