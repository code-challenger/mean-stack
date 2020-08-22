const express = require('express');
const checkJWT = require('../middleware/check-auth');
const extractFile = require('../middleware/file');
const router = express.Router();
const postController = require('../controllers/posts');

router.get('/', postController.getPosts);

router.get('/:id', postController.getPost);

router.post('', checkJWT, extractFile, postController.createPost);

router.put('/:id',checkJWT, extractFile, postController.updatePost);

router.delete('/:id', checkJWT, postController.deletePost);

module.exports = router;
