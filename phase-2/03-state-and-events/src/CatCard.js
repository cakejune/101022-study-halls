import React from 'react'
import raccoonImage from './assets/raccoon-icon.jpg'

function PrettyKitty({ name = "Unknown and Unknowable", image = raccoonImage, caption }) {

    return (
        <div className="cat-card">

            <h2>🐾 {name} 🐾</h2>

            <img src={ image } />

            <p>{caption}</p>

        </div>
    )

}

export default PrettyKitty
