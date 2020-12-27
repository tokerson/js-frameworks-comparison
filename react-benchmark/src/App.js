import { useState } from 'react';
import Posts from './shared/data.json';
import Post from './components/Post';
import './App.css';
import './shared/styles/posts.css';

function App() {
  const [posts, setPosts] = useState(Posts);
  return (
    <div className='App'>
      {posts.map((post) => (
        <Post {...post} />
      ))}
    </div>
  );
}

export default App;
