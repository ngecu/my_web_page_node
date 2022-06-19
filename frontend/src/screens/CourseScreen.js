import React, {  useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col,Container, Image, ListGroup, Card, Button,Modal, Badge} from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Markup } from 'interweave';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Author from "../components/Author";
import './CSS/PostScreen.css'
import Meta from '../components/Meta'

import {listCourseDetails} from '../actions/courseActions'



import {getAuthorDetails} from '../actions/userActions'
import Tag from "../components/Tag";
import Rating from '../components/Rating';
import logo from '../components/9932f1_c33450aa552f4a64b2b679b4df61cfbd~mv2.gif';

const PostScreen = ({ match }) => {

    const dispatch = useDispatch()

    const courseDetails = useSelector((state) => state.courseDetails)
    const {error, success, course,loading,rating } = courseDetails



    const courseList = useSelector((state) => state.courseList)
    const { courses, page, pages } = courseList

    if (success){
        console.log("course is ",courseDetails)

}



    const course_id = match.params.id.split('&')[0]



    useEffect(() => {
       
            dispatch(listCourseDetails(course_id))

            console.log(rating)

    }, [dispatch, match])


   const generateAlert = () => {
        alert("Hi");
    }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>
                    <Container>

                    <Modal  size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patience</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={logo} fluid className="w-100" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            ok
          </Button>
     
        </Modal.Footer>
      </Modal>

                        <Row>
                            <Col md={8} xs={12} className="col-md-offset-2">
                              
                                <Col className="mainheading">

                                    <h1 className="posttitle"> <strong> {course?.name} </strong></h1>
                                    <hr/>
                                    <p>{course?.description}</p>
                                    <p>Created By {course?.user?.name}</p>
                                    <Rating
            value={course.rating}
            text={`${course.numReviews} reviews`}
          />
                                    <p>{course?.created_at}</p>
                                  

                                </Col>

                                <Card className="p-4">

                                
                                <h2><strong>What You Will Learn</strong></h2>
                               <ul>
                                   <li>Create their own Python Programs</li>
                                   <li>Become an experienced Python Programmer</li>
                                   <li>Parse the Web and Create their own Games</li>


                               </ul>

                                </Card>
                    </Col>

                            <Col md={4} >

                            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={course?.image} />
  <Card.Body>
    <Card.Title><h1>${course?.price}</h1></Card.Title>


    <div className="d-grid gap-2">
  <Button variant="primary" onClick={handleShow} className="btn-block block" >
    Add To Cart
  </Button>
  <Button variant="primary"  onClick={handleShow} className="btn-block block">
   Buy
  </Button>
</div>

<strong>This course includes:</strong>

<ul>
    <li>Sectioned Source Code</li>
    <li>Full Time Access</li>
    <li>Access on Mobile and Tv</li>
    <li>On Demand Video</li>

</ul>



  </Card.Body>

</Card>

                              
                                
                            
                            </Col>
                       
                        </Row>
                        </Container>

                   
                       
                    
                </>
            )}
        </>
    )
}

export default PostScreen
