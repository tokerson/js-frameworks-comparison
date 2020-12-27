import { useState} from 'react';
import Posts from './data.json'; 
import './App.css';

function App() {
  const [posts, setPosts] = useState(Posts);
  return (
    <div className="App">
      {posts.map(post => <div key={post.id}>
        <img src={post.user.avatar} alt={`avatar of ${post.user.name}`}/>
      </div>)}
    </div>
  );
}

export default App;
