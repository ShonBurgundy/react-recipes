import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

function RecipeList(props) {
  return (
    <React.Fragment>
      {Object.values(props.recipeList).map((recipe) => {
        return <Recipe
        whenRecipeClicked = {props.onRecipeSelection}
        name = {recipe.name}
        author = {recipe.author}
        description = {recipe.description}
        id = {recipe.id}
        key = {recipe.id} />
      })}
    </React.Fragment>
  );
}
RecipeList.propTypes = {
  recipeList: PropTypes.object,
  onRecipeSelection: PropTypes.func
};

export default RecipeList;