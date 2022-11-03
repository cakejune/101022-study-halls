import React from 'react'
import CatCard from './CatCard'

function CatCardsContainer({ catAlbumData }) {

  // MAP CARDS //
  const catImageCards = catAlbumData.map( catImage => (
    <CatCard
      key={catImage.id}
      name={catImage.name}
      image={catImage.image}
      caption={catImage.caption}
    />
  ))

  // RENDER //
  return (
    <div className="flex">

      { catImageCards }

    </div>
  )

}

export default CatCardsContainer
