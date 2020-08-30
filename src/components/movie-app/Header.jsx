import React from 'react'
import Search from './Search'

function Header({updateSearch, getQuery, bodyDarkMode}) {
    return (
        <header>
            <Search updateSearch={updateSearch} getQuery={getQuery}/>
            <div className="">
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-mode-input"
                    onClick={bodyDarkMode}
                />
                <label className="toggle-mode" htmlFor="toggle"></label>
            </div>
        </header>
    )
} 
 
export default Header
