import express from 'express'
const router = express.Router()
import {
  getCommentByPost,
  deleteComment,
  createComment,
  updateComment,

} from '../controllers/commentsController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/:id')
  .get(getCommentByPost)
  .post(protect, admin, createComment)
  .delete(protect, admin, deleteComment)
  .put(protect, admin, updateComment)

export default router
