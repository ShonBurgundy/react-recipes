import React from 'react';
import NewRecipeForm from './NewRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import EditRecipeForm from './EditRecipeForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';

class RecipeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedRecipe != null) {
      this.setState({
        selectedRecipe: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewRecipeToList = (newRecipe) => {
    const { dispatch } = this.props;
    const action = a.addRecipe(newRecipe);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedRecipe = (id) => {
    const selectedRecipe = this.props.masterRecipeList[id];
    this.setState({selectedRecipe: selectedRecipe});
  }
  
  handleDeletingRecipe = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteRecipe(id);
    dispatch(action);
    this.setState({selectedRecipe: null});
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingRecipeInList = (recipeToEdit) => {
    const { dispatch } = this.props;
    const action = a.addRecipe(recipeToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedRecipe: null
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = <EditRecipeForm recipe = {this.state.selectedRecipe} onEditRecipe = {this.handleEditingRecipeInList} />
      buttonText = "Return to recipe list";
    } else if (this.state.selectedRecipe !=null) {
      currentlyVisibleState = 
      <RecipeDetail 
        recipe = {this.state.selectedRecipe}
        onClickingDelete = {this.handleDeletingRecipe}
        onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to recipe list";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewRecipeForm onNewRecipeCreation = {this.handleAddingNewRecipeToList} />;
      buttonText = "Return to recipe list";
    } else {
      currentlyVisibleState = <RecipeList recipeList = {this.props.masterRecipeList} onRecipeSelection = {this.handleChangingSelectedRecipe} />;
      buttonText = "Add recipe"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterRecipeList: state.masterRecipeList,
    formVisibleOnPage: state.formVisibleOnPage
  }
};

RecipeControl.propTypes = {
  masterRecipeList: PropTypes.object
};

RecipeControl = connect(mapStateToProps)(RecipeControl);


export default RecipeControl;