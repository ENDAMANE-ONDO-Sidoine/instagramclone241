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
          reactions: data.reactions || {}
        };
      });
      setPosts(postsData.sort((a, b) => b.timestamp - a.timestamp));
      setFilteredPosts(postsData); 
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const lowercasedFilter = searchTerm.toLowerCase();
      const filteredData = posts.filter(item =>
        item.caption.toLowerCase().includes(lowercasedFilter)
      );
      setFilteredPosts(filteredData);
    } else {
      setFilteredPosts(posts);
    }
  }, [searchTerm, posts]);

  return (
    <div>
      {filteredPosts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          photoURL={post.photoURL}
          caption={post.caption}
          reactions={post.reactions}
          userId={post.userId}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default PostList;
