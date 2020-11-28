import React, {useEffect, useState} from 'react'
import MovieSearchHeader from './MovieSearchHeader.jsx'
import MovieItem from './MovieItem'

function MovieSearch() {
    const API_KEY = 75459931
 
    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('avengers')
    const [loading, setLoading] = useState(true)
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const getData = async () => {
           const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
           const data = await response.json()

           setMovies(data.Search)
           setLoading(false)
        }

        getData()
    }, [query])


    const getQuery = () => {
        if(search.trim()){
           setQuery(search)
           setSearch('')
        }
    }

    const updateSearch = (search) => {
        setSearch(search)
    }

    const bodyDarkMode = () => {
        setIsDark(!isDark)
    }

 
    return (
        <div className="movieSearch app-container">
            <div
                className="app"
                style={{backgroundColor: isDark ? "#222222" : "" }}
            > 
                <MovieSearchHeader
                    updateSearch={updateSearch}
                    getQuery={getQuery}
                    bodyDarkMode={bodyDarkMode}
                />

                {loading ? <div className="loading"></div> : (
                    <div className="movies">
                        {movies.map(movie => (
                            <MovieItem key={movie.imdbID} movie={movie}/>
                         ))}
                    </div>
                )}
            </div>
        </div>
    ) 
}

export default MovieSearch
