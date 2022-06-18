import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'



// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find().populate("user")


  res.json({ courses })
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

const {user,name,image,description,price} = req.body;
const category = "62ac8a75e1b4a62e1468f066"

console.log(req.body)

  const course = new Course({user,name,image,category,description,price })

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





const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id).populate("user")

  if (course) {
    res.json(course)
  } else {
    res.status(404)
    throw new Error('Course not found')
  }
})

export {
  getCourses,
  createCourse,
  deleteCourse,
  updateCourse,
  getCourseById
  }
  

