import React, {useEffect, useState} from 'react';
import classes from './Home.module.css';

import Feed from '../../components/Feed/Feed';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {

  const APP_ID = "c3eed72e";
  const APP_KEY = "c02b514e529864aa17648ce1210137c1";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [feed, setFeed] = useState(false);
  const [displaySpinner, setDisplaySpinner] = useState(false);

  useEffect( () => {

    const getRecipe = async () => {
      if(query.length !== 0) {
        setDisplaySpinner(true);
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        setRecipes(data.hits);
        setDisplaySpinner(false);
        setFeed(true);
      }
  
    }
    getRecipe();
  }, [query]);


  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="Home">
      <div className={classes.hero}>
  
      <div className={classes.display}>
          <h1 className={classes.displayTitle}>Search for New recipes to add to your collection of delicious homemade meals</h1>

          <form onSubmit={getSearch} className={classes.searchForm}>
            <input className={classes.searchBar} type="text" value={search} onChange={updateSearch} />
            <button  className={classes.searchButton} type="submit">
                Search
              </button>
              
          </form>
          { displaySpinner ? <Spinner /> : null}
          
      </div>

      </div>

        {feed ? <Feed recipe={recipes} /> : null}

        
    </div>

  )
}

export default Home;
