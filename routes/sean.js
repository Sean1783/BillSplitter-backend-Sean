var express = require('express');
var router = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://seanarcher3:8uk8BvWOGIj7ZdIz@cluster0.xotrlyl.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");



    const myDB = client.db("BSDB1");
    // await myDB.collection('BSDB1').insertOne({
    //   'fname': 'Kitty',
    //   'age': '6'
    // });


    // const query = { 'fname': { $eq: "Kitty"}  };
    const query = {'fname': "Kitty" };

    // { qty: { $gt: 4 } } 
    records = myDB.collection('BSDB1');
    const cursor = records.find(query);


    // Print returned documents
    for await (const doc of cursor) {
      console.log(doc);
    }



  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


router.get('/', function(req, res) {
  res.send('This is a GET response from Sean.');
});

router.get('/search/question', function(req, res) {

  // Working example.
  // http://localhost:3000/sean/search/question?q=&fresh&topic&cats=food&food

    searchWords = ["topic", "cats", "food"];
    searchComplete = true;
    const searchParams = new URLSearchParams(req.originalUrl);

    for (i = 0; i < searchWords.length; i++) {
      if (!searchParams.has(searchWords[i])){
        searchComplete = false;
      }
    }
    res.send(searchComplete);
});



router.get('/search', function(req, res) {
  keys = Object.keys(req.query);
  if (keys.length > 0) {
    res.send("Search keys " + keys);  
  } else {
    res.send("No keys in query.")
  }
  
});
  

module.exports = router;
