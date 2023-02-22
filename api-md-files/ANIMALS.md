# Animal

> REWORK THE WORKING FUNCTIONS TO NOT USE innerHTML
>
> > Can't get createElement with append to work

### Working APIS

Animals

1. Dog CEO - 1000's of image src strings inside `mesage`as an array
1. MeowFacts - Set number of text strings inside `data` as an array
1. PlaceKitten - `Blob` and returns a single image which you need to use as an image `src` value
1. Zoo Animals - a single object with props

> I could never account for all the diff prop names unless I can use a variable in the forEach loop which is defined somewhere else. The different functions would just be used for variations for the same API.

MeowFacts is the only interesting non-Auth API. The others that worked are just images.

| API               | Descr                   | HTTPS | CORS  | Type |
| :---------------- | :---------------------- | :---: | :---: | :--: |
| **BOOKS**         | -                       |   -   |   -   |  -   |
| 1. Dog CEO        | Stanford Dogs Dataset   |  Yes  | _Yes_ |  3   |
| 2. MeowFacts      | Random cat facts        |  Yes  |  No   |  3   |
| 3. PlaceKitten    | Kitten placeholder pics |  Yes  |  Yes  |  2   |
| 4. Zoo Animals    | Zoo animals facts, pics |  Yes  |  Yes  |  2   |
| 5. Cat Facts      | Daily cat facts         |  Yes  |  No   |  1   |
| 6. Dog Facts      | Random facts            |  Yes  | _Yes_ |  2   |
| 7. PlaceBear      | Bear placeholder pics   |  Yes  |  Yes  |  2   |
| 8. PlaceDog       | Dog placeholder pics    |  Yes  |  Yes  |  2   |
| 9. from MISC file | -                       |       |       |      |

### 1. Dog CEO

1. [Dog CEO](https://dog.ceo/dog-api/) |
   1. Base URL = `https://dog.ceo/dog-api` |
   1. Object name = `message`
   1. list all breeds: `/breeds/list/all`
   1. random image: `/breeds/image/random`
   1. by breed: `/breed/hound/images`
   1. by sub-breed: `/breed/{subBreed}/list`
   1. browse breed list: `https://dog.ceo/api/breed/${breedName}/images/random`

**WORKS!**

Used the following code to output the 1st four images because there are a 1000 images. I would have to add that option as a parameter. Here is the code I used:

```js
const dogCEO = document.getElementById('dog-ceo');
async function fetchDogCeo(baseUrl, option1, option2, option3) {
  try {
    const response = await fetch(`${baseUrl}${option1}${option2}${option3}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      let imagesBlock = `<h3>DOG-CEO: ${option2
        .toUpperCase()
        .slice(1)} IMAGES</h3>`;
      data.message.slice(5, 10).forEach(image => {
        imagesBlock += `
        <img src="${image}" width="200" />
        `;
      });
      dogCEO.innerHTML = imagesBlock;
      // return data;
    } else {
      console.log('Not sucessful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchDogCeo('https://dog.ceo/api/', 'breed', '/akita', '/images');
```

I tried to randomize the values in `slice()` but it did not output images onto the page:

```js
const random = Math.trunc(Math.random() * 1000);
const endSlice = random + 3;
data.message.slice(random, endSlice).forEach(image => {
```

I would have to create another function for the single random image options: `fetchDogCeo("https://dog.ceo/api/", "breeds", "/image", "/random");`. I would have to remove `.slice()` and `.forEach()`.

Another issue is that `data` is an array inside the object `message`. I also was not successful trying to use `createElement()` with `append()`:

```js
let imagesBlock = `<h3>DOG-CEO: ${cat.toUpperCase().slice(1)} IMAGES</h3>`;
let img = document.createElement("img")
data.message.slice(0, 4).forEach(image => {
  img.src = image;
  img.width = "200";
  imagesBlock += img
  dogCEO.append(img)
});
dogCEO.append(img) = imagesBlock;
// ReferenceError: Invalid left-hand side in assignment
// at fetchDogCeo (script.js:129:14)
```

I got it to work but I had a number of issues?!?

### 2 MeowFacts

1. [MeowFacts](https://github.com/wh-iterabb-it/meowfacts) |
   1. Base URL = `https://meowfacts.herokuapp.com/` |
   1. Params example for 3 facts = `?count=3`, specific fact = `?id=3` |
   1. Object name = `data`

**WORKS!**

Hard coded the # of facts and the response is in an object named `data` with the text fields in an array. Here is the code I used:

```js
const meowFacts = document.getElementById('meow-facts');
async function fetchMeowFacts(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    if (response.ok) {
      const data = await response.json();
      let textBlock = `<h3>${data.data.length} Cat Facts</h3>`;
      data.data.forEach(text => {
        textBlock += `
        <li>${text}</li>
        `;
      });
      meowFacts.innerHTML = textBlock;
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchMeowFacts('https://meowfacts.herokuapp.com/', '?count=3');
```

I'm doing something wrong because I can't get the following to work:

```js
let textBlock = `<h3>${data.data.length} Cat Facts</h3>`;
data.data.forEach(text => {
  let li = document.createElement('li');
  textBlock += li;
  li.innerText(text); // same with textContent
});
meowFacts.append(textBlock);
// TypeError: li.innerText is not a function
```

### 3 PlacKitten

1. [PlacKitten](https://placekitten.com/) |
   1. Base URL = `https://placekitten.com/` |
   1. Params are width and height: `200/300` or `g/200/300`, no clue what the `g` is for.

**WORKS!** Here is the code I used:

```js
const placeKitten = document.getElementById('place-kitten');
async function fetchPlaceKitten(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.blob();
      console.log(data); // Blob
      placeKitten.src = URL.createObjectURL(data);
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceKitten('https://placekitten.com/', '200/300');
// fetchPlaceKitten("https://placekitten.com/", "g/200/300");
```

No need to chnage the way the image is outputting to the DOM

### 4 Zoo Animals

1. [Zoo Animals](https://zoo-animal-api.herokuapp.com/) |
   1. Base URL = `https://zoo-animal-api.herokuapp.com/` |
   1. Params = `animals/rand` or `animals/rand/{number}` where number is from 1 to 10

> CORS error - no longer working

Here is the code I used:

```js
// Single random object with 10+ properties.
const zoo = document.getElementById('zoo');
async function fetchZooAnimal(url) {
  try {
    const response = await fetch(`${url}`);

    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>Random Zoo Animal</h3>`;
      textBlock += `
        <h4>${data.name} (${data.latin_name})</h4>
        <p>Type: ${data.animal_type}</p>
        <p>Habitat: ${data.habitat}</p>
        <p>Range: ${data.geo_range}</p>
        `;
      zoo.innerHTML = textBlock;
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchZooAnimal('https://zoo-animal-api.herokuapp.com/animals/rand');

// Zoo2 with a number param added
const zoo2 = document.getElementById('zoo2');
async function fetchZooAnimals(baseUrl, value) {
  try {
    const response = await fetch(`${baseUrl}${value}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>${value.slice(
        value.length - 1
      )} Random Zoo Animals</h3>`;
      data.forEach(animal => {
        textBlock += `
        <div class="zoo-style">
          <h4>${animal.name} (${animal.latin_name})</h4>
          <p>Type: ${animal.animal_type}</p>
          <p>Habitat: ${animal.habitat}</p>
          <p>Range: ${animal.geo_range}</p>
        </div>
        `;
      });
      zoo2.innerHTML = textBlock;
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
//
const num = `5`;
fetchZooAnimals('https://zoo-animal-api.herokuapp.com/animals', '/rand/5');
// fetchZooAnimal("https://zoo-animal-api.herokuapp.com/animals/rand", "/5");
fetchZooAnimal('https://zoo-animal-api.herokuapp.com/animals/rand', `/${num}`);
```

I couldn't use the function with a 2nd param: `fetchZooAnimal(baseUrl, value)`. I don't know why that did not work. I tried both `5` and `"5"` as the final param. Although this worked: `fetchZooAnimals("https://zoo-animal-api.herokuapp.com/animals", "/rand/5")` but that is not the correct endpoint structure. Why doesn't it work with just `5` or `/5`?

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

> THE FOLLOWING DID NOT WORK:

### 5 Cat Facts

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
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchMeowFacts('https://cat-fact.herokuapp.com', '/facts');
```

There is a base url link below but with a different end parameter that works - AND - a different GitHub link??? This one is all messed up!

### 6 Dog Facts

1. [Dog Facts](https://kinduff.github.io/dog-api/) | [Dog Facts on GitHub](https://github.com/kinduff/dog-api) |
   1. Base url = `http://dog-api.kinduff.com` |
   1. Path = `/api/facts` |
   1. Param = `?number=5` |

**ERROR**:

> Access to fetch at 'http://dog-api.kinduff.com/api/facts?number=5' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

> GET http://dog-api.kinduff.com/api/facts?number=5 net::ERR_FAILED 301

Here is the code I used:

```js
const url = '';

async function dogFacts(url, cat, subcat) {
  try {
    const response = await fetch(`${url}${cat}${subcat}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      console.log('Not sucessful');
    }
  } catch (err) {
    console.error(err);
  }
}
dogFacts('http://dog-api.kinduff.com', '/api/facts', '?number=5');
```

### 7 PlaceBear and 8 PlaceDog

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
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceBear('https://placebear.com/', '200/300');

// PlaceDog
async function fetchPlaceDog(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log('Not successful');
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceDog('https://place.dog/', '200/300');
```

- `createElement('HTMLElement')`, `createElement()` – creates a new HTML element within the DOM. The return value is the newly created element - creates a new element while manipulating elements - createElement used with append - Note that doing so creates the element, but does not place it on the page. For this, one of the methods for adding an element in the DOM should be used after creating the element
- common to use it with either `innerText()` or `textContent()` and then `append()` to get it on the page

```js
const body = document.body;
const div = document.createElement('div');
// div.innerText("Hello);
div.textContent('Hello');
body.append(div);

// innerHTML example
div.innerText = '<strong>Hello</strong';
// Do this instead
const strong = document.createElement('strong');
strong.innerText('Hello');
div.append(strong);
```

`createElement()`

The createElement() method creates a new HTML element within the DOM. The return value is the newly created element.

Syntax: `document.createElement(tagName[, options])`

- `tagName`: A string that specifies the type of HTML element to be created. It can be any of the HTML tags you know about.
- `options`: An optional parameter that enables us to set an “is” attribute when adding an element.

```js
let div = document.createElement('div');
div.textContent = "Hello, I'm new here."; // or
div.innerText = "Hello, I'm new here.";
```
