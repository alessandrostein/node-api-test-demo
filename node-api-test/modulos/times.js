var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var TimesSchema = new Schema({
  nome: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Times', TimesSchema);