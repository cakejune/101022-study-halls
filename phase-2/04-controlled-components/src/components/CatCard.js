import React, { useState } from 'react'

function PrettyKitty({ name, image, caption }) {

    const [isLiked, setIsLiked] = useState(false)

    const showLikedStatus = isLiked ? "❤️" : "♡"

    function handleClick() {
        setIsLiked((prevIsLiked) => !prevIsLiked)
    }

    // RENDER //
    return (
        <div className="cat-card">

            <h2>🐾 {name} 🐾</h2>

            <img src={ image } alt={ name } />

            <p>
              {caption}
              <button className="like-button" onClick={handleClick}>
                {showLikedStatus}
              </button>
            </p>

        </div>
    )

}

export default PrettyKitty
