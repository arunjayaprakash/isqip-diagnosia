var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SymptomDiseaseSchema = new Schema({
  	sdId: Number,
	symptomId: Number,
	diseaseIdList: Array
   });
mongoose.model('SymptomDisease', SymptomDiseaseSchema);