import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'

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
  
  getUser = async (user) => {
    let response  = await axios.get(`http://localhost:6060`, {
      params: {
        user: user
      }
    })
    this.setState({
      player: response.data
    })
    console.log(this.state)
  }

  getMatches = async (id) => {
    let response = await axios.get(`http://localhost:6060/matches`, {
      params: {
        id: id
      }
    })
    this.setState({
      matches: response.data
    })
    console.log(this.state)
  }
  
  render() {
    return (
      <div className="main">

        {/* NAVIGATION */}
        <Navbar />
        
        {/* ROUTES */}
        <Switch>
          <Route exact path='/' render={() => {
            return <Home 
                      {...this.state}
                      getUser={this.getUser}
                      getMatches={this.getMatches}/>
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
