import { useState } from 'react';
import Posts from './shared/data.json';
import Post from './components/Post';
import PostPage from './components/PostPage';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './shared/styles/posts.css';

function App() {
  const [posts, setPosts] = useState(Posts);
  return (
    <Switch>
      <Route path='/posts/:id' component={PostPage} />
      <Route path='/'>
        <div className='App'>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </Route>
    </Switch>
  );
}

export default App;
