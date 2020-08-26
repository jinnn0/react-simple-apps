import React from 'react'
import Search from './Search'

function Header({updateSearch, getQuery}) {
    return (
        <header>
            <Search updateSearch={updateSearch} getQuery={getQuery}/>
            <div className="toggleMode">
                <span className="toggleMode_btn"></span>
                <span></span>
            </div>
        </header>
    )
}

export default Header
