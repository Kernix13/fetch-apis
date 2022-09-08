# Fetch and async await API

My notes and code examples for getting API data using async & await with the fetch API. I will add RESTful APIs including the WordPress REST API at a later date.

I have function programming code examples for the various type of endpoints. Right now I am using `console.log()` for the data I fetch:

> I love React for the ease of writing to the DOM, especially when you need to display lists!

## Fetch examples

Find APIs with simple (and **FREE**) endpoints, preferably without having to _sign-up_ or other requirements.

### Free APIS

1. github list: https://github.com/public-apis/public-apis
1. another list: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
1. https://jsonplaceholder.typicode.com/ - Types: /posts, /comments, /albums, /photos, /todos, /users
1. get your ip address - endpoint: https://api.ipify.org?format=json
1. random user - https://randomuser.me/
1. zip code info - `http://api.zippopotam.us/us/${zip_code}`
1. https://catfact.ninja/ - /fact, /facts, /breeds
1. HTTP Cats: https://http.cat/[status_code] see https://http.cat/?ref=apilist.fun
1. https://dog.ceo/dog-api/ - example endpoints:
   1. list all breeds: https://dog.ceo/api/breeds/list/all
   1. random image: https://dog.ceo/api/breeds/image/random
   1. by breed: https://dog.ceo/api/breed/hound/images
   1. by sub-breed: https://dog.ceo/api/breed/hound/list
   1. browse breed list: `https://dog.ceo/api/breed/${breedName}/images/random`
1. https://datausa.io/about/api/ - examples:
   1. https://datausa.io/api/data?drilldowns=Nation&measures=Population
   1. https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest
   1. https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest
1. Wayback Machine APIs: `http://archive.org/wayback/available?url=${example.com}`
1. Cocktail database: https://www.thecocktaildb.com/api.php - `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${margarita}` or by letter `${a}` or use ingredient `${vodka}`

## Async function

From [MDN async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function):

> An async function is a function declared with the async keyword, and the await keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

### Syntax

I'm defining the url and other endpoint parameters as params and grouping similar APIs in the various types.

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

## Response json method

From [MDN Response.json](https://developer.mozilla.org/en-US/docs/Web/API/Response/json):

> The json() method of the Response interface takes a Response stream and reads it to completion. It returns a promise which resolves with the result of parsing the body text as JSON.

From [MDN Response](https://developer.mozilla.org/en-US/docs/Web/API/Response):

> The Response interface of the Fetch API represents the response to a request
