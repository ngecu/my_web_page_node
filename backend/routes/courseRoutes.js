import express from 'express'
const router = express.Router()
import {
  getCourses,
  // getPostById,
  deleteCourse,
  createCourse,
  updateCourse,
  // getTopPosts,
} from '../controllers/courseController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getCourses).post(createCourse)
// router.get('/top', getTopPosts)
router
  .route('/:id')
  // .get(getPostById)
  .delete(protect, admin, deleteCourse)
  .put(protect, admin, updateCourse)

export default router
