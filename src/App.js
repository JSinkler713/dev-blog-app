import React from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPreviews from './containers/BlogPreviews'

function App() {
  return (
    <div className="App">
      <header className="blog-header">
        <h1>Dev-Blog</h1>
      </header>
      <BlogPreviews />
    </div>
  );
}

export default App;
