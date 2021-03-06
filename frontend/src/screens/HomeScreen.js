import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,Alert,Button } from 'react-bootstrap'
import Post from '../components/Post'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import Meta from '../components/Meta'
import { listPosts } from '../actions/postActions'
import { listCourses } from '../actions/courseActions'
import Course from '../components/Course'
import Quote from '../components/Quote'
import logo from '../components/9932f1_c33450aa552f4a64b2b679b4df61cfbd~mv2.gif';


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
      <UnderConstruction />
      <AlertDismissible />
      
      
      <h1>Latest Posts</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {posts.length > 0 && posts.slice(0,4).map((post) => (
              
                <Post post={post} />
              
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
            {courses && courses.slice(0,4).map((course) => (
             
                <Course course={course} />
             
            ))}

{courses && courses.length == 0 &&  
            <Col  sm={12} md={12} lg={12} xl={12}>
            <Alert key="danger" variant="danger">
     No Courses available Currently
    </Alert>
    </Col>
            }

{!courses &&
            <Col  sm={12} md={12} lg={12} xl={12}>
            <Alert key="danger" variant="danger">
     {error_course}
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



function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success"  onClose={() => setShow(false)} dismissible>
        <Alert.Heading className="text-center">  <Quote /></Alert.Heading>

      </Alert>
    </>
  );
}


function UnderConstruction() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="warning"  onClose={() => setShow(false)} dismissible>
      
      <div className="text-center">
          We Are Working on something aweome.Stay Tuned.....Meanwhile here is a quote for you &#128512;
      </div>
      </Alert>
    </>
  );
}