var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];



const numbers = [1, 2, 3, 4];
var newNumArray
function addElementToBeginningOfArray(array, element) {

  array = [element, ...numbers]
  return array
}
addElementToBeginningOfArray(newNumArray, 'eight')




function destructivelyAddElementToBeginningOfArray(x, y) {
  x.unshift(y)
  return x
}
destructivelyAddElementToBeginningOfArray(chocolateBars, 'Dove')
