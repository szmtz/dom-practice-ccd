JAVASCRIPT AND THE DOM Practice (Codecademy)
Traversing the DOM
Let’s recap the parent and children relationship in the DOM hierarchy. A parent node is any node that is a direct ancestor of another node. A child node is a direct descendant of another node, called the parent node.

These relationships follow the nested structure of the HTML code. Elements nested within one HTML element are children of that parent element.

Each element has a .parentNode and .children property. The .parentNode property returns the parent of the specified element in the DOM hierarchy. 

Note that the document element is the root node so its .parentNode property will return null. The .children property returns an array of the specified element’s children. 
If the element does not have any children, it will return null.
