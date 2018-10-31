import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipesList(props) {
  return (
    <div>
        <h1 className="display-2">All Recipes:</h1>
      <ul>
        { props.recipes && props.recipes.map(recipe => (
          <li key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></li>
        )) }
        { !props.recipes && <li>Loading...</li>}
      </ul>
    </div>
  )
}