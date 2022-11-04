import React from 'react'

function NewCatForm() {

  // EVENT HANDLERS //
  // more will go here very soooooooon

  // RENDER //
  return (
    <form className="new-cat-form">

      <h2>Add A New Cat Pic</h2>

      {/* ID */}
      <label htmlFor="id">ID: </label>
      <input type="number" name="id" />

      {/* NAME */}
      <label htmlFor="name">Cat Name: </label>
      <input type="text" name="name" />

      {/* IMAGE */}
      <label htmlFor="image">Image URL: </label>
      <input type="text" name="image" />

      {/* CAPTION */}
      <label htmlFor="caption">Caption: </label>
      <input type="number" name="caption" />

      {/* SUBMIT BUTTON */}
      <input type="submit" value="Add Cat" />

    </form>
  )

}

export default NewCatForm
