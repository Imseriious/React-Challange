import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './containers/HomePage/HomePage';
import NewRequest from './containers/NewRequest/NewRequest';
import Request from './containers/Request/Request.js';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Homepage} />
          <Route path="/newrequest" component={NewRequest} />
          <Route path="/request:id" component={Request} />
        </div>
      </Router>
  );
}

export default App;