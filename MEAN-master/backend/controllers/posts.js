const Post = require('../models/post');

exports.createPost = function (req, res, next) {
  const url = req.protocol + '://' + req.get('host');
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    imagePath: url + '/images/' + req.file.filename,
    creator: req.userData.userId
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: 'Post addeded successfully!',
      post: {
        ...createdPost,
        id: createdPost._id,
      }
    })
  })
  .catch(error => {
    res.status(500).json({
      message: 'Creating a post failed!'
    });
  });
};

exports.updatePost = function (req, res, next) {
  let imagePath = req.body.imagePath; // imagePath is string
  if (req.file) {
    const url = req.protocol + '://' + req.get('host');
    imagePath = url + "/images/" + req.file.filename;
  }
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content,
    imagePath: imagePath,
    creator: req.userData.userId
  });
  Post.updateOne({_id: req.params.id, creator: req.userData.userId }, post).then(updatedPost => {
    if (updatedPost.n > 0) {
      res.status(200).json({ message: 'Updated Successfully!' });
    } else {
      res.status(401).json({ message: 'Not Authorization' });
    }

  }).catch(error => { res.status(500).json({
    message: 'Couldn\'t update post!'
  }); })
};

exports.getPosts =  function (req, res, next) {
  const pageSize = +req.query.pageSize; // + will convert string to number
  const curentPage = +req.query.page;
  const postQuery = Post.find();
  let fetchedPosts;
  if (pageSize && curentPage) {
    postQuery
      .skip(pageSize * (curentPage - 1))
      .limit(pageSize);
  }
  postQuery.then((document)=>{
    fetchedPosts = document;
    return Post.countDocuments();
  })
  .then(count => {
    res.status(200).json({
      message: 'Post fetched successfully',
      posts: fetchedPosts,
      maxPosts: count
    });
  })
  .catch(error => { res.status(500).json({
    message: 'Fetching posts failed!'
  }); });
};

exports.getPost = function (req, res, next) {
  Post.findById(req.params.id).then(post => {
    if(post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  })
  .catch(error => res.status(500).json({
    message: 'Fetching Post failed!'
  }));
};

exports.deletePost = function (req, res, next) {
  Post.deleteOne({ _id: req.params.id, creator: req.userData.userId }).then((result) => {
    if (result.n > 0) {
      res.status(200).json({ message: 'post deleted successfully!' });
    } else {
      res.status(401).json({ message: 'Not Authorization' });
    }
  })
  .catch((reason) => {
    res.status(500).json({ message: 'Something went wrong!' });
    console.log(reason);
  });
};
