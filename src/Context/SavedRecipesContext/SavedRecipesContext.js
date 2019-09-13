import React, {useState, createContext} from 'react';

export const SavedRecipesContext = createContext();

export const RecipesProvider = (props) => {
  const [savedRecipes, setSavedRecipes] = useState([]);

  return(
    <SavedRecipesContext.Provider value={[savedRecipes, setSavedRecipes]} >
      {props.children}
    </SavedRecipesContext.Provider>
  )
}

