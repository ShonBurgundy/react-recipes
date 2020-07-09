import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';



function EditRecipeForm (props) {
  const { recipe } = props;

  function handleEditRecipeFormSubmission(event) {
    event.preventDefault();
    props.onEditRecipe({
      name: event.target.name.value,
        author: event.target.author.value,
          description: event.target.decription.value,
            id: recipe.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditRecipeFormSubmission}
        buttonText = "Update Recipe"/>
    </React.Fragment>
  );
}

EditRecipeForm.propTypes = {
  onEditRecipe: PropTypes.func
};


export default EditRecipeForm;