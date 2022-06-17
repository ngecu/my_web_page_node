import React, {  useState,useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col,Container, Image, ListGroup, Card, Button, Form, Badge} from 'react-bootstrap'
import { Markup } from 'interweave';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Author from "../components/Author";
import './CSS/PostScreen.css'
import Meta from '../components/Meta'

import {listPostDetails} from '../actions/postActions'
import {listPosts} from '../actions/postActions'



import {getAuthorDetails} from '../actions/userActions'
import Post from "../components/Post";
import Tag from "../components/Tag";

const PostScreen = ({ match }) => {

    const dispatch = useDispatch()

    const postDetails = useSelector((state) => state.postDetails)
    const {error, success, post,loading } = postDetails


    // const postlist = useSelector((state) => state.readPosts)

    // const { posts} = postlist
    // console.log("post is ",typeof(posts))

    const postList = useSelector((state) => state.postList)
    const { posts, page, pages } = postList

    if (success){
        console.log("post is ",postDetails)
    const tags = post?.tags

}



    const post_id = match.params.id.split('&')[0]



    useEffect(() => {
        dispatch(listPosts())
            dispatch(listPostDetails(post_id))

    }, [dispatch, match])


    return (
        <>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <>

                <Container>


                  </Container>



                    <Container>
                        <Row>
                     

                            <Col md={12} xs={12} className="col-md-offset-2">
                                <div className="after-post-tags">
                                    <Tag date={post?.createdAt} tags={post?.tags} />
                                    {/* <span>{post?.createdAt?.substring(0, 10)}</span> */}
                                    </div>
                                <Col className="mainheading">
                                    <h1 className="posttitle">{post?.title}</h1>
                                    <Author author={post?.author} />

                                </Col>

                                <Row>
                                    <Col  md={10} xs={10}>
                                    <div className="article-post">
                                        <Markup content={post?.body} />
                                    </div>
                                    <Col  md={2} xs={2}>
                                    Ads
                                    </Col>
                                    </Col>
                                </Row>
                                    

                                   


                            </Col>
                        <Col md={3}>
                        
                        </Col>
                        </Row>
                        </Container>
                        <div class="graybg">
                            <Container>
                        <div className="card-columns listrecent">
                            {posts.slice(0,3).map((post) => (

                                <Post post={post}  />



                            ))}


                        </div>
                        </Container>
                        </div>
                       
                    
                </>
            )}
        </>
    )
}

export default PostScreen
