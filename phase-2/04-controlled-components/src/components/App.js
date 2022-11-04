import React, { useState } from 'react'
import NewCatForm from './NewCatForm'
import FilterByCat from './FilterByCat'
import CatCardsContainer from './CatCardsContainer'
import { catAlbumData } from "../data/catAlbumData"

function App() {

  const [catsArray, setCatsArray] = useState(catAlbumData)
  const [currentCat, setCurrentCat] = useState('All')

  console.log("currentCat: ", currentCat)

  // RENDER //
  return (
    <>
      <h1>Cat Photo Album</h1>

      <FilterByCat setCurrentCat={ setCurrentCat } />

      <CatCardsContainer catsArray={ catsArray } currentCat={currentCat} />

      <NewCatForm />
    </>
  )

}

export default App
