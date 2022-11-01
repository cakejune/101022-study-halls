import React from 'react'

function Header( { title, foods, views } ) {

    console.log( title );
    
    return (
        <header>
            <h1>{ title }</h1>
        </header>
    )

}

export default Header 