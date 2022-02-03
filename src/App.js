import React from "react";
import Table from "./Component/table";
import AddUser from "./Component/addUser";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
      <BrowserRouter>
       <div className="App">
         <Switch>
          
          <Route  path="/">
            <Table />
          </Route>

          <Route exact path="/adduser">
            <AddUser />
          </Route>
        </Switch>
        </div>
      </BrowserRouter >
    );
}

export default App;
