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

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}


var theFunk = funkyFunction()


function funkyFunction() {
  var theFunk = "FUNKY!"
  return function inner(theFunk) {
      return theFunk
  }
}

funkyFunction()
var greeting = funkyFunction()
greeting('FUNKY!')


  describe('funkyFunction()', function() {
    it('returns a function', function() {
      expect(typeof window.funkyFunction()).toEqual('function')
    })
  })

  describe("the variable 'theFunk'", function() {
    it('is equal to "FUNKY!"', function() {
      expect(window.theFunk).toEqual('FUNKY!')
    })
  })

})
