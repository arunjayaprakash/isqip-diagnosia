var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Disease = mongoose.model('Disease');

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

router.post('/add-disease',function(req,res){
var dis= new Disease();
  dis.diseaseName=req.body.dName;
  dis.diseaseId=req.body.dId;
  dis.save(function(err){ if(err){res.render('index',{title:'Home',message:'error while adding symptom to db'});
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