require("dotenv").config();
const express = require("express");
const bodyparser=require('body-parser');
const cors=require('./midllewares/cors');
// const cors = require("cors");

const app = express();

/* load mongoose */ 
require('./services/mongoose')

/* MIDDLEWARE  */
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors);

const PORT = process.env.PORT || 8080; // port at which server listening

// fetch all the required routes here
// let userRouter = require('./routes/user');
let supplierRouter = require('./routes/supplier');
let productRouter=require('./routes/product');

//define root routes here
// app.use('/user', userRouter);
// app.use('/',topicRouter);
app.use('/',productRouter);
app.use('/',supplierRouter);


// sample for express server
app.use("/", (req, res, next) => {
  res.status(200).json({ success: true, data: "Start Here" });
});

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);

