import React, {useState} from 'react';
import classes from './Recipe.module.css'

import Modal from '../Modal/Modal'

const Recipe = ({recipe}) => {

  const [showModal, setModal] = useState(false);

    // modal logic
    const modal = e => {
      setModal(!showModal);
      console.log(showModal);
    }
  
    const closeModal = e => {
      const target = e.target.className.substring(0,14);
      if (target === "Modal_Backdrop") {
        modal();
      }
    }

  return(
    <div className={classes.recipe}>
      <img src={recipe.image} alt=""/>
      <h1>{recipe.label}</h1>
      <h2>Calories: {Math.round(recipe.calories)}</h2>

      <ul className={classes.macros}>
        <li>Protein: {recipe.totalNutrients.PROCNT == undefined ? 0 : Math.round(recipe.totalNutrients.PROCNT.quantity)}g</li>
        
        <li>Carbohydrates: {recipe.totalNutrients.CHOCDF == undefined ? 0 : Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</li>

        <li>Fats: {recipe.totalNutrients.FAT == undefined ? 0 : Math.round(recipe.totalNutrients.FAT.quantity)}g</li>
      </ul>

      <ul className={classes.ingredients}>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index} >- {ingredient.text}</li>
        ))}
      </ul>
      
      <div className={classes.footer}>
        <button onClick={modal} >View Details</button>
        <button>Add Recipe+</button>
      </div>
      
        {showModal ? <Modal recipe={recipe} closeModal={closeModal} /> : null}

    </div>
  )
}

export default Recipe