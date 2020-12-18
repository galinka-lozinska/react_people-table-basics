import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import 'bulma';
import '@fortawesome/fontawesome-free';
import './App.scss';

import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { NotFoundPage } from './components/NotFoundPage';
// import { NotFoundPage } from './components/NotFoundPage';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/people">
        <PeoplePage />
      </Route>

      <Route path="/" exact>
        <HomePage />
      </Route>

      <Redirect path="/home" to="/" />

      <NotFoundPage />
    </Switch>
  </div>
);

export default App;
