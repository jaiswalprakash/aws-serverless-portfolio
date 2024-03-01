const serverless = require("serverless-http");
const express = require("express");
const app = express();

const {prakash} = require('./src/utility/prakash-portfolio')
const {getObjectURL} = require('./src/AWS-S3/S3-service')

app.get("/prakash-portfolio", (req, res, next) => {
  return res.status(200).json(prakash);
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


app.listen(3000,()=>{
  console.log('app runing on port 3000')
});



module.exports.handler = serverless(app);
