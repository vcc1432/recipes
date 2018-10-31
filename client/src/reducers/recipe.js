import { RECIPE_DETAILS_FETCHED } from '../actions/recipes'

const reducer = (state = null, action = {}) => {
    switch (action.type) {
      case RECIPE_DETAILS_FETCHED:
        return action.payload
      default:
        return state
    }
  }
  
  export default reducer