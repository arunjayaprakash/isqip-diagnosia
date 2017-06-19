var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Symptom = mongoose.model('Symptom');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Student.find(function (err, articles) {
    if (err) return next(err);
    res.render('index', {
      title: 'Generator-Express MVC',
      /*articles: articles*/  
    });
  });
});

router.get('/add-disease',function(req,res){
  res.render('form1',{});

  });

router.post('/add-symptom',function(req,res){
var sym= new Symptom();
  sym.symptomName=req.body.sName;
  sym.symptomId=req.body.sId;
  sym.save(function(err){ if(err){res.render('index',{title:'Home',message:'error while adding symptom to db'});
  }
  else{
    res.render('index',{
      title:'Home',
      message:'Success'
    });

  }
});
 

});

router.get('/view',function(req,res){
  res.render('view',{});

  });
router.post('/view',function(req,res){
  console.log(req.body);
});