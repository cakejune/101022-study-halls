import React from 'react'

function PrettyKitty({ name, image, caption }) {

    const showLikedStatus = false ? "❤️" : "♡"

    // RENDER //
    return (
        <div className="cat-card">

            <h2>🐾 {name} 🐾</h2>

            <img src={ image } alt={ name } />

            <p>
              {caption}
              <button className="like-button">{showLikedStatus}</button>
            </p>

        </div>
    )

}

export default PrettyKitty
