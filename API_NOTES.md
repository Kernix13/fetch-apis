# Free API Notes no Auth Key Required

A breakdown for each FREE api with the endpoints and any other params needed. APIS that require a key are at the bottom.

## Animals

3 types: 1) Single endpoint, 2) Endpoint with single parameter, 3) 2 or more parameters.

| API            | Descr                   | HTTPS | CORS  | Type |
| :------------- | :---------------------- | :---: | :---: | :--: |
| **BOOKS**      | -                       |   -   |   -   |  -   |
| 1. Cat Facts   | Daily cat facts         |  Yes  |  No   |  1   |
| 2. Dog Facts   | Random facts            |  Yes  | _Yes_ |  2   |
| 3. Dog CEO     | Stanford Dogs Dataset   |  Yes  | _Yes_ |  3   |
| 4. MeowFacts   | Random cat facts        |  Yes  |  No   |  3   |
| 5. PlaceBear   | Bear placeholder pics   |  Yes  |  Yes  |  2   |
| 6. PlaceDog    | Dog placeholder pics    |  Yes  |  Yes  |  2   |
| 7. PlaceKitten | Kitten placeholder pics |  Yes  |  Yes  |  2   |
| 8. Zoo Animals | Zoo animals facts, pics |  Yes  |  Yes  |  2   |

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

### 4 MeowFacts

1. [MeowFacts](https://github.com/wh-iterabb-it/meowfacts) |
   1. Base URL = `https://meowfacts.herokuapp.com/` |
   1. Params example for 3 facts = `?count=3`, specific fact = `?id=3` |
   1. Object name = `data`

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

I couldn't use the function with a 3rd param: `fetchZooAnimal(url, cat, subcat)`. I don't know why that did not work. I added both `5` and `"5"` as the final param.

---

### Working Animal APIS

1. Dog CEO, 2) MeowFacts, 3) PlacKitten, 4) Zoo Animals

1. Dog CEO - 1000's of image src strings inside `mesage`as an array
1. MeowFacts - Set number of text strings inside `data` as an array
1. PlaceKitten - `Blob` and returns a single image which you need to use as an image `src` value
1. Zoo Animals - a single object with props

> I could never account for all the diff prop names unless I can use a variable in the forEach loop which is defined somewhere else.

---

## Books

| API             | Descr                     | HTTPS | CORS | Type |
| :-------------- | :------------------------ | :---: | :--: | :--: |
| **BOOKS**       | -                         |   -   |  -   |  -   |
| 1. Gutendex     | Project Gutenberg Library |  Yes  |  No  |  ?   |
| 2. Open Library | ???                       |  Yes  |  No  |  ?   |
| 3. Penguin Pub  | data about books, authors |  Yes  | Yes  |  ?   |
| 4. PoetryDB     | poetry collection         |  Yes  | Yes  |  ?   |
| 5. Rig Veda     | ...                       |  Yes  | Unk  |  ?   |

### 10 Gutendex

1. [Gutendex](https://gutendex.com/) |
   1. Base URL = `https://gutendex.com/` |
   1. Object name = `results`, 32 books in the array
   1. Param = `/books` |
   1. Param = `author_year_start` and `author_year_end` to find author alive in a given range, e.g. `/books?author_year_start=1800&author_year_end=1899` |
   1. Param = `copyright` if `true`, `false` for public domain in US, or `null`, e.g. `/books?copyright=true`
   1. Other options: `languages` e.g. `/books?languages=en`, `search` to search author names and titles e.g. `/books?search=dickens%20great` , and `topic` e.g. `/books?topic=children` | or indivi

### 11 Penguin Publishing

1. [Penguin Publishing](http://www.penguinrandomhouse.biz/webservices/rest/) |
   1. Base URL = ``

### 12 PoetryDB

1. [PoetryDB](https://github.com/thundercomb/poetrydb#readme): lines to a poem, text in json format, same breakdown like the NASA one,

### 13 Rig Veda

1. [Rig Veda]()

## Calendar

1. [Liturgical Calendar API](http://calapi.inadiutorium.cz/api-doc)

## Currency Exchange

1. [Currency-api](https://github.com/fawazahmed0/currency-api#readme)
1. [Exchangerate.host](https://exchangerate.host/#/#docs)

## Dictionaries

1. [Free Dictionary API](https://dictionaryapi.dev/)

## Entertainment

1. [Random Useless Facts](https://uselessfacts.jsph.pl/)

## Food and Drink

1. [Coffee](https://coffee.alexflipnote.dev/): Random pictures of coffee
1. [Foodish ](https://github.com/surhud004/Foodish#readme): Random pictures of food dishes
1. [Fruityvice](https://www.fruityvice.com/): Data about all kinds of fruit
1. [Open Brewery DB](https://www.openbrewerydb.org/)
1. [Open Food Facts](https://world.openfoodfacts.org/data): Food Products Database

## Geocoding

1. [Country](http://country.is/): Get your visitor's country from their IP
1. [CountryStateCity](https://countrystatecity.in/): World countries, states, regions, provinces, cities & towns in JSON, SQL, XML, YAML, & CSV format
1. [Open Topo](https://www.opentopodata.org/): Data Elevation and ocean depth for a latitude and longitude
1. [OpenStreetMap](https://wiki.openstreetmap.org/wiki/API): Navigation, geolocation and geographical data
1. [REST Countries](https://restcountries.com/):Get information about countries via a RESTful API
1. [Zippopotam.us](https://www.zippopotam.us/): Get information about place such as country, city, state, etc
   1. Endpoint = `http://api.zippopotam.us/us/${zip_code}`
1. [Ziptastic](): Get the country, state, and city of any US zip-code

## Government

1. [Census.gov](https://www.census.gov/data/developers/data-sets.html): The US Census Bureau provides various APIs and data sets on demographics and businesses (???)
1. [Data USA](https://datausa.io/about/api/): US Public Data
   1. https://datausa.io/api/data?drilldowns=Nation&measures=Population
   1. https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest
   1. https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest
1. [Federal Register](https://www.federalregister.gov/reader-aids/developer-resources/rest-api): The Daily Journal of the United States Government
1. [Open Government, USA](https://data.gov/developers/): United States Government Open Data
1. [US Presidential Election Data by TogaTech](https://uselection.togatech.org/api/): Basic candidate data and live electoral vote counts for top two parties in US presidential election

## Health

1. [Coronavirus](https://pipedream.com/@pravin/http-api-for-latest-wuhan-coronavirus-data-2019-ncov-p_G6CLVM/readme): HTTP API for Latest Covid-19 Data
1. [Covid Tracking Project](https://covidtracking.com/data/api/version-2): Covid-19 data for the US
1. [Covid-19](https://github.com/M-Media-Group/Covid-19-API): Covid 19 cases, deaths and recovery per country
1. [Open Disease](https://disease.sh/): API for Current cases and more stuff about COVID-19 and Influenza

## Jobs

1. [Careerjet](https://www.careerjet.com/partners/api/): Job search engine

## Music

1. [Lyrics.ovh](https://lyricsovh.docs.apiary.io/#): Simple API to retrieve the lyrics of a song

## Open Data

1. [MusicBrainz](https://musicbrainz.org/doc/MusicBrainz_API): Music
1. [Radio Browser](https://api.radio-browser.info/): List of internet radio stations
1. [Songsterr](https://www.songsterr.com/a/wa/api/): Provides guitar, bass and drums tabs and chords

## News

1. [Chronicling America](https://chroniclingamerica.loc.gov/about/api/): Provides access to millions of pages of historic US newspapers from the Library of Congress

## Open Data

1. [18F](http://18f.github.io/API-All-the-X/): Unofficial US Federal Government API Development
1. [Archive.org](https://archive.readme.io/reference/getting-started) The Internet Archive
1. **Wayback Machine APIs**, https://archive.org/help/wayback_api.php: `http://archive.org/wayback/available?url=${example.com}`
1. [Callook.info](https://callook.info/) United States ham radio callsigns
1. [CollegeScoreCard.ed.gov](https://collegescorecard.ed.gov/data/) Data on higher education institutions in the United States
1. [OpenCorporates](http://api.opencorporates.com/documentation/API-Reference) Data on corporate entities and directors in many countries
1. [OpenSanctions](https://www.opensanctions.org/docs/api/) Data on international sanctions, crime and politically exposed persons
1. [Recreation Information Database](https://ridb.recreation.gov/docs) Recreational areas, federal lands, historic sites, museums, and other attractions/resources(US)
1. [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page) Mediawiki Encyclopedia

## Open Source Projects

1. [Datamuse](https://www.datamuse.com/api/) Word-finding query engine
1. [GitHub Contribution Chart Generator](https://github-contributions.vercel.app/) Create an image of your GitHub contributions
1. [Shields](https://shields.io/) Concise, consistent, and legible badges in SVG and raster format

## Patent

1. [USPTO](https://www.uspto.gov/learning-and-resources/open-data-and-mobility) USA patent api services

## Photography

1. [Lorem Picsum](https://picsum.photos/) Images from Unsplash

## Science & Math

1. [arcsecond.io](https://api.arcsecond.io/) Multiple astronomy data sources
1. [arXiv](https://arxiv.org/help/api/user-manual) Curated research-sharing platform: physics, mathematics, quantitative finance, and economics
1. [ITIS](https://www.itis.gov/about_itis.html) Integrated Taxonomic Information System
1. [Launch Library 2](https://thespacedevs.com/llapi) Spaceflight launches and events database
1. [Noctua](https://api.noctuasky.com/api/v1/swaggerdoc/) REST API used to access NoctuaSky features
1. [Numbers](http://numbersapi.com/#42) Facts about numbers
1. [Open Notify](http://open-notify.org/Open-Notify-API/) ISS astronauts, current location, etc
1. [Sunrise and Sunset](https://sunrise-sunset.org/api) Sunset and sunrise times for a given latitude and longitude
1. USGS Earthquake Hazards Program Earthquakes data real-time

## Social

1. [Lanyard](https://github.com/Phineas/lanyard) Retrieve your presence on Discord through an HTTP REST API or WebSocket

## Sports & Fitness

1. [MLB Records and Stats](https://appac.github.io/mlb-data-api-docs/) Current and historical MLB statistics

## Test Data

1. [English Random Words](https://random-words-api.vercel.app/word) Generate English Random Words with Pronunciation
   1. Endpoint = `https://random-words-api.vercel.app/word`, that's it, no more
1. [FakerAPI](https://fakerapi.it/en) a collection of completely free APIs that helps web developers and web designers generate fake data in a fast and easy way. No registration is required
1. [JSONPlaceholder](https://jsonplaceholder.typicode.com/) Fake data for testing and prototyping - Types: /posts, /comments, /albums, /photos, /todos, /users
1. [Loripsum](https://loripsum.net/) The "lorem ipsum" generator that doesn't suck
1. [Random Data](https://random-data-api.com/) Random data generator
1. [RandomUser](https://randomuser.me/) Generates and list user data
1. [This Person Does not Exist](https://thispersondoesnotexist.com/) Generates real-life faces of people who do not exist
   1. Endpoint = `https://thispersondoesnotexist.com/`, that's it
1. [Toolcarton](https://testimonialapi.toolcarton.com/) Generate random testimonial data
1. [UUID Generator](https://thispersondoesnotexist.com/) Generate UUIDs

## Text Analysis

1. [LibreTranslate](https://libretranslate.com/docs/) Translation tool with 17 available languages

## Transportation

1. [AviationAPI](https://docs.aviationapi.com/) FAA Aeronautical Charts and Publications, Airport Information, and Airport Weather
1. [Community Transit](https://github.com/transitland/transitland-datastore/blob/master/README.md#api-endpoints) Transitland API
1. [OpenSky Network](https://openskynetwork.github.io/opensky-api/?ref=devresourc.es?ref=devresourc.es?ref=devresourc.es?ref=devresourc.es?ref=devresourc.es?ref=https://githubhelp.com) Free real-time ADS-B aviation data

## URL Shorteners

> URI identifies a resource and differentiates it from others by using a name, location, or both. URL identifies the web address or location of a unique resource. URI contains components like a scheme, authority, path, and query. URL has similar components to a URI, but its authority consists of a domain name and port

Try them all and then pick the top 1 or 2 APIs

1. [CleanURI](https://cleanuri.com/docs) URL shortener service
1. [Drivet URL Shortener](https://wiki.drivet.xyz/en/url-shortener/add-links) Shorten a long URL easily and fast
1. [Free Url Shortener](https://ulvis.net/developer.html) Free URL Shortener offers a powerful API to interact with other sites
1. [GoTiny](https://github.com/robvanbakel/gotiny-api) A lightweight URL shortener, focused on ease-of-use for the developer and end-user
1. [Shrtcode](https://shrtco.de/docs) URl Shortener with multiple Domains

## Vehicles

1. [NHTSA](https://vpic.nhtsa.dot.gov/api/) NHTSA Product Information Catalog and Vehicle Listing

## Video

1. [Motivational Quotes](https://nodejs-quoteapp.herokuapp.com/) Random Motivational Quotes

## Weather

1. [7Timer!](http://www.7timer.info/doc.php?lang=en) Weather, especially for Astroweather
1. [Open-Meteo](https://open-meteo.com/en/docs) Global weather forecast API for non-commercial use
1. [RainViewer](https://www.rainviewer.com/api.html) Radar data collected from different websites across the Internet
1. [US Weather](https://www.weather.gov/documentation/services-web-api) US National Weather Service

## Other sources

1. another list: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
   1. [CoinBase](https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-users#data-endpoints): Currency codes and names
   1. [ExchangeRate-API](https://www.exchangerate-api.com/docs/overview): Exchange rates
   1. [FreeGeoIP](https://ipbase.com/): GeoIP info
   1. [House Stock Watcher](https://housestockwatcher.com/api): Congress members’ stock transactions
   1. [Image-Charts](https://documentation.image-charts.com/): Chart images
   1. [Nager.Date](https://date.nager.at/): Public holidays
   1. [Nominatum](https://nominatim.org/release-docs/latest/api/Overview/): Locations and addresses
   1. [**Numbers API**](http://numbersapi.com/#random/math): Facts about numbers
   1. [Open Library](https://openlibrary.org/developers/api): Information about books
   1. [Universities List](https://github.com/Hipo/university-domains-list): universities and their domain names
   1. [WordPress](https://developer.wordpress.org/rest-api/reference/): Public posts from any WordPress site
1. get your ip address - endpoint: https://api.ipify.org?format=json
1. https://catfact.ninja/ - /fact, /facts, /breeds
1. HTTP Cats: https://http.cat/[status_code] see https://http.cat/?ref=apilist.fun
1. Cocktail database: https://www.thecocktaildb.com/api.php - `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${margarita}` or by letter `${a}` or use ingredient `${vodka}`

<br>

# Auth Key Required Free APIS

## Animals

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

## Books

| API                 | Descr                     |  Auth  | HTTPS | CORS |
| :------------------ | :------------------------ | :----: | :---: | :--: |
| **BOOKS**           | -                         |   -    |   -   |  -   |
| 1. A Bíblia Digital | Bible                     | apiKey |  No   |  No  |
| 2. Bhagavad Gita    | in Sanskrit/English/Hindi | OAuth  |  Yes  | Yes  |

1. [A Bíblia Digital](https://www.abibliadigital.com.br/en)
1. [Bhagavad Gita](https://bhagavadgita.io/api/)

## Government

| API                      | Descr | Auth | HTTPS | CORS |
| :----------------------- | :---- | :--: | :---: | :--: |
| 1. FEC                   |       |      |       |      |
| 2. National Park Service |       |      |       |      |

1. [FEC](https://api.open.fec.gov/developers/): Information on campaign donations in federal elections - API KEY REQUIRED
1. [National Park Service, US](https://www.nps.gov/subjects/developer/index.htm): Data from the US National Park Service - API KEY REQUIRED

## Weather

| API               | Descr | Auth | HTTPS | CORS |
| :---------------- | :---- | :--: | :---: | :--: |
| 1. OpenWeatherMap |       |      |       |      |

1. [OpenWeatherMap](https://openweathermap.org/api) Weather, API key required which I have
