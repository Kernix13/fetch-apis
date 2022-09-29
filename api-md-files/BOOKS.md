# Books

1. Books - 7
1. Dictionaries - 7

| API             | Descr                     | HTTPS |  CORS   | Type |
| :-------------- | :------------------------ | :---: | :-----: | :--: |
| **BOOKS**       | -                         |   -   |    -    |  -   |
| 1. Gutendex     | Project Gutenberg Library |  Yes  |   No    |  ?   |
| 2. Open Library | ???                       |  Yes  |   No    |  ?   |
| 3. Penguin Pub  | data about books, authors |  Yes  | **Yes** |  ?   |
| 4. PoetryDB     | poetry collection         |  Yes  | **Yes** |  ?   |
| 5. Rig Veda     | ...                       |  Yes  |   Unk   |  ?   |

## 10 Gutendex

1. [Gutendex](https://gutendex.com/) |
   1. Base URL = `https://gutendex.com` |
   1. Object name = `results`, 32 books in the array
   1. Param = `/books` |
   1. Param = `author_year_start` and `author_year_end` to find author alive in a given range, e.g. `/books?author_year_start=1800&author_year_end=1899` |
   1. Param = `copyright` if `true`, `false` for public domain in US, or `null`, e.g. `/books?copyright=true`
   1. Other options: `languages` e.g. `/books?languages=en`, `search` to search author names and titles e.g. `/books?search=dickens%20great` , and `topic` e.g. `/books?topic=children` | or indivi

**WORKS!**

> NEED TO CHANGE TO A 3 PARAM FUNCTION

Here is the code I used:

```js
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
fetchGutendex("https://gutendex.com/books?search=dickens");
// fetchGutendex("https://gutendex.com/books?languages=en");
// fetchGutendex("https://gutendex.com/books?topic=fantasy");
```

## 11 PoetryDB

> NEED TO CHANGE TO A 3 PARAM FUNCTION

I didn't get blocked by CORS so I think that is wrong in the repo.

1. [PoetryDB](https://github.com/thundercomb/poetrydb#readme): lines to a poem, text in json format, same breakdown like the NASA one,
   1. Base URL = `https://poetrydb.org`
   1. category params example = `/title<title>`
   1. subcategory params example = `Ozymandias` followed by `/lines.json`

Where `<input field>` in the example above is `/title` and `<search term>` is `Ozymandias`. `<search term>` relates to `<input field>`.

**WORKS!**

- All input fields: author, title, lines, linecount, poemcount, random,
- All search terms: When `<input field>` is:

```
author: <field data> is the name, or part of the name, of the author of a poem
title: <field data> is the title, or part of the title, of a poem
lines: <field data> is part of a line or lines of a poem
linecount: <field data> is the number of lines of a poem. Number of lines includes section headings, but excludes empty lines (eg. section breaks)
poemcount: <field data> is the number of poems to return
random: <field data> is the number of random poems to return
```

This doc README is confusing. I searched for `Ozymandias` and here is everything I found that works:

```js
// returns the lines, NOTE so does /lines without .json
fetchPoetryDB("https://poetrydb.org/title/Ozymandias/lines.json");
// returns the author, title, and lines
fetchPoetryDB("https://poetrydb.org/title/Ozymandias/author,title,lines");
```

Using `lines.text` returns the lines as text so use `resonse.text()`, but there are a lot of options and variations.

Here is the code I used:

```js
const poetryDB = document.getElementById("poetrydb");
async function fetchPoetryDB(url) {
  try {
    // await the fetch request
    const response = await fetch(url);
    // await the response from the fetch request
    if (response.ok) {
      console.log(response);
      const data = await response.json();
      let textBlock = `
        <h3>${data[0].author}</h3>
        <p class="italic">${data[0].title}</P>
      `;
      data[0].lines.forEach(line => {
        textBlock += `<p>${line}</P>`;
      });
      console.log(data);
      poetryDB.innerHTML = textBlock;
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
// NEED TO CHANGE TO THE 2, 3 OR MORE PARAM FUNCTION
```

> left off at https://github.com/thundercomb/poetrydb#api-reference

## Dictionaries no auth

1. [Free Dictionary API](https://dictionaryapi.dev/)

   1. Base URL = `https://api.dictionaryapi.dev/api/v2/entries/en`
   1. param = `<word>`

> Getting a response but not the data???

Here is the code I used:

```js
// NEED TO CHANGE TO THE 2, 3 OR MORE PARAM FUNCTION
```

1. [Open Library](https://openlibrary.org/developers/api): Information about books
   1. Base URL = ``

## Auth Key Required Free APIS

| API                 | Descr                     |  Auth  | HTTPS | CORS |
| :------------------ | :------------------------ | :----: | :---: | :--: |
| **BOOKS**           | -                         |   -    |   -   |  -   |
| 1. A Bíblia Digital | Bible                     | apiKey |  No   |  No  |
| 2. Bhagavad Gita    | in Sanskrit/English/Hindi | OAuth  |  Yes  | Yes  |

1. [A Bíblia Digital](https://www.abibliadigital.com.br/en)
1. [Bhagavad Gita](https://bhagavadgita.io/api/)

<br>

## Dictionaries auth

| API                | Descr |  Auth  | HTTPS | CORS |
| :----------------- | :---- | :----: | :---: | :--: |
| 1. Collins         | -     | apiKey |  Yes  | Unk  |
| 1. Lingua Robot    | -     | apiKey |  Yes  | Yes  |
| 1. Merriam-Webster | -     | apiKey |  Yes  | Unk  |
| 1. Oxford          | -     | apiKey |  Yes  |  No  |
| 1. Merriam-Webster | -     | apiKey |  Yes  | Unk  |
| 1. Synonyms        | -     | apiKey |  Yes  | Unk  |

1. [Collins](https://api.collinsdictionary.com/api/v1/documentation/html/) Bilingual Dictionary and Thesaurus Data apiKey Yes Unknown
1. [Lingua Robot](https://www.linguarobot.io/) Word definitions, pronunciations, synonyms, antonyms and others
1. [Merriam-Webster](https://dictionaryapi.com/) Dictionary and Thesaurus Data
1. [Oxford](https://developer.oxforddictionaries.com/) Dictionary Data
1. [Synonyms](https://www.synonyms.com/synonyms_api.php) Synonyms, thesaurus and antonyms information for any given word

> THE FOLLOWING DID NOT WORK:

## 11 Penguin Publishing

1. [Penguin Publishing](http://www.penguinrandomhouse.biz/webservices/rest/) | The Penguin Random House Rest Services can be used to get data about books, authors and events - return data in one of three formats depending on the content type that is supplied as part of the request: application/xml, application/json, image/\* - The image content type is only applicable to the /request/titles/ISBN resource as it will return the cover image
   1. Base URL = `https://reststop.randomhouse.com`
   1. Params = `/resources` with `/authors` or `/works` or `/titles` or `/titles/ISBN` or `/authorevents` or `/authorevents/EVENTID`
   1. params2 examples = `/authors?lastName=Grisham`

**ERROR**:

> Access to fetch at 'https://reststop.randomhouse.com/resources/authors?lastName=Grisham' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

So I added `mode: "no-cors",` and that error disappeared but but I got `response.ok: false`, can't seem to solve this...setting my local host in Access-Control-Allow-Origin did not work either. I found [Solving No Access-Control-Allow-Origin](https://www.endyourif.com/solving-no-access-control-allow-origin-with-node-js-and-express/)

> And of course someone has built an [npm CORS](https://www.npmjs.com/package/cors) package if you prefer to not write your own to solve access-control-allow-origin javascript

Here is the code I used:

```js
const penguin = document.getElementById("penguin");
async function fetchPenguinPub(url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    });
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
fetchPenguinPub("https://reststop.randomhouse.com/resources/authors?lastName=Grisham");
```

## 13 Rig Veda

1. [Rig Veda](https://aninditabasu.github.io/indica/html/rv.html):

> The page you're looking for couldn't be found.
