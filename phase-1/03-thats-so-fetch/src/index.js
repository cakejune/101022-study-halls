const artistsContainer = document.querySelector("#artists-container") 

fetch('http://localhost:3000/artists')
    .then( response => response.json() )
    .then( artists => {
        console.log("artists", artists) 
        artists.forEach( artist => {
            const div = document.createElement('div')

            // div.textContent = `${artist.name} | ${artist.instrument}`
            
            const nameElement = document.createElement('p')
            nameElement.textContent = artist.name
            div.appendChild(nameElement)
            
            const instrument = document.createElement('p')
            instrument.textContent = artist.instrument
            div.appendChild(instrument)

            instrument.addEventListener('click', () => console.log(artist) )
            
            artistsContainer.append(div)
        } )
    })
