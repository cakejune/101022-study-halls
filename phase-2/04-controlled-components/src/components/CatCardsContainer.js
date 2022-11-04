import React from 'react'
import CatCard from './CatCard'

function CatCardsContainer({ catsArray, currentCat }) {

  // take currentCat and only show cats that are the current cat
  const currentCatImages = catsArray.filter( catElement => currentCat === 'All' || currentCat === catElement.name )

  // MAP CARDS //
  const catImageCards = currentCatImages.map( catImage => (
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
