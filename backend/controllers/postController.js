import asyncHandler from 'express-async-handler'
import Post from '../models/PostModel.js'

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
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

  const count = await Post.countDocuments({ ...keyword })
  const posts = await Post.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ posts, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

  if (post) {
    res.json(post)
  } else {
    res.status(404)
    throw new Error('Post not found')
  }
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id)

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
const createPost = asyncHandler(async (req, res) => {
  const post = new Post({
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
const updatePost = asyncHandler(async (req, res) => {
  const {
    category,
    title,
    slug,
    image,
    body,
    published,
    
  } = req.body

  const post = await Post.findById(req.params.id)

  if (post) {
    post.name = name
    post.price = price
    post.description = description
    post.image = image
    post.brand = brand
    post.category = category
    post.countInStock = countInStock

    const updatedPost = await post.save()
    res.json(updatedPost)
  } else {
    res.status(404)
    throw new Error('post not found')
  }
})

// @desc    Create new review
// @route   POST /api/products/:id/reviews
// @access  Private
const createProductReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const product = await Product.findById(req.params.id)

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Product already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    product.reviews.push(review)

    product.numReviews = product.reviews.length

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length

    await product.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Get top rated products
// @route   GET /api/products/top
// @access  Public
const getTopPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({}).sort({ rating: -1 }).limit(3)

  res.json(posts)
})

export {
  getPosts,
  getPostById,
  deletePost,
  createPost,
  updatePost,
  // createProductReview,
  getTopPosts,
}
