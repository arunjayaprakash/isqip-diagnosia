var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SymptomSchema = new Schema({
  symptomName: String,
	symptomId: Number  
   });
mongoose.model('Symptom', SymptomSchema);