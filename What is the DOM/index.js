// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       Web browser contracts the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       JavaScript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

document.title = 'Bro Code'
document.body.style.background = 'hsl(0, 50%, 100%)';
console.dir(document) //the entire document with all properties

const userName = ''
let welcome = document.getElementById('welcome-msg')
welcome.textContent += userName === "" ? 'Guest' : userName;




