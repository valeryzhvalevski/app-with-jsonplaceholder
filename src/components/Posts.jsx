import React, { useState, useEffect } from 'react';


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error(error));
  }, []);

  const selectPost = (post) => {
    setSelectedPost(post === selectedPost ? null : post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="slider">
        {posts.map(post => (
          <div key={post.id} className="slide">
            <h2 onClick={() => selectPost(post)}>{post.title}</h2>
            {selectedPost === post && <p>{post.body}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
