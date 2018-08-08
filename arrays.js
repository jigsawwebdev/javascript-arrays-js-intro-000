var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];



const array = [1, 2, 3, 4];
var newNumArray
function addElementToBeginningOfArray(array, element) {

  array = [element, ...array]
  return array
}
addElementToBeginningOfArray(newNumArray, 'eight')


function destructivelyAddElementToBeginningOfArray(x, y) {
  x.unshift(y)
  return x
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Dove')


function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}
addElementToEndOfArray((newNumArray, 'eight')

function destructivelyAddElementToEndOfArray(x, y) {
  x.push(y)
  return x
}
destructivelyAddElementToEndOfArray(chocolateBars, 'Dove')
