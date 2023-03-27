# Notes on the Fetch API

> What is `new Error()`?

- an alternative to XMLHttpRequest
- also better than Callbacks and Promises

<div id="back-to-top"></div>

## Table of Contents

1. [JSON and promises](#json-and-promises)
1. [Async Await](#Async-Await)
1. [Notes from Net Ninja Async playlist](#notes-from-net-ninja-async-playlist)
1. [Async and Await and throwing errors](#async-and-await-and-throwing-errors)
1. [Search results](#search-results)
   1. [Refactoring Fetch to Async Await](#refactoring-fetch-to-async-await)
1. [My notes](#my-notes)
1. [Fetch API Introduction by Brad Traversy](#fetch-api-introduction-by-brad-traversy)
1. [Notes From Web Dev Simplified](#notes-from-web-dev-simplified)
1. [Notes From codeSTACKr](#notes-from-codestackr)
1. [Notes From LearnWebCode](#notes-from-learnwebcode)
1. [Notes From The Coding Train](#notes-from-the-coding-train)
   1. [Working With Data & APIs in JavaScript](#working-with-data-&-apis-in-javascript)
   1. [Graphing with Chartjs](#graphing-with-chartjs)
   1. [JSON](#json)
   1. [Mapping Geolocation with Leafletjs](#mapping-geolocation-with-leafletjs)
   1. [Refreshing Data with setInterval](#refreshing-data-with-setinterval)
   1. [Server-side with Nodejs](#server-side-with-nodejs)
1. [Async function](#async-function)
   1. [Syntax](#syntax)
1. [Response json method](#response-json-method)
1. [FINAL FETCH AND SIMILIAR METHODS](#final-fetch-and-similiar-methods)
   1. [Example using headers](#example-using-headers)

## JSON and promises

- use `JSON.parse()` to convert the string into JS Objects
- all keys need to be in double quotes
- `boolean`, `numbers`, and `null` do not need to be in double-quotes
- the return of a new Promise is either `resolve` (got data) or `reject` (error)
- a Promise takes a function where you do a network request, you fetch something -
- a Promise automatically gives 2 parameters - resolve, and reject: they are built into the Promise API
- if you get data back you call the resolve() Fx and pass in data - if there's an error you call reject() and pass in the error
- when you call the Fx that returns the promise, it returns a promise
- so you need to tack on the `.then()` method which takes a Fx
- use `.catch() `for the error
- `.then()` is for resolve, `.catch()` is for reject
- look in the console under `prototype` and see the method `json` - use that method on the response object which gets the data
- `response.json()` parses the data like `JSON.parse()`- but it returns a promise

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Async Await

- they allow you to chain promises together easier
- use `async` before the function and `await` keyword inside to chained promises together -
- whenever you call an async Fx it always returns a promise -
- when you use fetch you need to use the `.json()` method on the response to get the data
- but remember the json method returns a promise so we need to await that as well:

## Notes from Net Ninja Async playlist

- Video #5-8: JSON is a string - `console.log(request.responseText)` to see that
- use `JSON.parse()` to convert the string into JS Objects
- you don't need to put a `.json` file in strings b\c the extension implies that
- all keys need to be in double quotes
- boolean, numbers, and null do not need to be in double-quotes, neither do the brackets for objects {} and arrays []
- get data from 1 API to be used to get data from another API -
- That leads to **callback hell**: nesting callback, withing callback, within callbact, ...
- Promises solves that problem - the return of a new Promise is either `resolve` (got data) or `reject` (error) -
- a Promise takes a function where you do a network request, you fetch something -
- a Promise automatically gives 2 parameters - resolve, and reject: they are built into the Promise API
- if you get data back you call the resolve() Fx and pass in data - if there's an error you call reject() and pass in the error
- and that is all there is to it -
- when you call the Fx that returns the promise, it returns a promise
- so you need to tack on the `.then()` method which takes a Fx
- use `.catch() `for the error
- `.then()` is for resolve, `.catch()` is for reject

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Async and Await and throwing errors

- they allow you to chain promises together easier
- use `async` before the function and `await` keyword inside to chained promises together -
- whenever you call an async Fx it always returns a promise -
- when you use fetch you need to use the `.json()` method on the response to get the data
- but remember the json method returns a promise so we need to await that as well

> Search for converting .then() to asyn await

## Search results

`.then(response => console.log(response))`
vs
`const response = await fetch(...)`
The response object returned by await fetch supports multiple functions for different data formats: response.json, response.text, response.blob

`.then(response => console.log(response))`
vs
`const response = await fetch(...)`
`const data = await response.json()`

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Refactoring Fetch to Async Await

```js
// Basic fetch
const getUser = name => {
  fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(data => console.log(data));
};
// convert to async await
const getUser = async name => {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = await response.json();
  return data;
};

//get user data
getUser('yourUsernameHere').then(console.log(data));
```

More links: **https://javascript.plainenglish.io/refactoring-promise-chains-w-async-await-d126c7fac3a8**: has a promise lifecycle image | https://bonsaiilabs.com/js-fetch-async-await/ has a 42 min video | https://dev.to/jasonmeidev/refactoring-es6-fetch-with-async-await-4i31 - very short | https://betterprogramming.pub/promises-with-async-await-605645a6c0e8 - also very good |

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## My notes

pass parameters or not but then

1. create an async fx
1. if connected to an on page event console.log "working"
1. add a try catch
1. inside the try block add the response line to await the fetch
1. below that add the if statement for response.ok and inside add the data to await the response and what you want with the data
1. else block for not successful
1. then the catch block

## Fetch API Introduction by Brad Traversy

Old video: Aug 31, 2017

- create `sample.txt` - refactored it to use try/catch and async/await
- create `users.json` -

data.forEach for json file

1. similar to sample.txt but declare an output variable with `let`
1. add data.forEach
1. append onto that variable with `+=` inside the forEach using template strings
1. we need a ul > li since we have an array of objects with 3 values we want to output

get data from an api - jsonplaceholder

1. similar to the `getUSers` but change ul/li to h3/p

create a form to make a post request to the API

1. we need an event listener for our form but change the event from "click" to "submit" - pass e as a parm to the addPost Fx and do the prevent default thing
1. we need to get the values from the title and body fields
1. the fetch method takes a 2nd param which is an object - method, headers, and body - the Accept is interesting
1. for `body`, need to use `JSON.stringify()`(converts a JavaScript value to a JSON string) - not working, getting `POST 500` error code which implies a server error -

> Status Code: 500 Internal Server Error

> Description: The server encountered an unexpected condition that prevented it from fulfilling the request.

I did shorthand for the obj in JSON.stringify - now getting `ReferenceError: result is not defined at HTMLFormElement.addPost` and the code is 201: `201 Created Indicates that the request has succeeded and a new resource has been created as a result.` DUH, had `result.json()` instead of `response`

- [MDN Supplying request options](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options): The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings
- also check [MDN fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
- the 2nd argument is called `options` and can have `method`, `headers`, `body`, mode, credentials, cache, redirect, referrer, referrerPolicy, integrity, keepalive, and signal.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Notes From Web Dev Simplified

Video: Learn Fetch API In 6 Minutes

- fetch syntax: `fetch(a, {options})` where `a` is a URL and `{options}` is optional and you would put `put` or something else - skip `options` for now
- to see t hat it is a promise do `console.log(fetch(url))` though that is academic
- console log the response - but `body` is not accessible without using `.json()` on it
- add an `if` statement with `response.ok` although you could also do `response.status === 200` but that may fail
- when you want to do other than `GET`:
- JSON.stringify() -???

## Notes From codeSTACKr

Video: Fetch API Explained - Working with Data & APIs in JavaScript

- `response.blob()`, `response.json()`, and `response.text()` are common
- `createElement('img')`, `URL.createObjectURL(blob)`, `appendChild()`
- you always want to do error handling when working with promises - `throw "error message"` somehow throws an error is you use `.catch(error => {console.error(err))}`
- _a lot of new code so maybe skip this_ - here is a POST request:

```js
const createNewPost = post => {
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  };
  // more code here
};
```

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Notes From LearnWebCode

Video: Dogs, JavaScript & An API 🐶 Fetch, Promises & Async Await

- File names: index10.html, style10.css, script10.js
- No notes on fetch in my notes???

Video: API: CORS, SPA / client-side routing

- not sure about this video

## Notes From The Coding Train

From YT channel The Coding TRain and the playlist is the _Working with data and apis in javascript_: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X

**Video: 1.1: fetch() - Working With Data & APIs in JavaScript**

- https://github.com/CodingTrain/Intro-to-Data-APIs-JS - also 1.4, 1.5, 1.6, 2.1-2.7, 3.1-3.5

- steps: 1) call the fetch Fx, 2) deal w\ response and the promise, 3) data stream which is in the response body, 4) manipulate the DOM with the data from 3
- he is using `.then()` for the response - he is also using `URL.createObjectURL`
- need to handle errors - need to incorporate `async await`

```html
<img src="" id="fetch-image" />
```

```js
async function getRainbow(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  document.getElementById('fetch-image').src = URL.createObjectURL(blob);
}

getRainbow('https://unsplash.it/300/200');
```

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Working With Data & APIs in JavaScript

He wants to fetch a `*.csv` file rom NASA titled "Combined Land-Surface Air and Sea-Surface Temperature Anomalies (Land-Ocean TEmperature Index, LOTI)" - that is no longer there. Go to https://data.giss.nasa.gov/gistemp/, scroll to "Tables of Global and Hemispheric Monthly Means and Zonal Annual Means", and d\l the csv for "Zonal annual means". He has another link:

- he saved as test.csv with 3 rows for testing -
- fetch response methods: text, blob, and json most common - also good is error, and redirect
- there are js libraries that will parse the data for you, in this case figure out the columns, rows and data via the commas: D3.js is for data viz and has a parser in it, p5.js has a loadTable() Fx which will parse the csv for you, and many others
- but the data is simple enough to parse the data manually using `str.split()`
- we need to split up all the rows, then split each row into columns
- a line break or new line (`\n`) will be the first delimiter for the rows, then a comma (`,`) for each piece of data within each row -

> I would have never thought of using `\n` because how would I know that was in there? Why not `\r` for carriage return? And how would I read a file to see what is being used? Is there a way to view hidden chars? RegEx?

- so you can use `data.split("\n")` or a RegEx `data.split(/\n/)`
- he says we don't need the 1sr row, the header row with titles and an index of 0 - use `.slice(1)`
- he also only needs the 1st two columns, the year and the Glob number, so
- added .trim in front of .split to remove the line at the end
- But what if the data has commas in it?

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Graphing with Chartjs

Charts: 1) Canvas API, 2) D3.js, 3) p5.js, 4) Chart.js

- Chart.js: use a CDN to import it - jsdeliver - https://www.chartjs.org/docs/latest/ | https://www.chartjs.org/docs/latest/getting-started/ |
- need a canvas tag in the html -

> SKIP

### JSON

- ISS API and use Leaflet to map it's location - you could also use Google Maps or MapBox
- get lat & long and plot it on a map
- https://wheretheiss.at/ and https://wheretheiss.at/w/developer

More JSON

- https://api.wheretheiss.at/v1/satellites
- id: 25544
- https://api.wheretheiss.at/v1/satellites/25544

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Mapping Geolocation with Leafletjs

- go to the quick start guide - https://leafletjs.com/examples/quick-start/ or the docs https://leafletjs.com/reference.html
- get the link, script and div tags and the css
- I'm not getting the fucking map - he has an img to use as an icom for the marker -
- there is a shitton of markup but no map

### Refreshing Data with setInterval

- last video did not go well
- how to have the lat and long update without having to reload the page -
- also, have the marker load in the center of the map and zoomed in more - use setView in the fetch Fx
- to update use the `setInterval` fx -
- add toFixed() to the lat and long textContent values to decrease the number of decimal places

```js
// syntax
setInterval(functionName, intervalAmount);
setInterval(fetchISSLocation, 1000);
```

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Server-side with Nodejs

- just watched then
- video: 2.2 Geolocation Web API - just watched then
- video: 2.3 HTTP Post Request with fetch()
- video: 2.4 Saving to a Database
- video: 2.5 Database Query
- video: 2.6 Saving Images and Base64 Encoding
- video: 2.7 Project Wrap-up: Accessibility and Design

https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X

## Async function

From [MDN async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):

> An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

### Syntax

I'm defining the url and other endpoint parameters as params and grouping similar APIs in the various types. Currently I have the following Fetch functions defined:

1. Endpoint URL only (`fetchByUrl`)
1. Endpoint URL with single type parameter (`fetchByType`)
1. Endpoint URL with 3 parameters (`fetchByParams`)

Here is the basic structure I have right now for each function in the scripts file:

```js
async function name(...params) {
  try {
    // await the fetch request
    const result = await fetch(...params);
    // await the response from the fetch request
    const data = await result.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

I have no interest in using `Promise` or `.then()`.

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

## Response json method

From [MDN Response.json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json):

> The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

From [MDN Response](https://developer.mozilla.org/en-US/docs/Web/API/Response):

> The Response interface of the Fetch API represents the response to a request

## FINAL FETCH AND SIMILIAR METHODS

```js
// GEt ul id's deom index.html
const results = document.getElementById('results'); // xhr
const results1 = document.getElementById('results1'); // xhr II
const results2 = document.getElementById('results2'); // new Promise (N/A)
const results3 = document.getElementById('results3'); // fetch with .then
const results4 = document.getElementById('results4'); // fetch async await
const results5 = document.getElementById('results5'); // arrow fetch async await
const results6 = document.getElementById('results6'); // axios with .then
const results7 = document.getElementById('results7'); // axios async await

/* XMLHttpRequest, I do not have any error handling for this method */
// this does not return a promise
const xhr = new XMLHttpRequest(); // 1. initialize xhr http request obj

// 2. call the open(type, url or file) method first (1st CB)
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// 3. 2nd CB if there is an error - do I need this?
xhr.onerror = err => console.log(err);

// 4. create an event handler for an event called onreadystatechange
xhr.onreadystatechange = function () {
  // norris.js has a nested if block alternative
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    data.forEach(user => {
      const li = document.createElement('li');
      const liText = document.createTextNode(user.name);
      li.append(liText);
      results.append(li);
    });
  }
};
xhr.send(); // 5. use the send() method to send the request
// 6. & 7. What about xhr.setRequestHeader(a, b) and xhr.onload?
// MDN example may be better than Brad's: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest

/* Fetch API with .then() */
// Look into Promise.resolve(data) maybe with
function getUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response);
        throw new Error(`Status Code Error: ${response.status}`);
      }
    })
    .then(data => {
      data.forEach(user => {
        const li = document.createElement('li');
        const liText = document.createTextNode(user.name);
        li.append(liText);
        results3.append(li);
      });
    })
    .catch(error => console.log(error));
}
getUsers();

/* Fetch API async/await */
async function getUsers2() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const data = await response.json();

      data.forEach(user => {
        const li = document.createElement('li');
        const liText = document.createTextNode(user.name);
        li.append(liText);
        results4.append(li);
      });
    } else {
      console.log('Not successful');
    }
  } catch (error) {
    console.log(error);
  }
}
getUsers2();

/* Fetch API async/await () => version */
const getUsers3 = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      const data = await response.json();

      data.forEach(user => {
        const li = document.createElement('li');
        const liText = document.createTextNode(user.name);
        li.append(liText);
        results5.append(li);
      });
      return data;
    } else {
      console.log('Not successful');
    }
  } catch (error) {
    console.log(error);
  }
};
getUsers3();

/* Axios .then using .get() for a GET request */
// in the console try axios.get('https://everyguitarchord.com/chord-intervals.json')
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (response.status === 200) {
      const data = response.data;

      data.forEach(user => {
        const li = document.createElement('li');
        const liText = document.createTextNode(user.name);
        li.append(liText);
        results6.append(li);
      });
    } else {
      console.log('Not successful');
    }
  })
  .catch(function (error) {
    console.log(error);
  });

/* Axios async await */
async function getUser4() {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    if (response.status === 200) {
      const data = response.data;
      data.forEach(user => {
        const li = document.createElement('li');
        const liText = document.createTextNode(user.name);
        li.append(liText);
        results7.append(li);
      });
    } else {
      console.log('Not successful');
    }
  } catch (error) {
    console.error(error);
  }
}
getUser4();

/* can't use new Promise with a public API  */
// No clue how to use it with an API endpoint
// I only see setTimeout() used with new Promise() - WTF?

/* XMLHttpRequest II from Steele lesson 292 */
const xhr2 = new XMLHttpRequest(); // 1. initialize xhr http request obj
// Need 2 event handler callbacks: 1. onload, 2. and onerror
xhr2.onload = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this);
    const data = JSON.parse(this.responseText);
    data.forEach(user => {
      const li = document.createElement('li');
      const liText = document.createTextNode(user.name);
      li.append(liText);
      results1.append(li);
    });
  }
};
xhr2.onerror = function () {
  console.log('Eroor');
  console.log(this);
};
xhr2.open('GET', 'https://jsonplaceholder.typicode.com/users'); // open the request
xhr2.send(); // send the request
```

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>

### Example using headers

```js
const btn = document.querySelector('button');
const p = document.getElementById('joke');

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    const response = await axios.get('https://icanhazdadjoke.com/', config);
    return response.data.joke;
  } catch (error) {
    console.log(error);
    return 'No jokes available.';
  }
};

async function appendJoke() {
  const jokeText = await getDadJoke();
  p.innerText = '';
  const joke = document.createTextNode(jokeText);
  p.append(joke);
}

btn.addEventListener('click', appendJoke);
```

<div align="right">&#8673; <a href="#back-to-top" title="Table of Contents">Back to Top</a></div>
