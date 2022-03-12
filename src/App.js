import { Route, Switch } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import MovieDetail from './components/movieDetail/MovieDetail'
import PageNotFound from './components/pageNotFound/PageNotFound'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/movie/:id'>
            <MovieDetail />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
