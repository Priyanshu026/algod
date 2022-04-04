require('dotenv').config()
const mongoose = require('mongoose');

const user_id = process.env.user_id;
const paswd = process.env.user_password;

const url = 'mongodb+srv://priyanshup:1234@cluster0.awvmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const url1=process.env.mongo_url

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database is connected");
    })
    .catch(err => {
        console.log("Error is ", err.message);
    });

module.exports=mongoose;