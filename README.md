# Fetch and async await API

My notes and code examples for getting async / await, fetch, and APIs engrained in my brain. And eventually RESTful APIs including WordPress REST API.

## Fetch examples

Find APIs with simple (and **FREE**) endpoints, preferably without having to _sign-up_ or other requirements.

### Free APIS

1. github list: https://github.com/public-apis/public-apis
1. another list: https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
1. https://jsonplaceholder.typicode.com/ - Types: /posts, /comments, /albums, /photos, /todos, /users
1. get your ip address - endpoint: https://api.ipify.org?format=json
1. random user - https://randomuser.me/
1. zip code info - `http://api.zippopotam.us/us/${zip_code}`
1. https://catfact.ninja/ - /fact, /facts, /breeds
1. HTTP Cats: https://http.cat/[status_code] see https://http.cat/?ref=apilist.fun
1. https://dog.ceo/dog-api/ - example endpoints:
   1. list all breeds: https://dog.ceo/api/breeds/list/all
   1. random image: https://dog.ceo/api/breeds/image/random
   1. by breed: https://dog.ceo/api/breed/hound/images
   1. by sub-breed: https://dog.ceo/api/breed/hound/list
   1. browse breed list: `https://dog.ceo/api/breed/${breedName}/images/random`
1. https://datausa.io/about/api/ - examples:
   1. https://datausa.io/api/data?drilldowns=Nation&measures=Population
   1. https://datausa.io/api/data?drilldowns=Nation&measures=Population&year=latest
   1. https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest
1. Wayback Machine APIs: `http://archive.org/wayback/available?url=${example.com}`
1. Cocktail database: https://www.thecocktaildb.com/api.php - `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${margarita}` or by letter `${a}` or use ingredient `${vodka}`
