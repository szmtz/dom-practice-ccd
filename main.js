/* Just as the DOM allows scripts to modify existing elements, it also allows for the creation of new ones.

 The .createElement() method creates a new element based on the specified tag name passed into it as an argument. However, it does not append it to the document. It creates an empty element with no inner HTML.

 let paragraph = document.createElement('p');

 In the example code above, the .createElement() method takes 'p' as its argument which creates an empty <p> element and stores it as the paragraph variable.

We can assign values to the properties of the newly created element like how we’ve done previously with existing elements.

paragraph.id = 'info'; 
paragraph.innerHTML = 'The text inside the paragraph';

Above, we use the .id property to assign 'info' as ID and the .innerHTML property to set 'The text inside the paragraph' as the content of the <p> element.

In order to create an element and add it to the web page, you must assign it to be the child of an element that already exists on the DOM, referred to as the parent element. We call this process appending. The .appendChild() method will add a child element as the parent element’s last child node. The following code appends the <p> element stored in the paragraph variable to the document body.

document.body.appendChild(paragraph);

The .appendChild() method does not replace the content inside of the parent, in this case, body. Rather, it appends the new element as the last child of that parent.

 */ 


// Create a <li> element using the .createElement() method and save it in a variable called newAttraction.
const newAttraction = document.createElement("li");

// Assign the id 'vespa' to the newAttraction element
newAttraction.setAttribute("id", "vespa");

newAttraction.id = 'vespa';

// assign the newAttraction element the text 'Rent a Vespa' as its inner HTML.
newAttraction.innerHTML = 'Rent a Vespa';

// append the newAttraction element to the list of top attractions with the ID of italy-attractions.
const italyAttractionsList = document.getElementById('italy-attractions');
italyAttractionsList.appendChild(newAttraction);




