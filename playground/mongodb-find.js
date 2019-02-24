// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
  if(err)
  {
    return console.log("Unable to connect to mongo server");
  }
  console.log("Connect to mongo server");

db.collection('Users').find({name: "Kanishk"}).toArray().then((docs) => {
  console.log('Fetched documents are');
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch documents', err);
})

  // db.close();
});
