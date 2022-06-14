import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'



// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const pageSize = 10
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Course.countDocuments({ ...keyword })
  const posts = await Course.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ posts, page, pages: Math.ceil(count / pageSize) })
})



// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
  const post = await Course.findById(req.params.id)

  if (post) {
    await post.remove()
    res.json({ message: 'Post removed' })
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createComment = asyncHandler(async (req, res) => {
  const comment = new Course({
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
const updateCourse = asyncHandler(async (req, res) => {
  const {
    text
    
  } = req.body

  const comment = await Course.findById(req.params.id)

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
  getCourses,
  createComment,
    deleteCourse,
    updateCourse
  }
  

