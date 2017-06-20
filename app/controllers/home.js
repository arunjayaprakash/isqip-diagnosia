var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  SymptomDisease = mongoose.model('SymptomDisease');

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

router.get('/add-diseasesymptom',function(req,res){
  res.render('form1',{});

  });

router.get('/identifydisease',function(req,res){
  res.render('form2',{});

  }); 

/*router.post('/identifydisease',function(req,res){
	var sd = new SymptomDisease();
	sd.symptomId=req.body.fever? true : false;
/*	sd.symptomId=req.body.headache? true : false;
	sd.symptomId=req.body.loa? true : false;
	
	//if(sd.symptomId=req.body.fever){
		console.log(req.body);
		if (sd.symptomId='on'){
			SymptomDisease
				.find({
					symptomId:'1'
			})
		
				.select('diseaseIdList')
				.exec(function(err,dArray){
					if(err){
						res.render('index', {
						 	message: 'Failed'
						});
						   }		
					else{
						res.render('diseaseoutput',{
							disease: dArray
						})
						}	
						
					})
				

		}
}); 

*/
	//}
	







router.post('/add-diseasesymptom',function(req,res){
var symdis= new SymptomDisease();
  symdis.sdId=req.body.sdIdfrontend;
  symdis.symptomId=req.body.sIdfrontend;	
  symdis.save(function(err){ if(err){res.render('index',{title:'Home',message:'error while adding symptom to db'});
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