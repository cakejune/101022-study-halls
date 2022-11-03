import React, { useState } from 'react'
import FilterByCat from './FilterByCat'
import CatCardsContainer from './CatCardsContainer'
import { catAlbumData } from "../data/catAlbumData"

function App() {

  const [currentCat, setCurrentCat] = useState('All')

  console.log("currentCat: ", currentCat)

  // RENDER //
  return (
    <>
      <h1>Cat Photo Album</h1>

      <FilterByCat setCurrentCat={ setCurrentCat } />

      <CatCardsContainer catAlbumData={ catAlbumData } currentCat={currentCat} />
    </>
  )

}

export default App
