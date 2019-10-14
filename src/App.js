import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from './containers/HomePage/HomePage';
import NewRequest from './containers/NewRequest/NewRequest';
import NavBar from './components/NavBar/NavBar';
import RequestDetails from './components/RequestDetails/RequestDetails';

const App = () => {
  return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Homepage} />
          <Route path="/newrequest" component={NewRequest} />
          <Route path="/request/:id" component={RequestDetails} />
        </div>
      </Router>
  );
}

export default App;