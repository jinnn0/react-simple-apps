import React, {useEffect, useState} from 'react'
import Movie from './Movie.jsx'
import Header from './Header.jsx'

function MovieApp() {
    const API_KEY = 75459931

    const [movies, setMovies] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('avengers')

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    }, [query])

    const getData = async () => {
        const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        const data = await response.json()

        setMovies(data.Search)
        setLoading(false)
    }


    const getQuery = () => {
        if(search.trim()){
           setQuery(search)
           setSearch('')
        }
    }

    const updateSearch = (search) => {
        setSearch(search)
    }

    return (
        <div className="movie-app app-container">
            <div className="app">
                <Header updateSearch={updateSearch} getQuery={getQuery}/>
                {loading ? <div className="loading"></div> : <Movie movies={movies}/>}
            </div>
        </div>
    )
}

export default MovieApp
