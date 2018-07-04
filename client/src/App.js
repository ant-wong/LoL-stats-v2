import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

/* COMPONENTS AND CSS */
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <div className="main">

        {/* NAVIGATION */}
        <Navbar />
        
        {/* ROUTES */}
        <Switch>
          <Route exact path='/' render={() => {
            return <Home />
          }} />
          {/* 404 */}
          <Route path='*' component={NotFound} />
        </Switch>

      </div>
    )
  }
}

export default App
