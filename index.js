var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}
myAnimal()

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2
  return n + 2
}

function funkyFunction() {
  var theFunk = "FUNKY!"
  return function inner(theFunk) {
      return theFunk
  }
}

var greeting = funkyFunction()
greeting('FUNKY!')

 var funkyFunction = function() {
    return function(){
      return "FUNKY!"
    }
  }

  var theFunk = funkyFunction()
  theFunk()