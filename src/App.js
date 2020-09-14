import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import SpotifyState from './Context/Spotify/spotifyState'
import {ProtectedRoute} from './components/protectedRoute/protectedRoute'
import {Login, Dashboard, Fof} from './components'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {

  return (
    <SpotifyState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <ProtectedRoute exact path='/myhome' component={Dashboard}/>
          <ProtectedRoute path='/myhome/:prop' component={Dashboard}/>
          <Route path='*' component={Fof}/>
        </Switch>
      </Router>
    </SpotifyState>
  );

}

export default App;
