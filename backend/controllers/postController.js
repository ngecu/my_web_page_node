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

  const {user,category,title,slug,image,body} = req.body;

  const post = new Post({user,category,title,slug,image,body})

  console.log("i am post is ",post)

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
    published
  } = req.body

  const post = await Post.findById(req.params.id)

  if (post) {
    post.category = category
    post.title = title
    post.slug = slug
    post.image = image
    post.body = body,
    post.published = published

    const updatedPost = await post.save()
    res.json(updatedPost)
  } else {
    res.status(404)
    throw new Error('post not found')
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
  getTopPosts,
}
