# FREE APIs

Below are links to APIs that I am interested in. Most of the links are from the API list on GitHub found in the README file. They are divided into 2 sections:

1. No API key required
2. API key required

## No API key required

3 types: 1) Single endpoint, 2) Endpoint with single parameter, 3) 2 or more parameters.

Table breakdown (Work-In-Progress): 1-8 = Animals | 9-? = Books | ?-? = Business | ?-? = Calendar |?-? Currency Exchange | ?-? = Development | ?-? = Dictionaries | ?-? = Entertainment | ?-? = Environment | ?-? = Events | ?-? = Food and Drink | ?-? = Geocoding | ?-? = Government | ?-? = Health | ?-? = Jobs | ?-? = Music | ?-? = Open Data | ?-? = Open Source Projects | ?-? = Patent | ?-? = Personality | ?-? = Photography | ?-? = Science & Math | ?-? = Shopping | ?-? = Social | ?-? = Sports & Fitness | ?-? = Test Data | ?-? = Text Analysis | ?-? Transportation | ?-? = URL Shorteners | ?-? = Vehicles | ?-? = Video | ?-? = Weather |

| API            | Descr                   | HTTPS | CORS  | Type |
| :------------- | :---------------------- | :---: | :---: | :--: |
| 1. Cat Facts   | Daily cat facts         |  Yes  |  No   |  1   |
| 2. Dog Facts   | Random facts            |  Yes  | _Yes_ |  3   |
| 3. Dog CEO     | Stanford Dogs Dataset   |  Yes  | _Yes_ |  3   |
| 4. MeowFacts   | Random cat facts        |  Yes  |  No   |  3   |
| 5. PlaceBear   | Bear placeholder pics   |  Yes  |  Yes  |  3   |
| 6. PlaceDog    | Dog placeholder pics    |  Yes  |  Yes  |  3   |
| 7. PlaceKitten | Kitten placeholder pics |  Yes  |  Yes  |  3   |
| 8. Zoo Animals | Zoo animals facts, pics |  Yes  |  Yes  |  3   |

Links and basic structure:

1. [cat-facts](https://alexwohlbruck.github.io/cat-facts/docs/) | Base url = `https://cat-fact.herokuapp.com` | Endpoint(s) = `/facts`
1. [Dog API](https://kinduff.github.io/dog-api/) | Base url = `http://dog-api.kinduff.com` | Path = `/api/facts` | Param = `?number=5`
1. [Dog API 2](https://dog.ceo/dog-api/) | Base URL = `https://dog.ceo/dog-api/` | Parameters: `breeds/list/all`, `breeds/image/random` | options examples: `breed/hound/images`, `breed/hound/list` | Browse breed list example: `https://dog.ceo/api/breed/${breedName}/images/random`
1. [MeowFacts](https://github.com/wh-iterabb-it/meowfacts) | URL = `https://meowfacts.herokuapp.com/` | Params example for 3 facts = `?count=3`, specific fact = `?id=3`
1. [PlaceBear](https://placebear.com/) | Base URL = `https://placebear.com/` | Params are width and height: `200/300` or `g/200/300`, no clue what the `g` is for.
1. [PlaceDog](https://place.dog/) | Base URL = `https://place.dog/` | Params are width and height: `200/300`
1. [PlacKitten](https://placekitten.com/) | Base URL = `https://placekitten.com/` | Params are width and height: `200/300` or `g/200/300`, no clue what the `g` is for.
1. [Zoo Animals](https://zoo-animal-api.herokuapp.com/) | Base URL = `https://zoo-animal-api.herokuapp.com/` | Params = `animals/rand` or `animals/rand/{number}` where number is from 1 to 10
1. []()
1. []()

## API key required

| API          | Descr              |  Auth  | HTTPS | CORS |
| :----------- | :----------------- | :----: | :---: | :--: |
| 1. AdoptAPet | Pets 4 adoption    | apiKey |  Yes  | Yes  |
| 2. Cats      | Tumblr cat pics    | apiKey |  Yes  |  No  |
| 3. IUCN      | Threatened Species | apiKey |  No   |  No  |
| 4. PetFinder | Pet adoption       | apiKey |  Yes  | Yes  |
| 5. The Dog   | All about dogs     | apiKey |  Yes  |  No  |

Links:

1. [AdoptAPet](https://www.adoptapet.com/public/apis/pet_list.html)
1. [TheCatApi](https://docs.thecatapi.com/)
1. [IUCN](http://apiv3.iucnredlist.org/api/v3/docs)
1. [PetFinder](https://www.petfinder.com/developers/)
1. [The Dog](https://thedogapi.com/)
1. []()