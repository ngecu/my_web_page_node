import asyncHandler from 'express-async-handler'
import commentsCoursePost from '../models/commentsCoursePostModel.js'


// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public

const getAllCoursePosts = asyncHandler(async (req, res) => {
  const courseposts = await commentsCoursePost.find()

  if (courseposts) {
    res.json(courseposts)
  } else {
    res.status(404)
    throw new Error('course posts not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin

const deleteCoursePost = asyncHandler(async (req, res) => {
  const courseposts = await commentsCoursePost.findById(req.params.id)

  if (courseposts) {
    await courseposts.remove()
    res.json({ message: 'coursepost removed' })
  } else {
    res.status(404)
    throw new Error('coursepost not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createCoursePost = asyncHandler(async (req, res) => {
  const CoursePost = new CoursePost({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample description',
  })

  const createdPost = await post.save()
  res.status(201).json(createdPost)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateCoursePost = asyncHandler(async (req, res) => {
  const {
    text
    
  } = req.body

  const comment = await commentsCoursePost.findById(req.params.id)

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
    getCommentByCourse,
    createComment,
    deleteComment,
    updateComment
  }
  

