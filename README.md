# Interview Instructions
We will be building a simple UI that will make use of the API provided in this github repo, Please have your interview computer setup to run this API, and have your environment ready to create a new UI using the react-js framework.

# Suggested React Setup
https://create-react-app.dev/

# API Install Directions
## All Platforms
* Install nodejs (validated on node v22)

## Commands to install packages and start the server in debug-mode (more logs)
```
npm install && DEBUG=grocery-api:* npm start
```

## Curls to work with API
```
curl http://localhost:3001/stores/1
{"storeId":1,"name":"Albertsons","City":"Dallas","state":"TX"}%

curl http://localhost:3001/products
[{"productId":1,"title":"Banana","rank":1},{"productId":2,"title":"Apple","rank":2},{"productId":3,"title":"Coffee","rank":3},{"productId":4,"title":"Orange","rank":4},{"productId":5,"title":"Pop Tart","rank":5},{"productId":6,"title":"Onion","rank":6},{"productId":7,"title":"Potato","rank":7}]%

curl http://localhost:3001/products/1
{"productId":1,"title":"Banana","rank":1}%

curl http://localhost:3001/inventories/1
{"productId":1,"quantity":0}%
```