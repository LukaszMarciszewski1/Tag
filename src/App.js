import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContextPostsProvider from './context/ContextPosts'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Tag from './pages/Tag'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <ContextPostsProvider>
          <Route path='/Tag'>
            <Tag />
          </Route>
        </ContextPostsProvider>
      </Switch>
    </Router>
  )
}

export default App
