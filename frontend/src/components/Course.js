import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Course = ({ course }) => {
  return (
    <Card className='my-3 p-3 rounded'>
    <Link to={`/course/${course._id}`}>
      <Card.Img src={course.image} variant='top' />
    </Link>

    <Card.Body>
      <Link to={`/course/${course._id}`}>
        <Card.Title as='div'>
          <strong>{course.name}</strong>
        </Card.Title>
      </Link>

      <Card.Text as='div'>
        <Rating
          value={course.rating}
          text={`${course.numReviews} reviews`}
        />
      </Card.Text>

      <Card.Text as='h3'>${course.price}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default Course
