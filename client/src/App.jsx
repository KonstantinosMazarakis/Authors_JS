import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Authors from './components/Authors';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/editAuthor';
import Unrecognized from './components/Unrecognized';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path="/">
          <Authors></Authors>
      </Route>
      <Route exact path="/authors/add">
        <AddAuthor></AddAuthor>
      </Route>
      <Route exact path="/authors/edit/:_id">
        <EditAuthor></EditAuthor>
      </Route>
      <Route exact path="/authors/unrecognized">
        <Unrecognized></Unrecognized>
      </Route>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
