const mongoose = require('mongoose');
//require('mongoose-currency').loadType(mongoose);
//var Currency = mongoose.Types.Currency;


const Schema = mongoose.Schema;


const branchSchema = new Schema({
    collegeName: {
        type:String,
        required: true
    },
    name: {
       type: String,
       required:true
   },
    cutoff: [{
        category: String,
        rank: Number
    }]

});
var Branches = mongoose.model('branch',branchSchema);
module.exports = Branches;