import React from 'react';
import classes from './Modal.module.css';

import AddRecipe from '../AddRecipe/AddRecipe';
import RemoveRecipe from '../RemoveRecipe/RemoveRecipe';

const Modal = ({closeModal, recipe, remove}) => {

  return(
    <div onClick={closeModal} className={classes.Backdrop}>
      <div className={classes.Modal}>
         
          <div className={classes.Modal_Left}>
            <img src={recipe.image} alt=""/>
            <div className={classes.Nutrients} >
              <h2>Total Nutrients</h2>

             
              <ul className={classes.Nutrients_List}>

                  <li>Carbs: {recipe.totalNutrients.CHOCDF === undefined ? 0 : Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</li>

                  <li>Protein: {recipe.totalNutrients.PROCNT === undefined ? 0 : Math.round(recipe.totalNutrients.PROCNT.quantity)}g</li>

                  <li>Fats: {recipe.totalNutrients.FAT === undefined ? 0 : Math.round(recipe.totalNutrients.FAT.quantity)}g</li>

                  <li>Cholesterol: {recipe.totalNutrients.CHOLE === undefined ? 0 : Math.round(recipe.totalNutrients.CHOLE.quantity)}g</li>

                  <li>Trans fat: {recipe.totalNutrients.FATRN === undefined ? 0 : Math.round(recipe.totalNutrients.FATRN.quantity)}g</li>

                  <li>Sugar: {recipe.totalNutrients.SUGAR === undefined ? 0 : Math.round(recipe.totalNutrients.SUGAR.quantity)}g</li>

                  <li>Fiber: {recipe.totalNutrients.FIBTG === undefined ? 0 : Math.round(recipe.totalNutrients.FIBTG.quantity)}g</li>

              </ul>
            </div>


          </div>

          <div className={classes.Modal_Right}>
          <h4 onClick={closeModal} className={classes.Exit}> &#10006;</h4>
            <h1>{recipe.label}</h1>
            <h3>Source: {recipe.source}</h3>
            
            <ul className={classes.Macros}>
              <li className={classes.Macros_Protein}>Protein: {recipe.totalNutrients.PROCNT === undefined ? 0 : Math.round(recipe.totalNutrients.PROCNT.quantity)}g</li>

              <li className={classes.Macros_Carbs}>Carbohydrates: {recipe.totalNutrients.CHOCDF === undefined ? 0 : Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</li>

              <li className={classes.Macros_Fat}>Fats: {recipe.totalNutrients.FAT === undefined ? 0 : Math.round(recipe.totalNutrients.FAT.quantity)}g</li>
            </ul>

            <div className={classes.Labels}></div>
            <h2>Health Labels</h2>
             <ul className={classes.Health_Labels}>
               {recipe.healthLabels.map((label, index) => (
                 <li key={index}>{label}</li>
               ))}
             </ul>
              
              <div className={classes.Caution}>
              <h2>Cautions</h2>
                <ul className={classes.Caution_Label}>
                {recipe.cautions.map((label, index) => (
                  <li key={index}>- {label}</li>
                ))}
              </ul>
              </div>



             <h2>Ingredients</h2>
             <ul className={classes.ingredient}>
               {recipe.ingredients.map((ingredient, index) => (
                 <li key={index}>{ingredient.text}</li>
               ))}
            </ul>   
            <a href={recipe.url} target="_blank" rel="noopener noreferrer" className={classes.Link} >Veiw Recipe</a>
            
            {remove ? <RemoveRecipe recipe={recipe} /> : <AddRecipe recipe={recipe} />}

          </div>

            
      </div>
    </div>
  )


}

export default Modal;