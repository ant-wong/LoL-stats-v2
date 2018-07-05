import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

/* COMPONENTS AND CSS */
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Profile from './components/Profile';

class App extends Component {
  constructor() {
    super()
    this.state = {
      player: '',
      matches: []
    }
  }
  
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
          <Route path='/summoner/:id' render={() => {
            return <Profile />
          }} />
          {/* 404 */}
          <Route path='*' component={NotFound} />
        </Switch>

      </div>
    )
  }
}

export default App
