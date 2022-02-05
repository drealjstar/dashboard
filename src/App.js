import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getUsers } from './Redux/actions';

import Table from "./Component/table";
import AddUser from "./Component/addUser";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])


  return (
    <BrowserRouter>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Table />
          </Route>
          <Route exact path="/adduser"  render={(props) => <AddUser {...props}/>}/>
           
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
