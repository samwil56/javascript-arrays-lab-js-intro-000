var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(name) {
  var newkit = [...kittens,name]
  return newkit
}

function prependKitten(name) {
  var newkit = [name,...kittens]
  return newkit
}

function removeLastKitten() {
  var newkit = kittens.splice(0,kittens.length-1)
  return newkit
}

function removeFirstKitten() {
  var newkit = kittens.splice(1,2)
  return newkit
}
