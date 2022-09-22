const randomOutput = document.getElementById("random-output");
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
// fetchByUrl("http://api.zippopotam.us/us/19064").then(data => {
//   alert(data["post code"]);
//   console.log(data.places[0].latitude, data.places[0].longitude, data.places[0]["place name"]);
// });

fetchByUrl("https://gutendex.com/books");

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
      // return data;
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}
// fetchByType("https://zoo-animal-api.herokuapp.com/", "animals/rand");
// fetchByType("https://jsonplaceholder.typicode.com/", "users/1");
// fetchByType("https://meowfacts.herokuapp.com/", "?count=3");
// fetchByType("http://api.zippopotam.us/us/", "19064");
// fetchByType("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", "vodka");
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

/* 3. With 3 endpoint parameters */

async function fetchByParams(url, cat, subcat) {
  try {
    // await the fetch request
    const response = await fetch(`${url}${cat}${subcat}`);
    // console.log(response);
    if (response.ok) {
      // await the response from the fetch request
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
// fetchByParams("https://dog.ceo/api/breed", "/hound", "/images");

// TRAVERSY VIDEO
// from local text file
document.getElementById("getText").addEventListener("click", getText);
async function getText() {
  // console.log("Working");
  try {
    const response = await fetch("sample.txt");
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
    const response = await fetch("users.json");
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
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json"
      },
      body: JSON.stringify({ title: title, body: body })
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      // code to output to DOM here
    } else {
      console.log("Not successful");
    }
  } catch (err) {
    console.error(err);
  }
}

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
// fetchPlaceKitten("https://placekitten.com/", "g/200/300");
