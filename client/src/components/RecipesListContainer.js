import React from 'react'
import {connect} from 'react-redux'
import RecipesList from './RecipesList'
import {loadRecipes} from '../actions/recipes'

class RecipesListContainer extends React.Component {
  componentDidMount() {
    if (!this.props.recipes) this.props.loadRecipes()
    return
  }

  render() {
    if (!this.props.recipes) return <h2>Loading...</h2>
    return (
      <div>
      <RecipesList recipes={this.props.recipes} />
      </div>)
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
})

export default connect(mapStateToProps, {loadRecipes})(RecipesListContainer)