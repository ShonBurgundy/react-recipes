import * as c from './../actions/ActionTypes';

export const deleteRecipe = id => ({
  type: c.DELETE_RECIPE,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addRecipe = (recipe) => {
  const { name, author, description, id } = recipe;
  return {
    type: c.ADD_RECIPE,
    names: name,
    author: author,
    description: description,
    id: id
  }
}