const express = require('express');
const Post = require('./models/post');
const path = require('path');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');
const app = express();
const bodyParser = require('body-parser');

mongoose.connect( "mongodb+srv://Hny:"
  + process.env.MONGO_ATLAS_PW +
  "@cluster0-bvc4k.mongodb.net/node-angular?retryWrites=true" , {
  useNewUrlParser: true,
  useUnifiedTopology: true
 })
.then(()=>{
  console.log('Connected to database');
})
.catch((reason)=>{
  console.error('Connection failed', '\n');
  console.log(reason);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/images', express.static(path.join('backend/images')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use('/api/posts', postsRoutes);
app.use('/api/user', userRoutes);


module.exports = app;
