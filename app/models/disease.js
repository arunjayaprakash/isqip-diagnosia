var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var DiseaseSchema = new Schema({
  diseaseName: String,
  symptomId:Number,
  fatal: Boolean
			});

mongoose.model('Disease', DiseaseSchema);

