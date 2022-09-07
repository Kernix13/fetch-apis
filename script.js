// by final endpoint type
const fetchByType = async (url, type) => {
  try {
    // await the fetch request
    const res = await fetch(`${url}${type}`);
    // await the response from the fetch request
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
// fetchByType("https://jsonplaceholder.typicode.com/", "users/1");
// fetchByType("http://api.zippopotam.us/us/", "19064");
fetchByType("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", "tequila");
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// for specific url's / endpoints
const fetchByUrl = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
// fetchByUrl("https://randomuser.me/api/");
// fetchByUrl("https://odds.p.rapidapi.com/v4/sports");

// by endpoint parameter for specific endpoint url's
const fetchByParam = async (prefix, param, suffix) => {
  try {
    const res = await fetch(`${prefix}${param}${suffix}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
// fetchByParam("https://dog.ceo/api/breed", "/hound", "/images");

// NetNinja example:
const getUserDims = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  if (res.status !== 200) {
    throw new Error("Cannot fetch the data");
  }

  const data = await res.json();

  return data;
};
// getUserDims()
//   .then(data => console.log("Resolved:", data))
//   .catch(err => console.log("Rejected:", err));
