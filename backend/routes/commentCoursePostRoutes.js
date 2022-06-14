import express from 'express'
const router = express.Router()
import {
  getCommentByCourse,
  deleteComment,
  createComment,
  updateComment,

} from '../controllers/commentCoursePostController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/:id')
  .get(getCommentByCourse)
  .post(protect, admin, createComment)
  .delete(protect, admin, deleteComment)
  .put(protect, admin, updateComment)

export default router
