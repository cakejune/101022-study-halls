import React from 'react'
import PrettyKitty from './PrettyKitty'
import image1 from "./assets/IMG_0828.jpg"
import image2 from "./assets/IMG_0832.jpg"
import image3 from "./assets/IMG_0847.jpg"
import image4 from "./assets/IMG_0866.jpg"

function App() {

    return (
        <div>
            <PrettyKitty name={"Octavia"} image={image1} />
            <PrettyKitty name={"Ursula"} image={image2} />
            <PrettyKitty name={"Sundae"} image={image3} />
            <PrettyKitty name={"Luna"} image={image4} />
            <PrettyKitty />
        </div>
    )

}

export default App