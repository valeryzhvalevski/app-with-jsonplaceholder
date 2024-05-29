import React, { useState, useEffect } from 'react';
import './Posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [selectedPost, setSelectedPost] = useState(null);
  const [slideDirection, setSlideDirection] = useState(''); 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  const nextPost = () => {
    setSelectedPost(null);
    setSlideDirection('next');
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevPost = () => {
    setSelectedPost(null);
    setSlideDirection('prev');
    setCurrentPostIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length);
  };

  const selectPost = () => {
    setSelectedPost(posts[currentPostIndex]);
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="slider">
        <button onClick={prevPost}>Previous</button>
        {posts.length > 0 && (
          <div className={`slide ${slideDirection}`} onAnimationEnd={() => setSlideDirection('')}>
            <h2 onClick={selectPost}>{posts[currentPostIndex].title}</h2>
            {selectedPost && <p>{posts[currentPostIndex].body}</p>}
          </div>
        )}
        <button onClick={nextPost}>Next</button>
      </div>
    </div>
  );
};

export default Posts;
