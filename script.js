/* 1. For simple url endpoints */

async function fetchByUrl(url) {
  try {
    // await the fetch request
    const response = await fetch(url);
    // await the response from the fetch request
    if (response.ok) {
      // console.log(response);
      const data = await response.json();
      console.log(data);
      return data;
      // data is an object for the zip code example, so I would need to do something with that, but for any data that is an array I would need to run an array method, but that is doubtful for a single endpoint API
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
// now random user isn't working - DDos attack since july
fetchByUrl("http://api.zippopotam.us/us/19064").then(data => {
  // alert(data["post code"]);
  console.log(data.places[0].latitude, data.places[0].longitude, data.places[0]["place name"]);
});
// console.log(fetchByUrl("http://api.zippopotam.us/us/19064"));
// fetchByUrl("https://randomuser.me/api/");
// console.log(fetchByUrl("https://randomuser.me/api/"));
/* below is invalid api key 401 */
// fetchByUrl("https://odds.p.rapidapi.com/v4/sports");
// function test(fx) {
//   const zip = fx["post code"];
//   return zip;
// }
// console.log(fetchByUrl("http://api.zippopotam.us/us/19064"));

/* 2. More common type: endpoint as parameter */

async function fetchByType(url, type) {
  try {
    // await the fetch request
    const response = await fetch(`${url}${type}`);
    // console.log(response);
    if (response.ok) {
      // await the response from the fetch request
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
// fetchByType("https://jsonplaceholder.typicode.com/", "users/1");
// fetchByType("http://api.zippopotam.us/us/", "19064");
fetchByType("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", "vodka");
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

/* 3. With 2 or more endpoint parameters */

async function fetchByParams(url, cat, subcat) {
  try {
    // await the fetch request
    const response = await fetch(`${url}${cat}${subcat}`);
    // console.log(response);
    if (response.ok) {
      // await the response from the fetch request
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Not sucessful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchByParams("https://dog.ceo/api/breed", "/hound", "/images");

// new one using .blob for an image and .then() to check the response
async function getImage(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  document.getElementById("fetch-image").src = URL.createObjectURL(blob);
}

getImage("https://unsplash.it/300/200")
  .then(response => {
    console.log("It Worked!");
  })
  .catch(error => {
    console.log("ERROR!");
    console.error(error);
  });
