console.log("%c --- Debugging ---", "color: yellow");

// let's do a syntax error
//  L what is compilation? what is runtime? what is an interpreted language?

if (!!"I am true" === true) {
  console.log("I am true!")
}

const raccoon = "Bob"

// debugger

console.log(raccoon)

function returnSomething(something) {
    console.log(something)
    return something
}

const library = [
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    editions: {
      first: "1886",
      second: "1887"
    }
  },
  {
    title: "A Wizard of Earthsea",
    author: "Ursula K LeGuin",
    editions: {
      first: "2004",
      second: "2012",
      third: "2015"
    }
  },
  {
    title: "Necronomicon",
    author: "Unknown",
    editions: {
      first: "1886"
    }
  }
]



// for ALL of these -> what line is the error on? what happens if we can't do something?

// think like a scientist
//  L what did I expect?
//  L what did I get?
//  L why do I think that's happening?
//  L what can I do to test if that's true or not?

// isolation -> comment your code out and bring it back slowly
// slow chaining -> if there's a problem with dot chaining, try one piece at a time

// let's talk about return vs console.log...

document.querySelector('h1').textContent = "no more bugs!"
