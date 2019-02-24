// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err,db) => {
  if(err)
  {
    return console.log("Unable to connect to mongo server");
  }
  console.log("Connect to mongo server");


  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result) => {
  //   if(err)
  //   {
  //     return console.log('Unable to add to Todos', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })
//
// db.collection('Users').insertOne({
//   name: 'Kanishk',
//   age: 20,
//   location: 'Delhi'
// }, (err,result) => {
//   if(err)
//   {
//     return console.log('Unable to add the user', err);
//   }
//   console.log(result.ops);
// });


  db.close();
});
