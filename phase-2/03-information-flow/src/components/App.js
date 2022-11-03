import React from 'react'
import FilterByCat from './FilterByCat'
import CatCardsContainer from './CatCardsContainer'
import { catAlbumData } from "../data/catAlbumData"

function App() {

  // RENDER //
  return (
    <>
      <h1>Cat Photo Album</h1>

      <FilterByCat />

      <CatCardsContainer catAlbumData={ catAlbumData } />
    </>
  )

}

export default App
