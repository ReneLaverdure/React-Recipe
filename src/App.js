import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Recipe from './components/Recipe/Recipe';
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';
import SavedRecipes from './components/SavedRecipes/SavedRecipes';
import './App.css';



const App = () => {

  const APP_ID = "c3eed72e";
  const APP_KEY = "c02b514e529864aa17648ce1210137c1";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  const [currentRecipe, setCurrentRecipe] = useState([{currentRecipe: {}}]);

  // const [counter, setCounter] = useState(0);

  useEffect( () => {
    getRecipe();
  }, [query])


  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <Router>
    <div className="App">
     <Navbar />
     <Switch>
      <Route path="/savedrecipes" exact component={SavedRecipes} />

    </Switch>

    <div className="hero">
      
   


    <div className="display">
        <h1 className="display-title">Search for New recipes to add to your collection of delicious homemade meals</h1>

        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button  className="search-button" type="submit">
              Search
            </button>
        </form>
    </div>

    </div>


      <div className="feed">
          {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.uri} 
            recipe={recipe.recipe}

            />
          ))}
      </div>


    </div>
  </Router>
  )
}

export default App;
