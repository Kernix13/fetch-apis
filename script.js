/* 1. For simple url endpoints */

async function fetchByUrl(url) {
  try {
    // await the fetch request
    const result = await fetch(url);
    // await the response from the fetch request
    const data = await result.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchByUrl("https://randomuser.me/api/");
/* below is invalid api key 401 */
// fetchByUrl("https://odds.p.rapidapi.com/v4/sports");

/* 2. More common type endpoint as parameter */

async function fetchByType(url, type) {
  try {
    // await the fetch request
    const result = await fetch(`${url}${type}`);
    // await the response from the fetch request
    const data = await result.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
// fetchByType("https://jsonplaceholder.typicode.com/", "users/1");
// fetchByType("http://api.zippopotam.us/us/", "19064");
fetchByType("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", "vodka");
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

/* 3. With 2 variable endpoint parameters */

async function fetchByParam(url, cat, subcat) {
  try {
    // await the fetch request
    const result = await fetch(`${url}${cat}${subcat}`);
    // await the response from the fetch request
    const data = await result.json();

    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchByParam("https://dog.ceo/api/breed", "/hound", "/images");
