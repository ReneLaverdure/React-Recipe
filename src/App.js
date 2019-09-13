import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import Home from './Container/Home/Home'
import SavedRecipes from './components/SavedRecipes/SavedRecipes';
import './App.css';
import {RecipesProvider} from './Context/SavedRecipesContext/SavedRecipesContext';

const App = () => {

  return (

    <RecipesProvider>
    <Router>
      
    <link href="https://fonts.googleapis.com/css?family=Offside|Rancho&display=swap" rel="stylesheet"></link>
    <div className="App">
     <Navbar />

     <Switch>
      <Route path="/savedrecipes" exact component={SavedRecipes} />
      <Route path="/" component={Home} />
    </Switch>

    </div>
  </Router>
  </RecipesProvider>
  )
}

export default App;
