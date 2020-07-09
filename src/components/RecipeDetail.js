import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetail(props) {
  const { recipe, onClickingDelete } = props;
  
  return (
    <React.Fragment>
      <h1>Recipe:</h1>
      <h2>{recipe.name}</h2>
      <h3>{recipe.author}</h3>
      <h4>{recipe.description}</h4>
      
      
      <button onClick ={ props.onClickingEdit }>Edit</button>
      <button onClick ={() => onClickingDelete(recipe.id) }>Delete</button>
    </React.Fragment>
  );
}








RecipeDetail.propTypes = {
  recipe: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default RecipeDetail;