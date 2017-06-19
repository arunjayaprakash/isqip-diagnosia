var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DiseaseSchema = new Schema({
  diseaseName: String,
  diseaseId:Number,
  fatal: Boolean
			});

mongoose.model('Disease', DiseaseSchema);

