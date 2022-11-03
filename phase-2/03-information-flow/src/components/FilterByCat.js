import React from 'react'

function FilterByCat() {

  // RENDER //
  return (
    <div className="filter-buttons">

      <span>Filter Cats: </span>

      <br/>

      <button onClick={() => console.log("Filter cats to see all cats")}>All</button>
      <button onClick={() => console.log("Filter cats to see only Octavia")}>Octavia</button>
      <button onClick={() => console.log("Filter cats to see only Ursula")}>Ursula</button>

    </div>
  )

}

export default FilterByCat
