import React from 'react';
import './App.css';

import Home from './pages/Home';
import Product from './pages/Product';
import Watch from './pages/Watch';
import Error from './pages/Error';

import{Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return(
  <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component = {Home}/>
      <Route exact path="/Product" component = {Product}/>
      <Route exact path="/Product/:slug" component = {Watch}/>
      <Route component ={Error}/>
    </Switch>
  </>
  );
}

export default App;
