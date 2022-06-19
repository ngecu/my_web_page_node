import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import {
  listCourses,
  deleteCourse,
  createCourse,
} from '../actions/courseActions'
import { COURSE_CREATE_RESET } from '../constants/courseConstants'

import Course from "../components/Course";

const CourseListScreen = ({ history, match }) => {
    const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1


  const dispatch = useDispatch()

  const courseList = useSelector((state) => state.courseList)
  const { loading, error, courses, page, pages } = courseList

  const courseDelete = useSelector((state) => state.courseDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = courseDelete

  const courseCreate = useSelector((state) => state.courseCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    course: createdCourse,
  } = courseCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(listCourses(keyword, pageNumber))

  }, [dispatch, keyword, pageNumber])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteCourse(id))
    }
  }

  const createCourseHandler = () => {
    dispatch(createCourse())
  }

  return (
 <>
         {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
            <div className="container">
                
            <section className="recent-posts">
                    <div className="section-title">
                        <h2><span>All Courses</span></h2>
                    </div>



                    <div className="card-columns listrecent row">
                        {courses.map((course) => (

                                <Course course={course}  />



                        ))}


                    </div>
                </section>




            </div>

      )}


        </>
  )
}

export default CourseListScreen
