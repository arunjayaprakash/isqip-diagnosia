
/*
    CONTENTS OF diagnosia_testing db
> db.main.find()
{ "_id" : ObjectId("5b61be2563c0b27f8606d0e4"), "disease" : "d1", "symptoms" : [ "s1", "s2", "s3" ] }
{ "_id" : ObjectId("5b61be7e63c0b27f8606d0e5"), "disease" : "d2", "symptoms" : [ "s2", "s4", "s5" ] }
{ "_id" : ObjectId("5b61c1aa63c0b27f8606d0e6"), "disease" : "d3", "symptoms" : [ "s6", "s7" ] }
*/
var mongoose = require('mongoose')
var Schema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/diagnosia_testing',{useNewUrlParser: true}) // diagnosia_testing is the db
var db = mongoose.connection;

// testing connection succesful
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db \n')

});

var dSchema = new Schema ( {
    disease: String,
      symptoms: {
        type:[String],
        default: undefined
}
},
{collection: 'main'});

var Disease = mongoose.model('main',dSchema); // main is the mongodb collection name

var in_arr = [];



//user input symptoms to be pushed into in_arr
in_arr.push('s2','s5');

Disease.find({ "symptoms" : { $in: in_arr }  } ,function(err,results){
  console.log("Possible diseases are:");

    results.forEach(function(item){

      var count = 0;
      in_arr.forEach(function(item2){
        if ( item.symptoms.includes(item2) ){

        count = count + 1;    // count of number of matching symptoms

        
      }

      });

        console.log("DISEASE: " + item.disease);
        //console.log(item.symptoms.length); // length of symptoms array of disease
        //console.log(count);
        console.log("PROBABILITY: " + (count/item.symptoms.length)*100 );
        console.log("\n");
      
    });
    // all matching results
    //console.log(results);
    
})
