// TRAVERSY VIDEO (3 examples)
// from local text file
document.getElementById("getText").addEventListener("click", getText);
async function getText() {
  // console.log("Working");
  try {
    const response = await fetch("./data/sample.txt");
    // console.log(response);
    if (response.ok) {
      const data = await response.text();
      // console.log(data);
      document.getElementById("output").innerHTML = data;
    } else {
      console.log("Not successful");
    }
  } catch (error) {
    console.error(error);
  }
}

// from local json file
document.getElementById("getUsers").addEventListener("click", getUsers);
async function getUsers() {
  // console.log("Working");
  try {
    const response = await fetch("./data/users.json");
    // console.log(response);
    if (response.ok) {
      const data = await response.json();
      let userOutput = `<h2>Users</h2>`;
      data.forEach(user => {
        userOutput += `
          <ul>
            <li>ID: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
          </ul>
        `;
      });
      document.getElementById("output").innerHTML = userOutput;
      // console.log(data);
    } else {
      console.log("Not successful");
    }
  } catch (error) {
    console.error(error);
  }
}

// from external api
document.getElementById("getPosts").addEventListener("click", getPosts);
async function getPosts() {
  // console.log("Working");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // console.log(response);

    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      let postOutput = `<h2>Posts</h2>`;
      data.forEach(post => {
        postOutput += `
          <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
      });
      document.getElementById("output").innerHTML = postOutput;
    } else {
      console.log("Not successful");
    }
  } catch (error) {
    console.log(error);
  }
}

// add user post
document.getElementById("addPost").addEventListener("submit", addPost);
async function addPost(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  console.log("Post Working");
  try {
    // the 2nd arg of an object is HUGE here!
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json"
      },
      body: JSON.stringify({ title: title, body: body })
    });
    // console.log(response);
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

// FREE APIS FROM HERE

// Dog-CEO
const dogCEO = document.getElementById("dog-ceo");
async function fetchDogCeo(baseUrl, option1, option2, option3) {
  try {
    const response = await fetch(`${baseUrl}${option1}${option2}${option3}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      let imagesBlock = `<h3>DOG-CEO: ${option2.toUpperCase().slice(1)} IMAGES</h3>`;
      data.message.slice(5, 10).forEach(image => {
        imagesBlock += `
        <img src="${image}" width="200" />
        `;
      });
      dogCEO.innerHTML = imagesBlock;
      // return data;
    } else {
      console.log("Not sucessful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchDogCeo("https://dog.ceo/api/", "breed", "/akita", "/images");

// MeowFacts
const meowFacts = document.getElementById("meow-facts");
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
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchMeowFacts("https://meowfacts.herokuapp.com/", "?count=3");

// PlaceKitten
const placeKitten = document.getElementById("place-kitten");
async function fetchPlaceKitten(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    // console.log(response);
    if (response.ok) {
      const data = await response.blob();
      console.log(data); // Blob
      placeKitten.src = URL.createObjectURL(data);
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPlaceKitten("https://placekitten.com/", "200/300");

// Zoo Animals
const zoo = document.getElementById("zoo");
async function fetchZooAnimal(url) {
  try {
    const response = await fetch(`${url}`);

    if (!response.ok) {
      // console.log(response);
      throw new Error(response.status)
    }

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
      console.log("Not successful");
    }
  } catch (err) {
    console.warn(err);
  }
}
// fetchZooAnimal("https://zoo-animal-api.herokuapp.com/animals/rand");

// Zoo2
const zoo2 = document.getElementById("zoo2");
async function fetchZooAnimals(baseUrl, value) {
  try {
    const response = await fetch(`${baseUrl}${value}`);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      let textBlock = `<h3>${value.slice(value.length - 1)} Random Zoo Animals</h3>`;
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
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
const num = `5`;
// fetchZooAnimals("https://zoo-animal-api.herokuapp.com/animals", "/rand/5");
// fetchZooAnimal("https://zoo-animal-api.herokuapp.com/animals/rand", `/${num}`);

// Gutendex
const guten = document.getElementById("guten");
async function fetchGutendex(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      let textBlock = `<h3>Books by ${data.results[0].authors[0].name.split(",").reverse().join(" ")}</h3`;
      console.log(data);
      data.results.forEach((book, i) => {
        textBlock += `
          <p>Book ${i + 1}: ${book.title}</p>
        `;
        console.log(book.title);
      });
      guten.innerHTML = textBlock;
      // console.log(data.results[0]);
      // return data;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
// fetchGutendex("https://gutendex.com/books");
// fetchGutendex("https://gutendex.com/books?search=dickens");
// fetchGutendex("https://gutendex.com/books?languages=en");
// fetchGutendex("https://gutendex.com/books?topic=fantasy");

// Penguin Publishing - did not work, see API_NOTES.md

// PoetryDB
const poetryDB = document.getElementById("poetrydb");
async function fetchPoetryDB(url) {
  try {
    // await the fetch request
    const response = await fetch(url);
    // await the response from the fetch request
    if (response.ok) {
      // console.log(response);
      const data = await response.json();
      let textBlock = `
        <h3>${data[0].author}</h3>
        <p class="italic">${data[0].title}</P>
      `;
      data[0].lines.forEach(line => {
        textBlock += `<p>${line}</P>`;
      });
      console.log(data);
      // poetryDB.innerHTML = textBlock;
      // return data;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
fetchPoetryDB("https://poetrydb.org/title/Ozymandias/author,title,lines");
// fetchPoetryDB("https://poetrydb.org/title/Ozymandias/lines");

async function fetchByType(url, type) {
  try {
    const response = await fetch(`${url}${type}`);
    // console.log(response);
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
// fetchByType("http://api.zippopotam.us/us/", "19064");
fetchByType("https://api.dictionaryapi.dev/api/v2/entries/en", "/hello");
