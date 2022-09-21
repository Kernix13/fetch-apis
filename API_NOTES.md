# Free API Notes no Auth Key Required

A breakdown for each api with the endpoints and any other params needed

## 1 Cat Facts

1. [Dailt cat facts](https://alexwohlbruck.github.io/cat-facts/docs/)
   1. Base url = `https://cat-fact.herokuapp.com` |
   1. Endpoint = `/facts` |
   1. Endpoint = `/users` | Requires authentication
   1. [GitHub Link](https://github.com/alexwohlbruck/cat-facts)

**ERROR**:

> GET https://cat-fact.herokuapp.com/facts net::ERR_FAILED 503

> Access to fetch at 'https://cat-fact.herokuapp.com/facts' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

Here is the code I used:

```js
async function fetchMeowFacts(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>${data.data.length} Cat Facts</h3>`;
      data.data.forEach(text => {
        textBlock += `
        <p>${text}</p>
        `;
      });
      randomOutput.innerHTML = textBlock;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchMeowFacts("https://cat-fact.herokuapp.com", "/facts");
```

There is a base url link below but with a different end parameter that works - AND - a different GitHub link??? This one is all messed up!

## 2 Dog Facts

1. [Dog Facts](https://kinduff.github.io/dog-api/) | [Dog Facts on GitHub](https://github.com/kinduff/dog-api) |
   1. Base url = `http://dog-api.kinduff.com` |
   1. Path = `/api/facts` |
   1. Param = `?number=5` |

**ERROR**:

> Access to fetch at 'http://dog-api.kinduff.com/api/facts?number=5' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

> GET http://dog-api.kinduff.com/api/facts?number=5 net::ERR_FAILED 301

Here is the code I used:

```js
const url = "";

async function dogFacts(url, cat, subcat) {
  try {
    const response = await fetch(`${url}${cat}${subcat}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log("Not sucessful");
    }
  } catch (err) {
    console.error(err);
  }
}
dogFacts("http://dog-api.kinduff.com", "/api/facts", "?number=5");
```

## 3. Dog CEO

1. [Dog CEO](https://dog.ceo/dog-api/) |
   1. Base URL = `https://dog.ceo/dog-api/` |
   1. Parameters: `breeds/list/all` | `breeds/image/random` | by breed `breed/hound/images` | by sub-breed `breed/hound/list` |
   1. options examples: `breed/hound/images` | `breed/hound/list` |
   1. Browse breed list example: `https://dog.ceo/api/breed/${breedName}/images/random`
   1. JSon in `message`

**WORKED!**

Used the following code to output the 1st four images because there are a 1000 images. I would have to add that option as a parameter. Here is the code I used:

```js
async function dogCeo(url, cat, subcat) {
  try {
    const response = await fetch(`${url}${cat}${subcat}`);

    if (response.ok) {
      const data = await response.json();

      let imagesBlock = `<h3>${cat.toUpperCase().slice(1)} IMAGES</h3>`;
      data.message.slice(0, 4).forEach(image => {
        imagesBlock += `
        <img src="${image}" />
        `;
      });
      randomOutput.innerHTML = imagesBlock;
      // return data;
    } else {
      console.log("Not sucessful");
    }
  } catch (err) {
    console.error(err);
  }
}
dogCeo("https://dog.ceo/api/breed", "/hound", "/images");
```

Another issue is that `data` is an array inside the object `message`.

## MeowFacts

1. [MeowFacts](https://github.com/wh-iterabb-it/meowfacts) |
   1. Base URL = `https://meowfacts.herokuapp.com/` |
   1. Params example for 3 facts = `?count=3`, specific fact = `?id=3` |
   1. Array in `data`

**WORKS!**

Hard coded the # of facts and the response is in an object named `data` with the text fields in an array. Here is the code I used:

```js
const randomOutput = document.getElementById("random-output");

async function fetchMeowFacts(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    if (response.ok) {
      const data = await response.json();
      let textBlock = `<h3>${data.data.length} Cat Facts</h3>`;
      data.data.forEach(text => {
        textBlock += `
        <p>${text}</p>
        `;
      });
      randomOutput.innerHTML = textBlock;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchMeowFacts("https://meowfacts.herokuapp.com/", "?count=3");
```

## PlaceBear and PlaceDog

1. [PlaceBear](https://placebear.com/) |
   1. Base URL = `https://placebear.com/` |
   1. Params are width and height: `200/300` or `g/200/300`, no clue what the `g` is for.
1. [PlaceDog](https://place.dog/) |
   1. Base URL = `https://place.dog/` |
   1. Params are width and height: `200/300`

**EERROR**:

> Access to fetch at 'https://placebear.com/200/300' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

> GET https://placebear.com/200/300 net::ERR_FAILED 200

> GET https://place.dog/200/300 net::ERR_FAILED 200

Here is the code I used:

```js
// PlaceBear
async function fetchPlaceBear(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceBear("https://placebear.com/", "200/300");
// PlaceDog
async function fetchPlaceDog(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceDog("https://place.dog/", "200/300");
```

## PlacKitten

1. [PlacKitten](https://placekitten.com/) |
   1. Base URL = `https://placekitten.com/` |
   1. Params are width and height: `200/300` or `g/200/300`, no clue what the `g` is for.

**WORKS!** Here is the code I used:

```js
async function fetchPlaceKitten(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.blob();
      console.log(data); // Blob
      document.getElementById("fetch-image").src = URL.createObjectURL(data);
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceKitten("https://placekitten.com/", "g/200/300");
```

## Zoo Animals

1. [Zoo Animals](https://zoo-animal-api.herokuapp.com/) |
   1. Base URL = `https://zoo-animal-api.herokuapp.com/` |
   1. Params = `animals/rand` or `animals/rand/{number}` where number is from 1 to 10

WORKS!

Single random object with 10+ properties. Here is the code I used:

```js
async function fetchZooAnimals(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>Random Zoo Animal</h3>`;
      textBlock += `
        <p>${name}</p>
        <p>${response.latin_name}</p>
        `;

      randomOutput.innerHTML = textBlock;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchZooAnimals("https://zoo-animal-api.herokuapp.com/", "animals/rand");
```

Can't get the data onto the page for some reason?

---

### Working Animals

1. Dog CEO, 2) MeowFacts, 3) PlacKitten, 4) Zoo Animals

1) Dog CEO - 1000's of image src strings inside `mesage`as an array
1) MeowFacts - Set number of text strings inside `data` as an array
1) Zoo Animals - a single object with props

I could never account for all the diff prop names

---

## Gutendex

1. [Gutendex](https://gutendex.com/) |

# Auth Key Required Free APIS
