import React, {useContext} from 'react';
import {SavedRecipesContext} from '../../Context/SavedRecipesContext/SavedRecipesContext'
import classes from './RemoveRecipe.module.css';

const RemoveRecipe = (recipe) => {

  const [savedRecipes, setSavedRecipes] = useContext(SavedRecipesContext);

  
  const removeItem = () => {
    let currentRecipe = recipe.recipe.uri;
    let allRecipes = [...savedRecipes];

    const item = allRecipes.findIndex(recipe => recipe.recipe.uri === currentRecipe);
    allRecipes.splice(item, 1);

    setSavedRecipes([...allRecipes]);
  }

  return(
    <button onClick={removeItem} className={classes.removeRecipe}>
      Remove Recipe-
    </button>
  )
}

export default RemoveRecipe;