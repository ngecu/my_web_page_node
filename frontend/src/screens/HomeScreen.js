import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,Alert } from 'react-bootstrap'
import Post from '../components/Post'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listPosts } from '../actions/postActions'
import { listCourses } from '../actions/courseActions'
import Course from '../components/Course'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  // const postList = useSelector((state) => state.postList)

  // const { loading, error, posts, page, pages } = postList

  const postList = useSelector((state) => state.postList)
  const { loading, error, posts, page, pages } = postList

  const courseList = useSelector((state) => state.courseList)
  const { loading_course, error_course, courses } = courseList

  useEffect(() => {
    dispatch(listPosts(keyword, pageNumber))
    dispatch(listCourses(keyword, pageNumber))

  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {posts.length > 0 && posts.map((post) => (
              <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
                <Post post={post} />
              </Col>
            ))}

            {posts.length == 0 &&  
             <Col sm={12} md={12} lg={12} xl={12}>
            <Alert key="danger" variant="danger">
     No Posts Currently
    </Alert>
    </Col>
            }
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}

<h1>Latest Courses</h1>
      {loading_course ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error_course}</Message>
      ) : (
        <>
          <Row>
            {courses.map((course) => (
              <Col key={course._id} sm={12} md={6} lg={4} xl={3} >
                <Course course={course} />
              </Col>
            ))}

{courses.length == 0 &&  
            <Col  sm={12} md={12} lg={12} xl={12}>
            <Alert key="danger" variant="danger">
     No Courses available Currently
    </Alert>
    </Col>
            }

          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
