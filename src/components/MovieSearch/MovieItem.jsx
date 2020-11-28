import React from 'react'

function MovieItem({movie}) {
    return (
        <div className="movie">
            <div className="poster-container">
              <img className="poster" src={movie.Poster} alt=""/>
            </div>
            <h3 className="title">{movie.Title}</h3>
      </div>
    )
}

export default MovieItem
