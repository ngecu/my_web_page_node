import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Post = ({ post }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/post/${post._id}`}>
        <Card.Img src={post.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/post/${post._id}`}>
          <Card.Title as='div'>
            <strong>{post.title}</strong>
          </Card.Title>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Post
