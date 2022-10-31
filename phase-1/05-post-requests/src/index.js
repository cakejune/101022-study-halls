console.log("%c ---That's so fetch---")

const dimSumContainer = document.querySelector('#dim-sum-container')
const form = document.querySelector('#new-form')
const inputNameValue = document.querySelector('#name')

// function parseData(response) {
//   return response.json()
// }

// function createDimSumElement(dimSum) {
//   const h2 = document.createElement('h2')
//   h2.textContent = dimSum.name
//   dimSumContainer.appendChild(h2)
// }

function createDimSums(fetchedDimSums) {
  fetchedDimSums.forEach( dimSum => {
    const h2 = document.createElement('h2')
    h2.textContent = dimSum.name
    dimSumContainer.appendChild(h2)
  })
}

fetch("http://localhost:3000/foods")
.then( res => res.json()  )
.then(createDimSums)



form.addEventListener('submit', event => {
  event.preventDefault()
  console.log("value: ", inputName.value)

  // SOME SORT OF POST RIGHT HERE
  form.reset()
})
