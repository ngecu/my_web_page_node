import express from 'express'
const router = express.Router()
import {
  getPosts,
  getPostById,
  deletePost,
  createPost,
  updatePost,
  getTopPosts,
  authorProfile
} from '../controllers/postController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/author/:authorid').get(authorProfile)
router.route('/').get(getPosts).post(createPost)
router.get('/top', getTopPosts)
router
  .route('/:id')
  .get(getPostById)
  .delete(deletePost)
  .put(protect, admin, updatePost)

export default router
