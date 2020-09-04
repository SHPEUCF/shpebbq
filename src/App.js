import React from 'react';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
  
class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path = "/" exact component = { Home }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;