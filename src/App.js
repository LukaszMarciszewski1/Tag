import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContextPostsProvider from './context/ContextPosts'
import Home from './pages/Home'
import Tag from './pages/Tag'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Navbar from './components/Navbar/Navbar'
import Layout from './components/Layout'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Breadcrumbs />
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
      </Layout>
      <Footer/>
    </Router>
  )
}

export default App
