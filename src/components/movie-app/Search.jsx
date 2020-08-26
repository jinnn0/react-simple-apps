import React from 'react'
import {ReactComponent as SearchIcon} from '../../assets/images/search-icon.svg'

function Search({updateSearch, getQuery}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        getQuery()
    }

    const handleInput = (e) => {
        updateSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="search movie.."
                onChange={handleInput}
            />
            <button><SearchIcon/></button>
        </form>
    )
}

export default Search
