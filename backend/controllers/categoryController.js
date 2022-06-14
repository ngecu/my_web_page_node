import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getCategories = asyncHandler(async (req, res) => {

  // const count = await Category.countDocuments({ ...keyword })
  const categories = await Category.find()

  res.json({ categories })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id)

  if (category) {
    await category.remove()
    res.json({ message: 'category removed' })
  } else {
    res.status(404)
    throw new Error('category not found')
  }
})

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const category = new Category({
    name: 'Category 1',
    color: 'Clor Field',
    slug: 'my_slug',
    image:'my_image'
  })

  const createdCategory = await category.save()
  res.status(201).json(createdCategory)
})

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateCategory = asyncHandler(async (req, res) => {
  const {
    category,
    title,
    slug,
    image,
    body,
    published,
    
  } = req.body

  const category_found = await Category.findById(req.params.id)

  if (category_found) {
    category_found.name = name
    category_found.color = color
    category_found.slug = description
    category_found.image = image


    const updatedCategory = await category_found.save()
    res.json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})




export {
  getCategories,
  getCategoryById,
  deleteCategory,
  createCategory,
  updateCategory,
}
