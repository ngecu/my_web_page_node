import React, {  useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col,Container, Image, ListGroup, Card, Button, Form, Badge} from 'react-bootstrap'
import { Markup } from 'interweave';
import Message from '../components/Message'
import Loader from '../components/Loader'

import './CSS/PostScreen.css'
import Meta from '../components/Meta'

import {listPostDetails} from '../actions/postActions'
import {listPosts} from '../actions/postActions'
import {getAuthorDetails} from '../actions/userActions'


const TagPostScreen = ({ match }) => {

  const getWordCount = (text) =>{
    let count = text.match(/\w+/g).length;
    return Math.ceil(count / 500)
  }

    const dispatch = useDispatch()

    const postlist = useSelector((state) => state.readPosts)
    const { loadingReadPosts, error, posts, page, pages } = postlist

    const tag_name = match.params.id



    useEffect(() => {
        dispatch(listPosts())
        
          },[dispatch] )


    return (
        <div className="my-4">
        <Container>
        <section className="featured-posts">
	<div className="section-title">
		<h2><span>{tag_name}</span></h2>
	</div>
  {loadingReadPosts ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
<Row className="listrecent" > 
    { posts.map((post) => (
    <>
       {post.author.isApproved && post?.tags.map((t) => (
         <>
         { tag_name === t.name ? (
         <Col xs={12} md={4}>
        <Link to={`/post/${post._id}`}>
           <img class="img-fluid" src={post.photo} alt={post.photo} style={{height:"70%"}} />
       </Link>
         <div class="card-block">
           <h2 class="card-title" style={{marginBottom:0}} ><Link to={`/post/${post._id}`}>{post.title}</Link></h2>
           <div class="metafooter">
             <div class="wrapfooter">
               <span class="meta-footer-thumb">
               </span>
               <span class="author-meta">
               <span class="post-date">{post.createdAt.substring(0, 10)}</span><span class="dot"></span><span class="post-read">{getWordCount(post.text)} mins read</span>
               </span>
             
             </div>
           </div>
         </div>
       </Col>
       ) : (<> </>) }
        
       </>

       ))} 
        <> </>
       
    </>
		
     ))}
    </Row>


)}
</section>
        </Container>
        </div>
    )
}

export default TagPostScreen
