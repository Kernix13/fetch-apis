# Animal APIs

| API               | Descr                   | HTTPS | CORS  | Type |
| :---------------- | :---------------------- | :---: | :---: | :--: |
| **BOOKS**         | -                       |   -   |   -   |  -   |
| 1. Cat Facts      | Daily cat facts         |  Yes  |  No   |  1   |
| 2. Dog Facts      | Random facts            |  Yes  | _Yes_ |  2   |
| 3. Dog CEO        | Stanford Dogs Dataset   |  Yes  | _Yes_ |  3   |
| 4. MeowFacts      | Random cat facts        |  Yes  |  No   |  3   |
| 5. PlaceBear      | Bear placeholder pics   |  Yes  |  Yes  |  2   |
| 6. PlaceDog       | Dog placeholder pics    |  Yes  |  Yes  |  2   |
| 7. PlaceKitten    | Kitten placeholder pics |  Yes  |  Yes  |  2   |
| 8. Zoo Animals    | Zoo animals facts, pics |  Yes  |  Yes  |  2   |
| 9. from MISC file | -                       |       |       |      |

### 1 Cat Facts

1. [Daily cat facts](https://alexwohlbruck.github.io/cat-facts/docs/)
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

### 2 Dog Facts

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

### 3. Dog CEO

1. [Dog CEO](https://dog.ceo/dog-api/) |
   1. Base URL = `https://dog.ceo/dog-api/` |
   1. Object name = `message`
   1. list all breeds: `breeds/list/all`
   1. random image: `breeds/image/random`
   1. by breed: `breed/hound/images`
   1. by sub-breed: `breed/hound/list`
   1. browse breed list: `https://dog.ceo/api/breed/${breedName}/images/random`

**WORKS!**

Used the following code to output the 1st four images because there are a 1000 images. I would have to add that option as a parameter. Here is the code I used:

```js
async function fetchDogCeo(url, cat, subcat) {
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
fetchDogCeo("https://dog.ceo/api/breed", "/hound", "/images");
```

I tried to randomize the values in `slice()` but it did not output images onto the page:

```js
const random = Math.trunc(Math.random() * 1000);
const endSlice = random + 3;
data.message.slice(random, endSlice).forEach(image => {
```

Another issue is that `data` is an array inside the object `message`.

### 4 MeowFacts

1. [MeowFacts](https://github.com/wh-iterabb-it/meowfacts) |
   1. Base URL = `https://meowfacts.herokuapp.com/` |
   1. Params example for 3 facts = `?count=3`, specific fact = `?id=3` |
   1. Object name = `data`

**WORKS!**

Hard coded the # of facts and the response is in an object named `data` with the text fields in an array. Here is the code I used:

```js
const meowFacts = document.getElementById("meow-facts");
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

### 5 PlaceBear and 6 PlaceDog

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

### 7 PlacKitten

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

### 8 Zoo Animals

1. [Zoo Animals](https://zoo-animal-api.herokuapp.com/) |
   1. Base URL = `https://zoo-animal-api.herokuapp.com/` |
   1. Params = `animals/rand` or `animals/rand/{number}` where number is from 1 to 10

**WORKS!**

Here is the code I used:

```js
// Single random object with 10+ properties.
async function fetchZooAnimal(url, type) {
  try {
    const response = await fetch(`${url}${type}`);

    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>Random Zoo Animals</h3>`;
      textBlock += `
        <h4>${data.name} (${data.latin_name})</h4>
        <p>Type: ${data.animal_type}</p>
        <p>Habitat: ${data.habitat}</p>
        <p>Range: ${data.geo_range}</p>
        `;
      randomOutput.innerHTML = textBlock;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchZooAnimal("https://zoo-animal-api.herokuapp.com/", "animals/rand");

// with a number param added on
async function fetchZooAnimals(url, type) {
  try {
    const response = await fetch(`${url}${type}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>${type.slice(type.length - 1)} Random Zoo Animals</h3>`;
      data.forEach(animal => {
        textBlock += `
        <h4>${animal.name} (${animal.latin_name})</h4>
        <p>Type: ${animal.animal_type}</p>
        <p>Habitat: ${animal.habitat}</p>
        <p>Range: ${animal.geo_range}</p>
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
fetchZooAnimals("https://zoo-animal-api.herokuapp.com/", "animals/rand/5");
```

I couldn't use the function with a 3rd param: `fetchZooAnimal(url, cat, subcat)`. I don't know why that did not work. I tried both `5` and `"5"` as the final param.

# Auth Key Required Free APIS

| API          | Descr              |  Auth  | HTTPS | CORS |
| :----------- | :----------------- | :----: | :---: | :--: |
| **ANIMALS**  | -                  |   -    |   -   |  -   |
| 1. AdoptAPet | Pets 4 adoption    | apiKey |  Yes  | Yes  |
| 2. Cats      | Tumblr cat pics    | apiKey |  Yes  |  No  |
| 3. IUCN      | Threatened Species | apiKey |  No   |  No  |
| 4. PetFinder | Pet adoption       | apiKey |  Yes  | Yes  |
| 5. The Dog   | All about dogs     | apiKey |  Yes  |  No  |

1. [AdoptAPet](https://www.adoptapet.com/public/apis/pet_list.html)
1. [TheCatApi](https://docs.thecatapi.com/)
1. [IUCN](http://apiv3.iucnredlist.org/api/v3/docs)
1. [PetFinder](https://www.petfinder.com/developers/)
1. [The Dog](https://thedogapi.com/)
