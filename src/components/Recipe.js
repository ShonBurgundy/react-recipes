import React from 'react';
import PropTypes from 'prop-types';

function Recipe(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenRecipeClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.author}</h3>
        <h4>{props.description}</h4>
      </div>
    </React.Fragment>
  );
}

Recipe.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.string,
  whenRecipeClicked: PropTypes.func
};

export default Recipe;