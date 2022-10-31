import React from 'react'
import raccoonImage from './assets/raccoon-icon.jpg'

function PrettyKitty({ name = "Bob the raccoon", image = raccoonImage }) {

    return (
        <>

            <p>My name is {name} and I am a very pretty kitty</p>

            <img src={ image } />

        </>
    )

}

export default PrettyKitty