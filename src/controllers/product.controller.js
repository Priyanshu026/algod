const Product = require("../models/Product");
const mongoose = require("mongoose");

const addProduct = async (req, res) => {
  //addNote api logic here
  console.log("create Post is being called");
  console.log(req.body);
  var obj = {};
  var newProduct = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    type: req.body.type,
    category: req.body.category,
    price: req.body.price
  });

  console.log(newProduct);
  await newProduct
    .save()
    .then(() => {
      obj["status"] = "success";
      obj["message"] = "product is added successfully";
      obj["data"] = newProduct;
      res.status(200).send(obj);
    })
    .catch((err) => {
      obj["status"] = "error";
      obj["message"] = err.message;
      console.log("Error is ", err.message);
      res.status(400).send(obj);
    });
};


const updateproduct = async (req, res) => {
  console.log(req.body);
  var obj = {};


  await Product.findOne({ _id: req.body.productId })
    .then(async (product) => {
      if (!product) {
        obj["status"] = "error";
        obj["message"] = "Product not found";
        res.status(400).send(obj);
      } else {
        console.log(product);

        Product.updateOne({ _id: req.body.productId }, { $set: req.body.details })
          .then(async (supplier) => {
            obj["status"] = "success";
            obj["message"] = "supplier is updated successfully";
            obj["data"] = supplier;
            res.status(200).send(obj);
          })
          .catch((err) => {
            console.log("Error is", err.message);
            obj["status"] = "error";
            obj["message"] = err.message;
            console.log("Error is ", err.message);
            res.status(400).send(obj);
          });

      }
    })
    .catch((err) => {
      console.log("Error is", err.message);
      obj["status"] = "error";
      obj["message"] = err.message;
      console.log("Error is ", err.message);
      res.status(400).send(obj);
    });
}

const search = async (req, res) => {
  // let queryparams=re.query
  console.log(req.query)
  let obj = {}
  // let name=req.query.name 
  let minPrice=req.query.minPrice || 0;
  let maxPrice=req.query.maxPrice || 2000000000;
  delete req.query.minPrice
  delete req.query.maxPrice
  console.log(req.query)
  await Product.aggregate().match({...req.query,price:{$gte:Number(minPrice),$lte:Number(maxPrice)}})
  .then(product => {
    if (!product) {
      obj["status"] = "success";
      obj["message"] = "Product not found";
      res.status(200).send(obj);
    }
    else {
      obj["status"] = "success";
      obj["message"] = "Product found";
      obj['data'] = product
      res.status(200).send(obj);
    }
  }).catch((err) => {
    console.log("Error is", err.message);
    obj["status"] = "error";
    obj["message"] = err.message;
    console.log("Error is ", err.message);
    res.status(400).send(obj);
  })
  // let data = await Product.find({
  //   "$or":[{"name":{$regex:req.params.key}},
  //   {"category":{$regex:req.params.key}}
  // ]  
  // })
  // res.send(data);
}
const PostController = {
  addProduct,
  updateproduct,
  search
};

module.exports = PostController;