const mongoose = require("mongoose");
const Supplier = require("../models/Supplier");

const addProductsbySupplier = async (req, res) => {
  console.log(req.body);
  var obj = {};


    await Supplier.findOne({ _id: req.body.supplierId })
      .then(async (supplier) => {
        if (!supplier) {
              obj["status"] = "error";
              obj["message"] = "Supplier not found";
              res.status(400).send(obj);
        } else {
          console.log(supplier);
          Supplier.updateOne({_id:req.body.supplierId}, {$push: {'productList': req.body.productIdList}})
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

const removeProductsbySupplier = async (req, res) => {
  console.log(req.body);
  var obj = {};


    await Supplier.findOne({ _id: req.body.supplierId })
      .then(async (supplier) => {
        if (!supplier) {
              obj["status"] = "error";
              obj["message"] = "Supplier not found";
              res.status(400).send(obj);
        } else {
          console.log(supplier);
          Supplier.updateOne({_id:req.body.supplierId}, {$pull: {'productList': req.body.productIdList}})
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

const getSupplier = async (req, res) => {
  console.log(req.body);
  var obj = {};

    await Supplier.findOne({ _id: req.body.supplierId })
      .populate("productList")
      .then(async (supplier) => {
        if (!supplier) {
              obj["status"] = "error";
              obj["message"] = "Supplier not found";
              res.status(400).send(obj);
        } else {
          console.log(supplier);
            obj["status"] = "success";
            obj["message"] = "supplier found";
            obj["data"] = supplier;
            res.status(200).send(obj);
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

const addSupplier = async (req, res) => {
  //addTopic api logic here
  //console.log("add topic is being called");
  console.log(req.body);
  var obj = {};

  var supplier = new Supplier({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });
  
  console.log(supplier);
  await supplier
            .save()
            .then(() => {
              obj["status"] = "success";
              obj["message"] = "supplier is added successfully";
              obj["data"] = supplier;
              res.status(200).send(obj);
            })
            .catch((err) => {
              obj["status"] = "error";
              obj["message"] = err.message;
              console.log("Error is ", err.message);
              res.status(400).send(obj);
            });

  // if (newTopic.description.length < 5 || newTopic.description.length > 100) {
  //   obj["status"] = "Error";
  //   obj["message"] = "Topic Description should be min 5 and max 100 chars";
  //   res.status(400).send(obj);
  // } else {
  //   await Topic.findOne({ name: newTopic.name })
  //     .then(async (profile) => {
  //       if (!profile) {
  //         await newTopic
  //           .save()
  //           .then(() => {
  //             obj["status"] = "success";
  //             obj["message"] = "Topic is added successfully";
  //             obj["data"] = newTopic;
  //             res.status(200).send(obj);
  //           })
  //           .catch((err) => {
  //             obj["status"] = "error";
  //             obj["message"] = err.message;
  //             console.log("Error is ", err.message);
  //             res.status(400).send(obj);
  //           });
  //       } else {
  //         obj["status"] = "error";
  //         obj["message"] = "Topic Name Already exists!";
  //         res.status(400).send(obj);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("Error is", err.message);
  //       obj["status"] = "error";
  //       obj["message"] = err.message;
  //       console.log("Error is ", err.message);
  //       res.status(400).send(obj);
  //     });
  // }
};



// const getTopic = (req, res) => {
//   //getTopic api logic here
//   console.log("get topic is being called");
//   Topic.find()
//     .then((topics) => {
//       res.send({
//         status: "success",
//         data: topics,
//         msg: "Topics gets Successfully",
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ status: "error", msg: err.message });
//     });
// };

// const getSingleTopic = (req, res) => {
//   //getTopic api logic here
//   console.log("get topic is being called");
//   Topic.findOne({ _id: req.params.topicId })
//     .then((topics) => {
//       if (topics){
//         res.send({
//           status: "success",
//           data: topics,
//           msg: "TopicId Found",
//         });
//       }
//       else{
//         res.send({
//           status: "success",
//           msg: "topicId ID does not exist",
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ status: "error", msg: err.message });
//     });
// };

// const deleteTopic = (req, res) => {
//   //deletePost api logic here
//   console.log("delete topic is being called", req.params.topicId);
//   Topic.findOneAndRemove({ _id: req.params.topicId })
//     .then((deleted_doc) => {
//       if (deleted_doc) {
//         res.send({
//           status: "success",
//           data: [deleted_doc],
//           msg: "Topic deleted successfully.",
//         });
//       } else {
//         res.send({
//           status: "success",
//           msg: "No Topic Found ",
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ status: "error", msg: err.message });
//     });
// };

const SupplierController = {
  addSupplier,
  addProductsbySupplier,
  getSupplier,
  removeProductsbySupplier
};

module.exports = SupplierController;
