import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Course = ({ course }) => {
  return (

    <div className="col-md-2 col-lg-3 col-12">
    <div className="card mb-2">
    <Link to={`/course/${course._id}`}>
      <img src={course.image} alt="x" className="card-img-top"/>
      </Link>
      <div className="card-body">
        <Card.Title>{course.name}</Card.Title>
        <small className="card-text text-muted">{course.user.name}</small>
        <div className="mb-2">
          <span className="font-bold"><strong>${course.price}</strong></span>
        </div>
      </div>

      <div className="card-footer">
        <div className="row">
          <div className="col-md-12 mb-2">
<small>
<Rating
            value={course.rating}
            text={`${course.numReviews} reviews`}
          />

</small>
                                

                                
            
                                </div>
          {/* <div className="col-md-2">
            <button type="button" className="btn btn-primary btn-sm btn-block"
              id="addToCart" onclick="addToCart">
              <span className="glyphicon glyphicon-shopping-cart"
                aria-hidden="true"></span> 
            </button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
        
  )
}

export default Course
