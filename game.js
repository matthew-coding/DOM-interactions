// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    // BIND YOUR EVENT LISTENERS HERE
    // The first one is provided for you
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault()
  evt.target.classList.toggle('green')
  updateCounts()
}

// CREATE FUNCTION makeBlue HERE
function makeBlue (evt) {
  evt.target.classList.toggle('blue')
  updateCounts()
}
// CREATE FUNCTION hide HERE
//Write a function hide that takes an evt parameter. It'll look almost exactly the same as the first two event handlers, but add the class invisible. Don't forget to call updateCounts() at the end of the function.
function hide (evt) {
  evt.target.classList.toggle('invisible')
  updateCounts()
}


// variable totals is an object, i need to have a system that updates the counts in these objects. I need to link it to the count of blue, green or invisible classes? 
// Make an array then use the array length to find the totals? getElementsByClassName use 
function updateCounts () {
  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }
  
  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS

  var countB = document.getElementsByClassName('blue');
  var countG = document.getElementsByClassName('green');
  var countI = document.getElementsByClassName('invisible')
totals.blue = countB.length;
totals.green = countG.length;
totals.invisible = countI.length;


  displayTotals(totals)
}

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
