// Note Model// User Model
const { Int32 } = require('bson');
var mongoose = require('mongoose');
const Schema = mongoose.Schema
const SupplierSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    productList:[{ type: Schema.Types.ObjectId, ref: 'ProductSchema'}],
    name:{
        type:String,
        require:true
    },

});
module.exports =Supplier= mongoose.model('SupplierSchema', SupplierSchema);