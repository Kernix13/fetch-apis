# Dom manipulation techniques

> Consider moving the best parts of this file to a new file in my JavaScript Cheat Sheet Repo

My CodePen pens: innerText examples, textContent examples, appendChild examples, innerAdjacentHTML examples, DOM innerHTML examples

> excellent code blocks: https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events

<a id="back-to-top"></a>

## Table of contents

1. [MDN Document Object Model](#mdn-document-object-model)
1. [HTML DOM](#html-dom)
1. [SVG interfaces](#svg-interfaces)
1. [MDN Manipulating documents](#mdn-manipulating-documents)
1. [Document interface](#document-interface)
1. [The document object model](#the-document-object-model)
1. [Dom Manipulation Methods](#dom-manipulation-methods)
1. [Targeting Nodes](#targeting-nodes)
1. [1 Creating a new element](#1-creating-a-new-element)
1. [2 Adding elements to the DOM](#2-adding-elements-to-the-dom)
1. [3 Removing a DOM element](#3-removing-a-dom-element)
1. [4 Setting and Modifying the content inside elements](#4-setting-and-modifying-the-content-inside-elements)
1. [5 Editing element attributes](#5-editing-element-attributes)
1. [6 Also](#6-also)
1. [Terms](#terms)
1. [1 TARGETING NODES](#1-targeting-nodes)
1. [17 DOM Manipulation Methods](#17-dom-manipulation-methods)
1. [The DOM](#the-dom)
1. [Creating Elements in the DOM](#creating-elements-in-the-dom)
1. [Adding Elements to the DOM](#adding-elements-to-the-dom)
1. [Modifying Data Attibutes in the DOM](#modifying-data-attibutes-in-the-dom)
1. [Removing Elements from the DOM](#removing-elements-from-the-dom)
1. [HTMLElement](#htmlelement)
1. [important JS properties and methods](#important-js-properties-and-methods)

<h3 id="mdn-document-object-model" align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"><strong>MDN Document Object Model</strong></a>
</h3>

Also check out [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API): such as Clipboard API, Fetch API, File API, Fullscreen API, Geolocation API, History API, Keyboard API, Performance API, Permission API, Screen Capture API, Selection API, URL API, Web Audio API, Web Speech API, Web Storage AP

## Document Object Model (DOM)

- The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
- Nodes can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

## HTML DOM

- A document containing HTML is described using the Document interface, which is extended by the HTML specification to include various HTML-specific features
- In particular, the [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) interface is enhanced to become [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) and various subclasses, each representing one of (or a family of closely related) elements
  - `Element` is the most general base class from which all element objects in a Document inherit. It only has methods and properties common to all kinds of elements - has a HUGE # of properties, events and methods
  - The `HTMLElement` interface represents any HTML element. Some elements directly implement this interface, while others implement it via an interface that inherits it: has a HUGE # of properties, such as accessKey, contentEditable, dataset, dir, innerText, lang, nonce, outerText - and methods, such as blur, click, focus - also Events
- The HTML DOM API provides access to various browser features such as tabs and windows, CSS styles and stylesheets, browser history, and so forth. These interfaces are discussed further in the [HTML DOM API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API) documentation

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## SVG interfaces

- a lot of SVG interfaces

<h3 id="mdn-manipulating-documents" align="center"><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents"><strong>MDN Manipulating documents</strong></a>
</h3>

One of the most common things you'll want to do is manipulate the document structure in some way. This is usually done by using the DOM, a set of APIs for controlling HTML and styling information that makes heavy use of the Document object.

- The window is the browser tab that a web page is loaded into; this is represented in JavaScript by the [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) object: console, history, innerHeight, innerWidth, ...
- The navigator represents the state and identity of the browser as it exists on the web. In JavaScript, this is represented by the [Navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator) object. You can use this object to retrieve things like the user's preferred `language`, a media stream from the user's webcam, etc...also `geoLocation`, `userAgent`, `cookieEnabled`, `storage`, `userAgent`,
- The document is the actual page loaded into the window, and is represented in JavaScript by the [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) object - You can use this object to return and manipulate information on the HTML and CSS that comprises the document

### Document interface

1. Constructor: `Document()`
2. Instance properties: Starts with `Document.` - `body`, `children`, `documentElement`, `documentURI`, `firstElementChild`, `forms`, `head`, `images`, `lastElementChild`, `links`, `plugins`, `scripts`, `styleSheets` | `cookie`, `dir`, `lastModified`, `location`, `readyState`, `title`, `URL`
3. Instance methods: `append()` `createAttribute()` `createComment()` `createElement()` `createTextNode()` `getElementById()` `getElementByClassName()` `getElementByTagName()` `open()` `prepend()` `querySelector()` `querySelectorAll()` among others
4. Events: `copy`, `cut`, `DomContentLoaded`, `paste`, `scroll`, `scrollend`, `selectionchange`, `visibilitychange` to name just a few
5. Inheritance: `Node`, `EventTaeget`

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## The document object model

The document currently loaded in each one of your browser tabs is represented by a document object model. This is a "tree structure" representation created by the browser that enables the HTML structure to be easily accessed by programming languages

Each entry in the DOM tree is called a node. Nodes are also referred to by their position in the tree relative to other nodes:

- **Root node**: The top node in the tree, which in the case of HTML is always the HTML node (other markup vocabularies like SVG and custom XML will have different root elements).
- **Child node**: A node directly inside another node. For example, IMG is a child of SECTION in the above example, or e.g. `div` > `img` .
- **Descendant node**: A node anywhere inside another node. For example, IMG is a child of SECTION in the above example, and it is also a descendant. IMG is not a child of BODY, as it is two levels below it in the tree, but it is a descendant of BODY.
- **Parent node**: A node which has another node inside it. For example, BODY is the parent node of SECTION in the above example.
- **Sibling nodes**: Nodes that sit on the same level in the DOM tree. For example, IMG and P are siblings in the above example, or e.g. `div` > `img` `p`.

_Creating and placing new nodes_: querySelector > createElement > appendChild > createTextNode > querySelector > appendChild

_Moving (?) and removing elements_: appendChild > removeChild > remove > removeChild

> THIS IS IT:
>
> 1.  `querySelector` > `createElement` > `textContent` > `appendChild` or `append`
> 2.  `querySelector` > `createTextNode` > `innerText` > `appendChild` or `append`

---

[DOM manipulation in JavaScript](https://codedamn.com/news/javascript/dom-manipulation-in-javascript)

- The browser produces a Document Object Model of a web page when it is loaded.
- The HTML DOM model is built as a hierarchy of Objects.
- JavaScript now has all the power it needs to build dynamic HTML thanks to the object model.
- JavaScript has the ability to alter all **HTML elements** on a page.
- JavaScript has the ability to alter all of the HTML **attributes** on a page.
- JavaScript has the ability to change all of the page’s **CSS styles**.
- Existing HTML elements and attributes _can be removed_ using JavaScript.
- JavaScript has the ability to **create new HTML elements and properties**.
- All HTML events on the page can be reacted to by JavaScript (???)
- JavaScript has the ability to **add new HTML events** to a page.

The W3C DOM standard is divided into three sections:

- The Core Document Object Model (DOM) is a common model for all document formats (???)
- The XML Document Object Model (DOM) is a standard model for XML documents.
- HTML DOM (Document Object Model) is a standard model for HTML documents.

The HTML DOM is a programming interface and standard object model for HTML. It specifies:

- The HTML element has objects within a function.
- All HTML elements have properties.
- All HTML components can be accessed using the following techniques.
- All HTML elements have their own set of events.

In other words, the HTML DOM is a set of rules for <ins>getting</ins>, <ins>changing</ins>, <ins>adding</ins>, and <ins>removing</ins> HTML elements.

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Dom Manipulation Methods

Targeting Nodes, Creating and Adding elements, Editing/Modifying elements, Removing elements, and Modifying the content inside elements

### Targeting Nodes

- `getElementById()` – Here, selection is based on the id name. This selector returns only the _first_ matched element - returns an element matching the specified ID, or null if no matching element was found
- `getElementsByClassName()` – This method returns all elements that match a specified class name - returns a live <ins>HTMLCollection</ins> (an array-like list) of HTML elements, possibly of `length` 0 if no matching elements are found
- `getElementsByTagName()` – This method returns all the elements that match a specific tag name - target HTML elements based on their tag names. This method returns a live <ins>HTMLCollection</ins> of all matching HTML elements, possibly of `length` 0 if no match is found
- `querySelector()` – This method returns the _first_ element that matches a specific CSS selector in the document - returns the first element within the document that matches the specified selector, or group of selectors. If no matches are found, `null` is returned. We can provide any selector we want as an argument (a class, an ID etc).
- `querySelectorAll()` – It returns all elements that match the specified css selector in the document - returns a static (not live) <ins>NodeList</ins> representing a list of the document's elements that match the specified group of selectors. The NodeList will be empty if no matches are found
- `getElementsByName()` - returns a <ins>NodeList</ins> Collection of elements with a given `name` attribute in the document

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

#### 1 Creating a new element

- `createElement(tagName, options)`, `createElement()` – creates a new HTML element within the DOM. The return value is the newly created element - creates a new element while manipulating elements - `createElement` used with `append` - Note that doing so creates the element, but does not place it on the page. For this, one of the methods for adding an element in the DOM should be used after creating the element
- common to use it with either `innerText()` or `textContent()` and then `append()` to get it on the page

```js
const body = document.body;
const div = document.createElement('div');
// div.innerText("Hello);
div.textContent = 'Hello';
body.append(div);
```

#### 2 Adding elements to the DOM

2 Ways to do this: 1) .append() or .appendChild(),

- `insertBefore()` - inserts a new node as a child node of a specified parent node before an existing node | `parentElement.insertBefore(newElement, existingElement)` - to insert an element somewhere in the middle of a list of elements - insertBefore is applied to the parent element in which the list of elements are nested
- `insertAfter()` - is a helper method that inserts a new node as a child node of a specified parent node after an existing node
- `append()` - adds a node to the end of a parent node’s final child node - adds a node to the list of child nodes of a parent node - can be applied to any DOM element (including document.body) and accepts an element or a node (e.g. plain text) - inserts a set of elements or texts _after_ the last child of the Element - you can append multiple nodes
- `prepend()` - inserts a node _before_ a parent node’s first child node - works in exactly the same way as append, except it inserts whatever is passed into it as the first content within the element to which it is applied
- `insertAdjacentHTML()` - parses a text as HTML and inserts the generated nodes at a given point in the page
- `cloneNode()` - Clone an element and all of its descendants with cloneNode()
- `appendChild()` - adds a Node after the last child of a specified parent node. It only accepts one argument of a Node but not DOMstring or text - adds a node to the list of child nodes of a parent node - use in conjuction with `createElement` and `textContent` - you can only append one node -
- Syntax: `appendChild(aChild);` | `aChild` the child to append to the given parent node

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

#### 3 Removing a DOM element

- `remove()` - apply the remove method to a DOM element and it will be removed from existence in the DOM. But the element is still in memory in JavaScript after the removal. So you can still bring it back
- `removeChild()` - removes a node’s child items
- `removeAttribute()` -You can entirely remove an attribute from a DOM element by applying the removeAttribute element to it and passing in the attribute name

#### 4 Setting and Modifying the content inside elements

- `innerHTML()` - render string content to the DOM as HTML - be careful when using it in conjunction with user-generated content or data from a non-secure source - using innerHTML erases all existing content from within an element. If you want to get the existing HTML content before setting new content, apply innerHTML without setting any new content - retrieves or writes HTML or XML markup contained within the element - retrieve and set an element’s HTML content
- Syntax: `const content = element.innerHTML; element.innerHTML = content;`
- injecting js via an input field: `<img src onerror="alert("You suck!")">`
- `innerText()` - A first approach to setting the content of an element to some text is to use the innerText method - This preserves any string formatting, e.g. `a multi-line string will be rendered to the DOM across multiple lines`!!!
- HTMLElement.innerText is a property that represents the rendered text content of a node and its descendants. It returns the text content that is displayed on the screen
- `textContent` - Get and set the text content of a node with textContent - The second approach to setting the text inside an element is to apply the textContent method - This is not sensitive to formatting like innerText. This makes it ideal for extracting text from within an element while ignoring any element tags - The textContent property of a Node can be used to retrieve or write text inside a Node - textContent gets the content of all elements including `<script>` and `<style>` elements. It returns every element in a Node. It can return “hidden” elements (elements having display none) since it does not take CSS Styles into account

innerText vs. textContent: textContent can handle hidden items but does not maintain spacing, while innerText does the opposite - maintains spacing but does not see hidden elements

```js
let div = document.createElement('div');
div.textContent = "Hello, I'm new here."; // or
div.innerText = "Hello, I'm new here.";
```

```js
// innerHTML example
div.innerText = '<strong>Hello</strong';
// Do this instead
const strong = document.createElement('strong');
strong.innerText('Hello');
div.append(strong);
```

Here is what I have in my JavaScript Weather App:

```js
const dailyData = document.getElementById('daily-data');
const hourlyData = document.getElementById('hourly-data');
const weatherAlerts = document.getElementById('weather-alerts');

const dailyText = document.createElement('li');
dailyText.classList.add('daily-data');
dailyData.insertAdjacentHTML('beforeend', dayOutput);
// dayOutput is a template string with html tags and content

const hourlyText = document.createElement('li');
hourlyText.classList.add('hourly-data');
hourlyData.insertAdjacentHTML('beforeend', hrOutput);
// hrOutput same as dayOutput

const alertText = document.createElement('li');
alertText.classList.add('alert-data');
weatherAlerts.insertAdjacentHTML('beforeend', alertOutput);
// alertOutput same as dayOutput and hrOutput, e.g.:
const alertOutput = `
  <li>Precip. %: ${senderName}</li>
  <li>Precip. %: ${alertEvent}</li>
  <li>Precip. %: ${eventStart}</li>
  <li>Precip. %: ${eventEnd}</li>
  <li>Precip. %: ${eventDesc}</li>
  <li>Precip. %: ${tags}</li>
  `;
// Think I messed up createElement should be a ul tag, and that should be inside a div with an id of daily-data or whatever
// NO, THIS IS ALL MESSED UP
```

> Try this:
>
> 1. getElementById or querySelector or other selector >
> 2. variable with a template string for html, classes and tags
> 3. insertAdjacentHTML('beforeend', varName)

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

#### 5 Editing element attributes

- `setAttribute()` - The attribute of any element can be set using the setAttribute method - setAttribute can be applied to any element
- As a first argument, it accepts the name of the element to be modified.
- If the attribute does not exist already, using setAttribute creates it.
- As a second argument, it accepts the new value of the attribute
- the use of setAttribute will overwrite any existing value of an element.
- You can use element.`getAttribute()` to return the existing value of an element althoughit is unneccessary
- Syntax: `element.setAttribute("attr", "new value")` or you can just do `element.id = "myElement"` or `.title`, `.classList`, etc although for classes you should use `classList.add()`
- `classList.(add/remove/toggle/contains/replace)` - To add, remove and toggle values on an element's class attribute apply the `classList.add()`, `classList.remove()` or `classList.toggle()` to the element use `classList.contains()` to check an elements has a class - use `classList.replace()` to replace an existing class with a new class
- add(), remove(), replace(), and toggle() methods and also contains()
- `removeAttribute()` - You can entirely remove an attribute from a DOM element by applying the removeAttribute element to it and passing in the attribute name
- `replaceChild()` - replaces an existing child element with a new one

#### 6 Also

- `parentElement`, `childNodes`, `firstChild`, `lastChild`, `children`, `firstElementChild`, `lastElementChild`, `previousSibling`, `nextSibling`
- getAttribute(), setAttribute(), Element.dataset, Element.classList (with add(), contains(), remove(), replace(), toggle()), .style(), and getComputedStyle(Element)
- data attributes: e.g. `<p data-test="this is a test">Hello</p>`, `element.dataset` returns `test: "this is a test"` - you can get the dataset name abd value or use `=` to create a data attribute -

### Terms

- **HTML Collection** - in simple terms, an HTML Collection is an array-like object that holds HTML elements extracted from a document. An HTML Collection can contain only Element Nodes.
- **NodeList** - It's a collection of nodes. It is similar to an HTML Collection but it can contain all type of nodes (Element, Text and Attribute) not only Element Nodes.
- **Live HTMLCollection** - The collection updates when the DOM updates.
- **Static HTML Collection** - If the DOM updates, the changes are not reflected in the collection.
- **Live NodeList** - The collection updates when the DOM updates.
- **Static NodeList** - If the DOM updates, the changes are not reflected in the collection.

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

---

[Manipulating the DOM using Javascript](https://dev.to/arikaturika/manipulating-the-dom-using-javascript-how-to-select-nodes-part-1-38j)

- after the browser downloads the HTML document, it converts its content into a tree like structure called the DOM (Document Object Model) and stores it in its memory

**IMPORTANT**: The DOM is one of the multiple web APIs built into web browsers and it has been created to be independent of any language - if you want interactivity, you will probably need to work with the DOM (some of the same interactivity Javascript offers can be achieved using CSS)

Live DOM Viewer: https://software.hixie.ch/utilities/js/live-dom-viewer/

The DOM tree is made out of nodes. Some nodes represent HTML elements (HTML, HEAD, BODY, SECTION etc) and other represent text (the ones represented as #text).

Based on its position in the tree, a node can be a:

- **Root node**: This is the top node of the tree, which in the case of HTML is the HTML node.
- **Parent node**: A node which has other node(s) inside it. For example, BODY is the parent node of all nodes inside it.
- **Child node**: A node directly inside another node. In our example, the H1 node is the child of the SECTION node.
- **Sibling nodes**: These are nodes that are found on the same level in the DOM. H1, H4, P and IMG nodes are all siblings since they are on the same level inside the SECTION node.
- **Descendant node**: This is a node that can be found anywhere inside another node. H4 is for example the descendant node of the BODY.

**MANIPULATING THE DOM**: we can change the nodes in the tree making use of APIs that can control the HTML and the styling of a page. Each node has its own properties and methods that can be manipulated using Javascript

All the properties, methods and events available for manipulating and creating web pages are organized into objects that we're going to call interfaces. There are many DOM interfaces working together but the ones that we're going to use most often are `Window` and `Document`

- Window - The Window interface represents a window containing a DOM document (an open window in a browser). It holds the highest position in the DOM hierarchy, as it is a parent of the Document object and all its children .
- Document - The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

## 1 TARGETING NODES

[A guide to manipulating the DOM](https://openjavascript.info/2022/03/16/a-guide-to-dom-manipulation-with-javascript/)

> Got a lot of good notes from the link above

Later maybe:

- [Up your DOM manipulation game through these Exercises](https://medium.com/nerd-for-tech/up-your-dom-manipulation-game-through-these-exercises-part-01-103864ac8b0b)
- [How to Modify the DOM with JavaScript](https://www.linode.com/docs/guides/javascript-dom-manipulation/)
- [Odin: DOM Manipulation And Events](https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events)
- [FCC: JavaScript DOM Manipulation Course](https://www.freecodecamp.org/news/javascript-dom-manipulation/) - link to YouTube video

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## 17 DOM Manipulation Methods

[17 Most Important DOM Manipulation Methods in JavaScript](https://codevoweb.com/important-dom-manipulation-methods-in-javascript/)

- frameworks like React Js and Vue Js use virtual DOM to manipulate the Real DOM, whereas Angular Js or Angular also uses incremental DOM to manipulate the Real DOM
- Manipulating the Real DOM is a lot slower than most JavaScript operations
- To address this problem Angular Js, Vue Js, and React Js popularize something called Virtual DOM and Incremental DOM
- Manipulating the Virtual DOM or Incremental DOM is much faster since nothing gets drawn on the screen

### The DOM

- an application programming interface that allows us to create, add, modify and remove elements from the document
- Every page you see in a browser window can be considered as an object. A Document object represents the HTML document that is displayed in that browser window
- **The way a document’s content is accessed and modified is called the DOM**
- the DOM defines the logical structure of a document and the way a document can be accessed and manipulated

### Creating Elements in the DOM

`createElement()`

The createElement() method creates a new HTML element within the DOM. The return value is the newly created element.

Syntax: `document.createElement(tagName[, options])`

- `tagName`: A string that specifies the type of HTML element to be created. It can be any of the HTML tags you know about.
- `options`: An optional parameter that enables us to set an “is” attribute when adding an element.

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Adding Elements to the DOM

1. `createTextNode()`

The createTextNode() method creates a new text node. This method can be used to escape HTML characters.

Syntax: `let text = document.createTextNode(data);`

- `text`: is a text node
- `data`: a string containing the content to be put in the text node.

1. `Node.textContent`

The textContent property of a Node can be used to retrieve or write text inside a Node.

textContent gets the content of all elements including `<script>` and `<style>` elements. It returns every element in a Node. It can return “hidden” elements (elements having display none) since it does not take CSS Styles into account.

`HTMLElement.innerText`

HTMLElement.innerText is a property that represents the rendered text content of a node and its descendants. It returns the text content that is displayed on the screen.

```js
let div = document.createElement('div');
div.textContent = "Hello, I'm new here."; // or
div.innerText = "Hello, I'm new here.";
```

`append()`

The append() method inserts a set of elements or texts after the last child of the Element.

Syntax: `append(...nodesorDOMStrings)`

`appendChild()`

The appendChild() method adds a Node after the last child of a specified parent node. It only accepts one argument of a Node but not DOMstring or text.

Syntax: `appendChild(aChild);` | `aChild` the child to append to the given parent node

`innerHTML`

The Element property innerHTML retrieves or writes HTML or XML markup contained within the element.

Syntax: `const content = element.innerHTML; element.innerHTML = content;`

Think this article sucks - the rest are Node.insertBefore(), insertAdjacentHTML(),

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Modifying Data Attibutes in the DOM

- getAttribute(), setAttribute(), Element.dataset, Element.classList (with add(), contains(), remove(), replace(), toggle()),

### Removing Elements from the DOM

- remove(), removeChild(),
- [9 Must Know JavaScript DOM Traversal Methods](https://codevoweb.com/9-javascript-dom-traversal-methods/)

## HTMLElement

Instance properties:

- accessKey, accessKeyLabel, contentEditable, Non-standardDeprecated, dataset, dir, enterKeyHint, hidden, inert, innerText, inputMode, isContentEditable, lang, nonce, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, outerText, style, tabIndex, title

Instance methods:

- attachInternals(), blur(), click(), focus()

Events:

- beforeinput, change, copy, cut, drag, dragend, dragenter, dragleave, dragover, dragstart, drop, input, paste

Inheritance:

- Element, Node, EventTarget

## important JS properties and methods

> These notes are from `Documents/computer/misc.md`

- `classList`, `className`, `innerText`, `textContent`, `innerHTML`, `value`, `src`, `href`, `parentElement`, `children`, `nextSibling`, `previousSibling`, `style`
- `getAttribute()`, `setAttribute()`, `appendChild()`, `append()`, `prepend()`, `removeChild()`, `remove()`, `delete()`, `createElement()`,
- `innerText` and `textContent` - getting the text from an element -
- inner`Text: gives you the text that is in between the tag you selected, all of the text even the li text elements inside a ul
- for the body element you can use `querySelector` or something else but it has it's own property: `document.body.innerText` gets all the text on the page.
- `textContent`: gets all the text between the tags but outputs it as it is seen in the DOM - with indents and the like and it will also show hiddent content
- you probably only ever want to use `innerText` but `textContent` is faster but not by a lot - both will overwrite any text that is in the html if you use them to set the text
- `innerHTML`: returns/retrieves the text inside an element but also all the tags inside the element - I used this with `+=` and maybe with ul > li tags
- `value`, `src`, `href`, and more:

<div align="right"><a href="#back-to-top" title="Table of Contents">Back to Top</a></div>
