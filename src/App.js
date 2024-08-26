import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react';
import LoginPage from './components/LoginPage';
import OneboxScreen from './components/OneboxScreen';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <Router>
      <div className="App">
        <DarkModeToggle />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/onebox" component={OneboxScreen} />
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App