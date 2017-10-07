var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var shortid = require('shortid');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

// Unsafely enable cors
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// logging middleware
router.use(function(req, res, next) {
    console.log('\nReceived:',{url: req.originalUrl, body: req.body, query: req.query});
    next();
})

// Simple in memory database
const database = [
  { name: 'Black Suit', id: 123451, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Midnight Navy Suit', id: 123452, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Grey Suit', id: 123453, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Dark Brown Suit', id: 123454, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Pitch Black Suit', id: 123455, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Deeper Grey Suit', id: 123456, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false},
  { name: 'Herringbon Suit', id: 123457, images: {0: "", 1: "", 2: ""}, reaction: {}, selected: false, trashed: false}
]

// Utility functions
const findItem = (itemId) => {
  const item = database.find((item) => {
    return item.id === parseInt(itemId);
  });
  if (item === undefined){
    return {error: `a item with id ${itemId} does not exist`};
  }
  return item;
};

const findItemIndex = (itemId) => {
  const itemIndex = database.findIndex((item) => {
    return item.id === parseInt(itemId);
  });
  return itemIndex;
}

const findReactionIndex = (item, reactionId) => {
  const reactionIndex = item.reactions.findIndex((reaction) => {
    return reaction.id === reactionId;
  });
  return reactionIndex;
};

const logImage = (item, imagename) => {
  const imageNotLogged = !item.images.find((image) => {
    return image === imagename;
  });

  if (imageNotLogged) {
    item.images.push(imagename);
  }
}

// API Routes
router.get('/items', function(req, res) {
    const items = database.map((item) => {
      return {name: item.name, id: item.id};
    })
    console.log('Response:',items);
    res.json(items);
});

router.get('/items/:itemId', function(req, res) {
  item = findItem(req.params.itemId);
  if (item.error) {
    console.log('Response:',item);
    res.json(item);
  } else {
    console.log('Response:',{name: item.name, id: item.id, images: item.images});
    res.json({name: item.name, id: item.id, images: item.images});
  };
});

router.route('/items/:itemId/reactions')
  .get(function(req, res) {
    item = findItem(req.params.itemId);
    if (item.error) {
      console.log('Response:',item);
      res.json(item);
    } else {
      console.log('Response:',item.reactions);
      res.json(item.reactions);
    };
  })
  .post(function(req, res) {
    item = findItem(req.params.itemId);
    if (item.error) {
      console.log('Response:',item);
      res.json(item);
    } else if (!req.body.name || !req.body.reaction) {
      console.log('Response:',{error: 'request missing name or reaction'});
      res.json({error: 'request missing name or reaction'});
    } else {
      logImage(item, req.body.name);
      const reaction = req.body.reaction || null;
      item.reactions.push({name: req.body.name, reaction: req.body.reaction, id: shortid.generate(), reaction});
      console.log('Response:',{reaction: 'OK!'});
      res.json({reaction: 'OK!'});
    };
  });

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);
