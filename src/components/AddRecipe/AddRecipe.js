import React, {useState, useContext} from 'react';
import {SavedRecipesContext} from '../../Context/SavedRecipesContext/SavedRecipesContext'
import classes from './AddRecipe.module.css'

import Alert from '../Alert/Alert';

const AddRecipe = (recipe) => {

  const [savedRecipes, setSavedRecipes] = useContext(SavedRecipesContext);
  const [alert, setAlert] = useState(false);
  const [text, setText] = useState('Your Recipe has successfully been saved');

// display alert and remove after 3 seconds
  const displayAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 1500);
  }


  const addRecipe = () => {
    setAlert(false);
    // slected recipe id
    let currentRecipe = recipe.recipe.uri;
    // track currently saved ids
    let currentRecipeURI = []
    
    // if empty accept any
    if(savedRecipes.length === 0) {
      setSavedRecipes(prevRecipes => [...prevRecipes, recipe]);
      displayAlert();
    } else {
      savedRecipes.forEach(ele => {
        currentRecipeURI.push(ele.recipe.uri);
     })

     // check if item is already saved
     if(currentRecipeURI.indexOf(currentRecipe) === 0 || currentRecipeURI.indexOf(currentRecipe) > 0) {
       setText("Item already Saved");
       displayAlert();
     } else {
      setSavedRecipes(prevRecipes => [...prevRecipes, recipe]);
      displayAlert();
     }

    }

  }

  return(
  
          
    <button onClick={addRecipe} className={classes.addRecipe}>
      Add Recipe+
      {alert ? <Alert type="rgb(26, 212, 26)" text={text}/> : null}
    </button>
   

  )
}

export default AddRecipe;