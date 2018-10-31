import * as React from 'react'

export default function RecipeDetails(props) {
  return (<div>
    <h1 className="display-2">{props.recipe.title}</h1>
    <img src={props.recipe.pictureUrl} alt={props.recipe.title} />
    <p>Description: {props.recipe.description}</p>
 
  </div>)
}


