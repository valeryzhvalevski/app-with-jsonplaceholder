import React, { useState } from 'react';
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import Images from './components/Images/Images';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('users');

  return (
    <div className="app">
      <nav>
        <button onClick={() => setActiveTab('users')} className={activeTab === 'users' ? 'active' : ''}>Users</button>
        <button onClick={() => setActiveTab('posts')} className={activeTab === 'posts' ? 'active' : ''}>Posts</button>
        <button onClick={() => setActiveTab('images')} className={activeTab === 'images' ? 'active' : ''}>Images</button>
      </nav>
      <div className="content">
        {activeTab === 'users' && <Users />}
        {activeTab === 'posts' && <Posts />}
        {activeTab === 'images' && <Images />}
      </div>
    </div>
  );
};

export default App;
