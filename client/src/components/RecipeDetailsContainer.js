import React from 'react'
import {connect} from 'react-redux'
import RecipeDetails from './RecipeDetails'
import {loadRecipes, loadRecipeDetails} from '../actions/recipes'

class RecipeDetailsContainer extends React.Component {
  componentWillMount() {
    if (this.props.recipes === null) this.props.loadRecipes()
  }

componentDidMount() {
    this.props.loadRecipeDetails(Number(this.props.match.params.id))
  }

  render() {
    if (!this.props.recipe) return <h2>Loading...</h2>
    return (<RecipeDetails 
      recipe={this.props.recipe} 
      />)
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  recipe: state.recipe
})

export default connect(mapStateToProps, {loadRecipes, loadRecipeDetails})(RecipeDetailsContainer)