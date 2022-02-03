import React from "react";
import { Provider } from 'react-redux'
import Table from "./Component/table";
import AddUser  from "./Component/addUser";
import {store} from './Redux/store';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <div className="App">
      <Switch>

      <Route exact path="/">
      <Table />
      </Route>
      
      <Route exact path="/adduser">
      <AddUser />
      </Route>

      </Switch>
      </div>
      </BrowserRouter >
    </Provider>
  );
}

export default App;
