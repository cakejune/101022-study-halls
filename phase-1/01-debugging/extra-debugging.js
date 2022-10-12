// we eventually want to call this function
function numBooksInLibrary() {
  const librarySize = 0;
  console.log(librarySize)
}

// here is the library you're using
const library = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    editions: {
      first: "1886",
      second: "1887"
    }
  }
  {
    title: "A Wizard of Earthsea",
    author: "Ursula K LeGuin",
    editions: {
      first: "2004",
      second: "2012"
      third: "2015"
    }
  },
  {
    title: "Necronomicon",
    author: "Unknown",
    editions: {
    first: "Unknown"
  }
]

// add 1 to the library size for each book in the library
libray.forEach(librarySize += 1)

// and finally let's console.log this size of the library
numBooksInLibrary()
