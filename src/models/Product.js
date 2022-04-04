// Note Model// User Model
const { Int32 } = require('bson');
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    // supplierId:{ type: Schema.Types.ObjectId, ref: 'SupplierSchema'},
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
});
module.exports = Product =  mongoose.model('ProductSchema', ProductSchema)