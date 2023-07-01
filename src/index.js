import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './AppContext';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import ParentComponent from './App';
import Watchlist from './Watchlist';

ReactDOM.render(
    <AppProvider>
      <Router>
      <Route
          path="/"
          exact
          render={() => 
          <ParentComponent />}
        />

        <Route
          path="/watchlist"
          exact
          render={() => 
          <Watchlist />}
        />
        </Router>
    </AppProvider>,
  document.getElementById('root')
);