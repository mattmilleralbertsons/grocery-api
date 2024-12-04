var express = require('express');
var router = express.Router();

const STORES = [
  {
    "storeId": 1,
    "name": "Albertsons",
    "City": "Dallas",
    "state": "TX",
  }
]

const PRODUCTS = [
  {
    "productId": 1,
    "title": "Banana",
    "rank": 1
  },
  {
    "productId": 2,
    "title": "Apple",
    "rank": 2
  },
  {
    "productId": 3,
    "title": "Coffee",
    "rank": 3
  },
  {
    "productId": 4,
    "title": "Orange",
    "rank": 4
  },
  {
    "productId": 5,
    "title": "Pop Tart",
    "rank": 5
  },
  {
    "productId": 6,
    "title": "Onion",
    "rank": 6
  },
  {
    "productId": 7,
    "title": "Potato",
    "rank": 7
  }
]

const INVENTORY = [
  {
    "productId": 1,
    "quantity": 0
  },
  {
    "productId": 2,
    "quantity": 5
  },
  {
    "productId": 3,
    "quantity": 20
  },
  {
    "productId": 4,
    "quantity": 1
  },
  {
    "productId": 5,
    "quantity": 200
  },
  {
    "productId": 6,
    "quantity": 66
  },
  {
    "productId": 7,
    "quantity": 55
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/stores/:storeId', function(req, res, next) {
  found = STORES.find(store => store.storeId == req.params.storeId);
  if (!found) {
    res.status(404);
  }
  
  res.json(found);
});

router.get('/products', function(req, res, next) {
  res.json(PRODUCTS);
});

router.get('/products/:productId', function(req, res, next) {
  found = PRODUCTS.find(product => product.productId == req.params.productId);
  if (!found) {
    res.status(404);
  }

  res.json(found);
});

router.get('/inventories/:productId', function(req, res, next) {
  found = INVENTORY.find(product => product.productId == req.params.productId);
  if (!found) {
    res.status(404);
  }

  res.json(found);
});

module.exports = router;
