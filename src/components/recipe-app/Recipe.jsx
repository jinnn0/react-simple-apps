import React, {useEffect, useState} from 'react'
import RecipeItem from './RecipeItem.jsx'

function Recipe() {
    const APP_ID = '083af12b'
    const APP_KEY = '933b6ab79e9afb60a0ac794c6868bca6'

    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState('pasta')
    const [numberOfItems, setNumberofItems] = useState(9)

    useEffect(()=>{
        getRecipe()
    },[query,numberOfItems])

    let getRecipe = async () => {
        const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${numberOfItems}`
        const response = await fetch(url)
        const data = await response.json()
        setRecipes(data.hits)
    }

    let updateSearch = (e) => {
        setSearch(e.target.value)
    }

    let getQuery = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    let loadMore = () => {
        setNumberofItems(numberOfItems * 2)
    }



    return (
        <div className="recipe-app app-container">
            <div className="app">

                <div className="search-bar">
                    <form onSubmit={getQuery}>
                        <input type="text" placeholder="search recipes" value={search} onChange={updateSearch}/>
                        <button className="btn" type="submit">Search</button>
                    </form>
                </div>

                <div className="recipe-items">
                    {recipes.map((recipe, index) => (
                    <RecipeItem
                        key={index}
                        title={recipe.recipe.label}
                        url={recipe.recipe.url}
                        image={recipe.recipe.image}
                        calories={recipe.recipe.calories}
                        ingredients={recipe.recipe.ingredients}
                        />
                    ))}
                </div>

                <button className="btn load-more" onClick={loadMore}>Load more</button>
            </div>
        </div>
    )
}

export default Recipe