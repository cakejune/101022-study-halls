import React from 'react'

function FilterByCat({ setCurrentCat }) {

  // RENDER //
  return (
    <div className="filter-buttons">

      <span>Filter Cats: </span>

      <br/>

      <button onClick={() => setCurrentCat("All")}>All</button>
      <button onClick={() => setCurrentCat("Octavia")}>Octavia</button>
      <button onClick={() => setCurrentCat("Ursula")}>Ursula</button>

    </div>
  )

}

export default FilterByCat
