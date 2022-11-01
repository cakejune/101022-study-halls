import React from 'react'
import CatCard from './CatCard'
import image1 from "./assets/IMG_0828.jpg"
import image2 from "./assets/IMG_0832.jpg"
import image3 from "./assets/IMG_0847.jpg"
import image4 from "./assets/IMG_0866.jpg"

function App() {

    return (

      <>

        <h1>Cat Photo Album</h1>

        <div className="flex">

            <CatCard name={"Ursula"} image={image1} caption={"Can haz fish?"} />
            <CatCard name={"Ursula"} image={image2} caption={"You can't ignore me if I'm being cute all over your workspace"} />
            <CatCard name={"Octavia"} image={image3} caption={"Yes I do sleep like this"} />
            <CatCard name={"Octavia"} image={image4} caption={"Hello..."} />
            <CatCard />
        </div>

      </>
    )

}

export default App
