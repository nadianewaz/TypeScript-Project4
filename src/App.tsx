import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';
import Post from './Component/Post';

function App() {
  return (
    <>
    <h2>Children Props</h2>
    <Button>Click me</Button>

    <Post />
    
    </>
  );
}

export default App;
