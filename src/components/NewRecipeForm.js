import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewRecipeForm(props) {

  function handleNewRecipeFormSubmission(event) {
    event.preventDefault();
    props.onNewRecipeCreation({
      name: event.target.name.value,
        author: event.target.author.value,
          description: event.target.description.value,
          id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewRecipeFormSubmission}
        buttonText="Create" />
    </React.Fragment>
  );
}

NewRecipeForm.propTypes = {
  onNewRecipeCreation: PropTypes.func
};

export default NewRecipeForm;
