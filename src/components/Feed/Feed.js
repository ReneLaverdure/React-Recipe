import React from 'react';
import classes from './Feed.module.css';
import Recipe from '../Recipe/Recipe';

const Feed = (recipes) => {

  return(
    <div className={classes.feed}>
    {recipes.recipe.map((recipe, index) => (
      <Recipe 
      key={recipe.recipe.uri} 
      id={index}
      recipe={recipe.recipe}
      />
    ))}
</div>
  )
}

export default Feed;