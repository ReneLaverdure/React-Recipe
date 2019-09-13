import React, {useState} from 'react';
import classes from './Recipe.module.css'

import Modal from '../Modal/Modal'
import AddRecipe from '../AddRecipe/AddRecipe';
import RemoveRecipe from '../RemoveRecipe/RemoveRecipe';

const Recipe = ({recipe, remove}) => {

    // modal switch
    const [showModal, setModal] = useState(false);

    //display modal also locks y axis scroll to only work with the modal 
    const modal = () => {
      const body = document.getElementsByTagName('BODY')[0];
      body.style.overflowY = "hidden";
      setModal(!showModal);
    }
  
    
    const closeModal = e => {
      const target = e.target.className;
      
      if (target.includes("Backdrop") || target.includes("Exit")) {
        modal();
        const body = document.getElementsByTagName('BODY')[0];
        body.style.overflowY = "auto";
      }
    }

  return(
    <div className={classes.recipe}>

      <img src={recipe.image} alt=""/>
      <h1>{recipe.label}</h1>
      <h2>Calories: {Math.round(recipe.calories)}</h2>

      <ul className={classes.macros}>
        <li>Protein: {recipe.totalNutrients.PROCNT === undefined ? 0 : Math.round(recipe.totalNutrients.PROCNT.quantity)}g</li>
        
        <li>Carbohydrates: {recipe.totalNutrients.CHOCDF === undefined ? 0 : Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</li>

        <li>Fats: {recipe.totalNutrients.FAT === undefined ? 0 : Math.round(recipe.totalNutrients.FAT.quantity)}g</li>
      </ul>

      <ul className={classes.ingredients}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} >- {ingredient.text}</li>
        ))}
      </ul>
      
      <div className={classes.footer}>
        <button onClick={modal} >View Details</button>

        {remove ? <RemoveRecipe recipe={recipe} /> : <AddRecipe recipe={recipe}/>}
       
      </div>
      
        {showModal ? <Modal recipe={recipe} closeModal={closeModal} remove={remove} /> : null}

    </div>
  )
}

export default Recipe