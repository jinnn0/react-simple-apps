import React from 'react'
import MovieItem from './MovieItem.jsx'

function Movie({movies}) {
    return (
        <div className="movies">
            {movies.map(movie => (
                <MovieItem key={movie.imdbID} movie={movie}/>
            ))}
        </div>
    )
}

export default Movie
