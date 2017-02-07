# beer.ly
Delivery beer flights. Beerly is an app that allows users to have beer flights be delivered to them.

<img src="https://s3-us-west-1.amazonaws.com/beer.ly/output_yRTFf5.gif"></img>

### Tech Stack
1. Node / Express
1. React 
1. Mongoose/MongoDB
1. Google Maps API
1. StripeJS
1. Material UI
1. BreweryDB
1. S3

## Quick Start


### Fork/Clone
```
git clone https://github.com/ntoung/beer.ly.git
```

### Install Dependencies
```
npm install
```

### Run
```
npm start
```


## Features
### Hot Module Replacement
### Lazy Script Loading
### React CSS Modules
### HTTPS Server / SSL Certification

Instructions on how to get set up with HTTPS

1. Create a key.pem / cert.pem file in the root directory of the project. (Same folder as index.js). Use this command:
  ```
  openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 30

  // For passcode, type 'beerly' for now. You can change the passcode in server/middleware/SSL.js.
  // For Common Name, type 'localhost'.
  // For everything else, you can just leave it blank.
  ```
1. Files have already been added to .gitignore so don't worry about adding them.
1. Start the server as you normally would.
```
npm start
```
1. Go to 'https://localhost:8008' to reach the server. Use https from now on. If you're using Chrome, it's going to complain that it's insecure. Just hit the 'Advanced' button and click 'Continue anyway'. You only have to do this once.

### Webpack Development Middleware

## API

#### GET /api/beers/\<Brewery Name>
This endpoint is needed for the BeerList component. It makes an API request to BreweryDB to retrieve a list of available beers from a brewery.
```
{
  id: "yEusNN",
  name: "Acoustic Blondie",
  nameDisplay: "Acoustic Blondie",
  abv: "6",
  isOrganic: "Y",
  ...
  style: {
    category: {
      id: 5,
      name: "Belgian And French Origin Ales",
    },
    name: "Belgian-Style Blonde Ale",
    shortName: "Belgian Blonde",
    description: "Belgian-style blond ales are characterized by ...",
    ...
  }
},

```
#### GET /api/breweries/\<Location>
This endpoint is needed for the BreweryList component. It makes an API request to BreweryDB to retrieve a list of available breweries at a location.
```
{
id: "wXmTDU",
name: "Main Brewery",
streetAddress: "563 Second Street",
locality: "San Francisco",
region: "California",
postalCode: "94107",
phone: "415-369-0900",
latitude: 37.7824892,
longitude: -122.3924905,

brewery: {
  id: "EdRcIs",
  name: "21st Amendment Brewery",
  description: "The 21st Amendment Brewery offers a variety of...",
  website: "http://www.21st-amendment.com/",
  images: {
    icon: "https://s3.amazonaws.com/brewerydbapi/brewery/EdRcIs/upload_gfSGyp-icon.png",
    medium: "https://s3.amazonaws.com/brewerydbapi/brewery/EdRcIs/upload_gfSGyp-medium.png",
    large: "https://s3.amazonaws.com/brewerydbapi/brewery/EdRcIs/upload_gfSGyp-large.png",
    squareMedium: "https://s3.amazonaws.com/brewerydbapi/brewery/EdRcIs/upload_gfSGyp-squareMedium.png",
    squareLarge: "https://s3.amazonaws.com/brewerydbapi/brewery/EdRcIs/upload_gfSGyp-squareLarge.png"
  },
  ...
},
country: { ... },
```

#### GET /\<Location>
This endpoint is needed for the AutoComplete feature in the Search component. It interacts with Google Maps API and uses a location partial to query for predictions.
```
{
  predictions: [
    {
      description: "San Francisco, CA, United States",
      id: "1b9ea3c094d3ac23c9a3afa8cd4d8a41f05de50a",
      matched_substrings: [ ... ],
    ,
    types: ["locality", "political", "geocode"]
    ...
  ]
}
```


