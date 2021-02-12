import { Switch } from 'react-router-dom';
import PostPage from './pages/Post';
import PostsPage from './pages/Posts';
import RouteWithLayout from './components/RouteWithLayout';
import './App.css';
import './shared/styles/posts.css';

function App() {
  return (
    <Switch>
      <RouteWithLayout path='/posts/:id' component={PostPage} />
      <RouteWithLayout path='/' component={PostsPage} />
    </Switch>
  );
}

export default App;
