import React, {useState, useContext, useEffect} from 'react';

import classes from './SavedRecipes.module.css';
import {SavedRecipesContext} from '../../Context/SavedRecipesContext/SavedRecipesContext';
import Recipe from '../Recipe/Recipe';
import Alert from '../../components/Alert/Alert'

const SavedRecipes = () => {

  const [savedRecipes, setSavedRecipes] = useContext(SavedRecipesContext);
  const [alert, setAlert] = useState(false);
  const [currentRecipes, setCurrentRecipes] = useState([]);

  // 
  useEffect(() => {

    
    displayAlert()
    startingRecipes()
  }, [savedRecipes])

  const displayAlert = () => {
    if(savedRecipes.length < currentRecipes.length) {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
    }
  }
 
  //saves starting recipes
  const startingRecipes = () => {
    setCurrentRecipes([...savedRecipes]);
  }

  

  return(
    <div>
      <h1 className={classes.header}>Saved Recipes</h1>

      <div className={classes.feed}>
        {savedRecipes.map((recipe, index) => (
          <Recipe
          key={index} 
          recipe={recipe.recipe}
          remove={true}
          />
        ))}
      </div>


      {alert ? <Alert type="red" text="The Unwanted Recipe has successfully been taken off the List" /> : null}

    </div>
  )
}

export default SavedRecipes;