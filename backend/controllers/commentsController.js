import asyncHandler from 'express-async-handler'
import Comment from '../models/commentsModel.js'


// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getCommentByPost = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id)

  if (comment) {
    res.json(comment)
  } else {
    res.status(404)
    throw new Error('comment not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteComment = asyncHandler(async (req, res) => {
  const post = await Comment.findById(req.params.id)

  if (post) {
    await post.remove()
    res.json({ message: 'Comment removed' })
  } else {
    res.status(404)
    throw new Error('Comment not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createComment = asyncHandler(async (req, res) => {
  const comment = new Comment({
    text: 'my comment'
  })

  const createdComment = await post.save()
  res.status(201).json(createdComment)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateComment = asyncHandler(async (req, res) => {
  const {
    text
    
  } = req.body

  const comment = await Comment.findById(req.params.id)

  if (comment) {
    comment.text = text


    const updatedComment = await post.save()
    res.json(updatedComment)
  } else {
    res.status(404)
    throw new Error('Comment not found')
  }
})

export {
  getCommentByPost,
  createComment,
    deleteComment,
    updateComment
  }
  

