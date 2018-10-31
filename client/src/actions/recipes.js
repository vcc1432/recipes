import request from 'superagent'

export const RECIPES_FETCHED= 'RECIPES_FETCHED'
export const RECIPE_DETAILS_FETCHED= 'RECIPE_DETAILS_FETCHED'

const baseUrl = 'http://localhost:4000'

const recipesFetched = recipes => ({
    type: RECIPES_FETCHED,
    payload: recipes
})

const recipeDetailsFetched = recipe => ({
  type: RECIPE_DETAILS_FETCHED,
  payload: recipe
})


export const loadRecipes = () => (dispatch) => {
  request(`${baseUrl}/recipes`)
    .then(response => {
      dispatch(recipesFetched(response.body))
    })
    .catch(console.error)
}

export const loadRecipeDetails = (id) => (dispatch) => {
  request(`${baseUrl}/recipes/${id}`)
    .then(response => {
      dispatch(recipeDetailsFetched(response.body))
    })
    .catch(console.error)
}