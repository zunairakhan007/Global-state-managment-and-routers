
import React from 'react';
import CategoryFilter from '../components/CategoryFilter';

const Home = () => {
  return (
    <div className="home-container">
  <div className="hero">
    <h1>Welcome to Emoji World!</h1>
    <p>Explore, choose, and express your emotions with fun emojis.</p>
  </div>

  <div className="emoji-preview">
    <span>😀</span>
    <span>😅</span>
    <span>😍</span>
    <span>🐱</span>
    <span>🍕</span>
    <span>😂</span>
  </div>

  <div className="category-section">
    <h2>🎯 Filter by Category</h2>
    <CategoryFilter />
  </div>
</div>

  );
};

export default Home;
