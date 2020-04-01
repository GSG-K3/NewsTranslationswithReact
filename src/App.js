import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TopNews from './components/TopNews';
import PageNotFound from './components/PageNotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <header className="App-header">
        <Switch>
          <Route exact path="/worldnews" component={NavBar} />
          <Route exact path="/" component={TopNews} />
          <Route component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </header>
    </Router>
  );
}

export default App;
