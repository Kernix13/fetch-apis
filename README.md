# Fetch and async await API

> Find APIs with simple (and **FREE**) endpoints, preferably without having to _sign-up_ or other requirements.

My notes and code examples for getting API data using async & await with the fetch API. I will add RESTful APIs including the WordPress REST API at a later date.

> I love React for the ease of writing to the DOM, especially when you need to display lists!

## Files

1. `index.html` and `script.js` have the code for most of the APIs
1. `fetch.html` and `fetch.js` are from a YouTube series
1. Both html files use a basic `style.css` sheet
1. Practice files: 1. `sample.txt`, 2. `users.json`, 3. `ZonAnn.Ts+dSST.csv`
1. `FETCH_NOTES.md`: notes of the Fetch API, Async/Await, and refactoring Fetch to Async/Await - from many sources
1. `api-md-files` - markdown files for different categories of APIs and the code I used
1. `THE_DOM.md` - notes on DOM manipulation

Main source is the [Public APIS repo on GitHub](https://github.com/public-apis/public-apis).

## Fetch Functions

I have 2 basic functions, though the second one can vary depending upon the endpoint options. The first takes a single parameter representing the URL endpoint:

```js
/* 1. For simple url endpoints */
async function fetchByUrl(url) {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // code for working with data here
      return data;
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
fetchByUrl('https://api.github.com/users/Kernix13');
```

A more common API has options for different endpoints, so the following function takes 2 parameters, 1 for the base URL and the 2nd for the endpoint options:

```js
/* 2. More common type: endpoint with 2nd parameter for an option */
async function fetchByType(baseUrl, value) {
  try {
    const response = await fetch(`${baseUrl}${value}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // code for working with data here
      return data;
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
fetchByType('http://api.zippopotam.us/us/', '19064');
```

Or this may be better plus a better error catching:

```js
const BASEURL = 'https://dummyjson.com';
async function customFetch(endpoint) {
  try {
    const response = await fetch(`${BASEURL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(response.status, response.statusText);
      console.log(response);
    }
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
customFetch(BASEURL, '/products');
```

And of course, you can add additonal parameters for more comples endpoints. This would work best for APIs that have a lot of options for their data. Here is a function with 3 parameters:

```js
/* 3. With 3 parameters */
async function fetchByParams(baseUrl, option1, option2, option3) {
  try {
    const response = await fetch(`${baseUrl}${optio1}${option2}${option3}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // code for working with data here
      return data;
    } else {
      console.log('Not sucessful');
    }
  } catch (err) {
    console.error(err);
    return err;
  }
}
fetchByParams('https://dog.ceo/api', '/breed', '/hound', '/images');
```

Look into `Promise.allSettled()` or just `allSettled()`.
