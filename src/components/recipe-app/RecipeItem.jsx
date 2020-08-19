import React from 'react'

function RecipeItem({title, url, image, calories, ingredients}){

    return (
        <div className="recipe-item">
          <h1 className="title">{title}</h1>
          <a href={url}><img className="food-image" src={image} alt="food image"/></a>
          <p className="calories">{calories.toFixed(2)} calories</p>
          <ul className="recipe-lists">
              {ingredients.map((ingredient, index) => (
                 <li className="recipe-list" key={index}><span>{index+1}. </span>{ingredient.text}</li>
             ))}
          </ul>
        </div>
    )
}

export default RecipeItem
