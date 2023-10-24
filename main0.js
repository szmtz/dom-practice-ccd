// Get the first child of the document body
//Create a variable called first and set it to the first child of the document body
const first = document.body.firstElementChild;

// Set the inner HTML of the first element to the following text
// the first element was the first child tag of the body -- the h1 tag
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

// use the .parentNode property to access the parent element of the variable 'first'

const parentElement = first.parentNode;

// Modify the backgroundColor of the parent element to 'beige'
parentElement.style.backgroundColor = 'beige';