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
  const courses = await Course.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ courses, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

  if (course) {
    await course.remove()
    res.json({ message: 'course removed' })
  } else {
    res.status(404)
    throw new Error('course not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {

const {user,name,image,category,description,reviews,price} = req.body;

  const course = new Course({user,name,image,category,description,reviews,price })

  const createdCourse = await course.save()
  res.status(201).json(createdCourse)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
  const {name,image,category,description,reviews,rating,numReviews,price} = req.body

  const course = await Course.findById(req.params.id)

  if (course) {
    course.name = name
    course.image = image
    course.category = category
    course.description = description
    course.reviews = reviews
    course.rating = rating
    course.numReviews = numReviews
    course.price = price

    const updatedCourse = await course.save()
    res.json(updatedCourse)
  } else {
    res.status(404)
    throw new Error('Cuorse not found')
  }
})

export {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse
  }
  

